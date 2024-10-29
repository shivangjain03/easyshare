import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function TopHeader() {
  return (
    <div className='flex p-11 border-b items-center justify-between
    md:justify-end'>
        <AlignJustify className='md:hidden' />
        <Image src="/logo1.png" alt="EasyShare" width={250} height={200} 
        className='md:hidden'/>

      
    </div>
  )
}

export default TopHeader
