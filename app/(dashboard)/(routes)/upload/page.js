// ./app/(dashboard)/(routes)/upload/page.js

"use client";
import React, { useEffect, useState } from 'react';
import UploadForm from './_components/UploadForm';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { useUser } from '@clerk/nextjs';
import { generateRandomString } from '../../../../app/_utils/GenerateRandomString';
import { useRouter } from 'next/navigation';
import { db, storage } from '../../../../app/lib/firebase'; // Import db and storage

function Upload() {
  const { user } = useUser();
  const [progress, setProgress] = useState();
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const router = useRouter();
  const [fileDocId, setFileDocId] = useState();

  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type
    };
    const storageRef = ref(storage, 'file-upload/' + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progress);

      if (progress === 100) {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          saveInfo(file, downloadURL);
        });
      }
    });
  };

  const saveInfo = async (file, fileUrl) => {
    const docId = generateRandomString().toString();
    await setDoc(doc(db, "uploadedFile", docId), {
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl: fileUrl,
      userEmail: user?.primaryEmailAddress?.emailAddress || 'unknown',
      userName: user?.fullName || 'unknown',
      password: '',
      id: docId,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + 'f/' + docId
    });
    setFileDocId(docId);
    setUploadCompleted(true);
  };

  useEffect(() => {
    if (uploadCompleted) {
      setTimeout(() => {
        setUploadCompleted(false);
        router.push('/file-preview/' + fileDocId);
      }, 2000);
    }
  }, [uploadCompleted]);

  return (
    <div className='p-10 px-10 md:px-28'>
      <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-bold text-center py-5 text-transparent sm:text-4xl">
        Start Uploading Files and Share it!
      </h2>
      <UploadForm uploadBtnClick={(file) => uploadFile(file)} progress={progress} />
    </div>
  );
}

export default Upload;
