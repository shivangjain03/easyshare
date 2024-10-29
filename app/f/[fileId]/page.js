"use client";
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import FileItem from './_components/FileItem'; // Importing fileItem component
import Link from 'next/link';
import Image from 'next/image';

// Firebase configuration and initialization
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "easyshare-21ec4.firebaseapp.com",
  projectId: "easyshare-21ec4",
  storageBucket: "easyshare-21ec4.appspot.com",
  messagingSenderId: "515584752013",
  appId: "1:515584752013:web:7eed5b9778ce7da5bea5c4",
  measurementId: "G-7LP8XPYFEX"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function FileView({ params }) { // The 'params' will be passed as a prop
  const unwrappedParams = React.use(params); // Unwrapping the params
  const [file, setFile] = useState(null);

  useEffect(() => {
    unwrappedParams.fileId&&getFileInfo(unwrappedParams.fileId)
    // if (unwrappedParams && unwrappedParams.fileId) { // Check if unwrappedParams and fileId are available
    //   console.log('File ID:', unwrappedParams.fileId);
    //   getFileInfo(unwrappedParams.fileId);
    // } else {
    //   console.error('File ID is not available');
    // }
  }, [unwrappedParams]);

  const getFileInfo = async (fileId) => {
    try {
      const docRef = doc(db, 'uploadedFile', fileId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setFile(docSnap.data());
      } else {
        console.log("No such document");
      }
    } catch (error) {
      console.error("Error retrieving document:", error);
    }
  };

  return (
    <div className=' h-screen w-full flex justify-center items-center flex-col'>
      <Link href="">
      <Image src='/logo1.png' alt='logo' width={150} height={150} />
      </Link>
      <FileItem file={file} />
    </div>
  );
}

export default FileView;
