"use client"; // Add this directive at the top of the file

import { File, Shield, ShieldAlert, Upload } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

function SideNav({closeSideBar}) {
  const menuList = [
    {
      id: 1,
      title: 'Upload',
      icon: Upload,
      path: '/upload'
    },
    {
      id: 2,
      title: 'Files',
      icon: File,
      path: '/files'
    },
    {
      id: 3,
      title: 'Upgrade',
      icon: Shield,
      path: '/upgrade'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className='shadow-sm border-r h-full dark:text-gray-900'>
      <div className='p-5 border-b'>
        <Image src="/logo1.png" alt="EasyShare" width={250} height={200} />
      </div>
      <div className='flex flex-col float-left'>
        {menuList.map((item, index) => (
          <button
            key={item.id}
            className={`flex gap-2 p-4 px-150 hover:bg-gray-100 w-full text-gray-500 dark:hover:bg-gray-700 transform dark:hover:translate-x-1.5 ${activeIndex === index ? 'bg-blue-50 dark:bg-gray-900 text-primary' : ''}`}
            onClick={() => {setActiveIndex(index);closeSideBar()}}
          >
            <item.icon />
            <h2>{item.title}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNav;