"use client";
import React, { useEffect, useState } from 'react'
import UploadForm from './_components/UploadForm'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { initializeApp } from 'firebase/app';
import { get } from 'http';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { useUser } from '@clerk/nextjs';
import { generateRandomString } from '../../../../app/_utils/GenerateRandomString';
import { useRouter } from 'next/navigation';


const firebaseConfig = {
  apiKey: "AIzaSyA1M2Ddfvy1FlfoEmVYwfLJc0txJidZSBI",
  authDomain: "easyshare-21ec4.firebaseapp.com",
  projectId: "easyshare-21ec4",
  storageBucket: "easyshare-21ec4.appspot.com",
  messagingSenderId: "515584752013",
  appId: "1:515584752013:web:7eed5b9778ce7da5bea5c4",
  measurementId: "G-7LP8XPYFEX"
};

const app = initializeApp(firebaseConfig);





function upload() {
  const{user}=useUser();
  const [progress,setProgress]=useState();
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const storage=getStorage(app)
  const db=getFirestore(app)
  const router=useRouter();
  const[fileDocId,setFileDocId]=useState();

  const uploadFile=(file)=>{
    const metadata = {
      contentType: file.type
    };
    const storageRef = ref(storage, 'file-upload/'+file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(progress);
        
      
      progress==100&&getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        saveInfo(file,downloadURL);
      });
    }, )

  }
  const saveInfo=async (file,fileUrl)=>{
    const docId=generateRandomString().toString()
    await setDoc(doc(db, "uploadedFile",docId ), {
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl: fileUrl,
      userEmail: user?.primaryEmailAddress?.emailAddress || 'unknown',
      userName: user?.fullName || 'unknown',
      password: '',
      id: docId,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL +'f/'+ docId
    })
    setFileDocId(docId);
    setUploadCompleted(true);
  }

  useEffect(() => {
    uploadCompleted&&
    setTimeout(() => {
      setUploadCompleted(false);
      router.push('/file-preview/'+fileDocId)
    }, 2000);
  }, [uploadCompleted])

  
  return (
    <div className='p-10 px-10 md:px-28'>
      <h2
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-bold text-center py-5 text-transparent sm:text-4xl"
      >
        Start Uploading Files and Share it!
      </h2>
      <UploadForm uploadBtnClick={(file)=>uploadFile(file)}
      progress={progress}  
        />
    </div>
  )
}

export default upload
