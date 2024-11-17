// ./app/f/[fileId]/page.js

"use client";
import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import FileItem from './_components/FileItem';
import Link from 'next/link';
import Image from 'next/image';
import { db } from '../../../app/lib/firebase'; // Import db
import { use } from 'react';

function FileView({ params }) {
  const unwrappedParams = use(params);
  const [file, setFile] = useState(null);
  const fileId = unwrappedParams?.fileId;

  useEffect(() => {
    const getFileInfo = async (fileId) => {
      const docRef = doc(db, 'uploadedFile', fileId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data", docSnap.data());
        setFile(docSnap.data());
      } else {
        console.log("No such document");
      }
    };

    if (fileId) {
      getFileInfo(fileId);
    }
  }, [fileId]);

  return (
    <div>
      <h1>File View</h1>
      {file ? (
        <FileItem file={file} />
      ) : (
        <p>Loading...</p>
      )}
      <Link href="/">Go back</Link>
    </div>
  );
}

export default FileView;
