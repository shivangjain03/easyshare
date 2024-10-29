import { Copy } from 'lucide-react';
import React, { useState } from 'react';
import GlobalApi from '../../../../../../app/_utils/GlobalApi';

function FileShareForm({ file, onPasswordSave }) {
  const [password, setPassword] = useState('');
  const [isPasswordEnable, setIsEnablePassword] = useState(false);
  const [copyStatus, setCopyStatus] = useState(''); // For feedback on copy action
  const [email, setEmail] = useState(''); // State for email input

  const handleCheckboxChange = () => {
    setIsEnablePassword(prevState => !prevState); // Toggle the password enable state
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(file.shortUrl)
      .then(() => {
        setCopyStatus('Copied!');
        setTimeout(() => setCopyStatus(''), 2000); // Clear the message after 2 seconds
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
        setCopyStatus('Failed to copy');
      });
  };

  const sendEmail = () => {
    const data = {
      emailToSend: email, // Use the state variable
      shortUrl: file.shortUrl,
      userName: file.user?.fullName, // Ensure user is defined
      fileName: file.fileName,
      fileSize: file.fileSize,
      fileType: file.fileType,
    };

    GlobalApi.SendEmail(data).then(resp => {
      console.log(resp);
    });
  };

  return file && (
    <div className='flex flex-col gap-3'>
      <div>
        <label className='text-[14px] text-gray-500'>Short Url</label>
        <div className='flex gap-5 p-2 border rounded-md items-center'>
          <input
            type='text'
            value={file.shortUrl}
            className='flex-grow disabled:text-gray-500 bg-transparent outline-none'
            readOnly
          />
          <Copy
            className='text-gray-400 hover:text-gray-500 cursor-pointer'
            onClick={handleCopy}
          />
          {copyStatus && <span className='text-green-500'>{copyStatus}</span>}
        </div>
      </div>

      <div className='flex items-center'>
        <input
          type='checkbox'
          checked={isPasswordEnable}
          onChange={handleCheckboxChange}
          className='mr-2' // Add margin to the right for spacing
        />
        <label className='text-[14px] text-gray-500'>Enable Password</label>
      </div>

      {isPasswordEnable && (
        <div>
          <label className='text-[14px] text-gray-500'>Password</label>
          <div className='relative flex gap-5 p-2 border rounded-md'>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='flex-grow disabled:text-gray-500 bg-transparent outline-none'
            />
            <button
              onClick={() => onPasswordSave(password)}
              className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-md'
            >
              Save
            </button>
          </div>
        </div>
      )}

      <div className='border rounded-md p-3 mt-5'>
        <label className='text-[14px] text-gray-500'>Send File to Email</label>
        <div className='border rounded-md p-2'>
          <input
            type="email"
            placeholder='example@gmail.com'
            className='bg-transparent outline-none'
            value={email} // Bind the input value to email state
            onChange={(e) => setEmail(e.target.value)} // Update email state on change
          />
        </div>
        <button
          className='p-2 disabled:bg-gray-300 bg-primary text-white hover:bg-blue-600 w-full mt-2 rounded-md'
          onClick={sendEmail} // Call sendEmail directly
        >
          Send Email
        </button>
      </div>
    </div>
  );
}

export default FileShareForm;
