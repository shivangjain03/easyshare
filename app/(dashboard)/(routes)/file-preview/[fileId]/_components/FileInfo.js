import React, { useEffect, useState } from 'react'
import Image from 'next/image'

function FileInfo({file}) {
    const [fileType, setFileType] = useState();
    useEffect(() => {
        file&&setFileType(file?.fileType.split('/')[0]);    
        console.log(fileType);
    },[file])
  return file&&(
    
    <div className='text-center border
    flex justify-center m-4 flex-col items-center p-2 rounded-full border-blue-200'>
        <div className='w-300 h-300 bg-gray-300 rounded-full flex justify-center items-center'>
            <Image src={fileType==='image'?file?.fileUrl:'/file.png'} alt='file' width={200} height={200} className='rounded-md h-[200px] object-contain'/>
            {/* <img src={fileType==='image'&&file?.fileUrl} alt='file' className='w-20 h-20 rounded-full'/> */}
        </div>
        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold'>{file?.fileName}</h1>
            <p className='text-gray-500'>{file?.fileType}</p>

        </div>         
    </div>
  )
}

export default FileInfo
