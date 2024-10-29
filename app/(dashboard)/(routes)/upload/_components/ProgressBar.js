import React from 'react'

function ProgressBar({progress=40}) {
  return (
    <div className='bg-gray-400 w-full mt-3 rounded-full'>
        <div className='p-1 bg-primary rounded-full text-white text-center'
        style={{width:`${progress}%`}}>
            {`${Number(progress).toFixed(0)}%`}  

        </div>
        

        
      
    </div>
  )
}

export default ProgressBar
