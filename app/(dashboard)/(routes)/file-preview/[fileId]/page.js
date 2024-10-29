"use client"; 
import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { ArrowLeft } from 'lucide-react';
import { use, useState } from 'react';
import React, { useEffect } from 'react';
import FileInfo from './_components/FileInfo';
import FileShareForm from './_components/FileShareForm';
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
const db = getFirestore(app);

function FilePreview({ params }) {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const unwrappedParams = use(params); // Unwrapping params using React.use()

  useEffect(() => {
    const getFileInfo = async () => {
      const docRef = doc(db, 'uploadedFile', unwrappedParams?.fileId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data", docSnap.data());
        setFile(docSnap.data());
      } else {
        console.log("No such document");
      }
    };

    getFileInfo();
  }, [unwrappedParams]);

  const onPasswordSave = async (password) => {
    const docRef = doc(db, 'uploadedFile', unwrappedParams?.fileId);
    await updateDoc(docRef, {
      password: password,
    });
    


    
  };

  return (
    <div className='py-10 px-20'>
      <div
        onClick={() => router.push('/upload')}
        className="flex gap-3 cursor-pointer text-blue-500 hover:text-blue-700"
      >
        <ArrowLeft />
        Go to Upload
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
        <FileInfo file={file} />
        <FileShareForm file={file} onPasswordSave={(password)=>onPasswordSave(password)} />
         
      </div>
    </div>
  );
}

export default FilePreview;
