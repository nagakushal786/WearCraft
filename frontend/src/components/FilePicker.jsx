import React from 'react';
import CustomButton from './CustomButton';

const FilePicker = ({file, setFile, readFile}) => {
  return (
    <div className='filepicker-container'>
      <div className='flex flex-1 flex-col'>
        <label htmlFor='file-upload' className='filepicker-label'>Upload</label>
        <input
          id='file-upload'
          type='file'
          accept='image/*'
          onChange={(e)=> setFile(e.target.files[0])}
        />

        <p className='mt-3 text-zinc-700 text-xs truncate border border-gray-500 py-2 px-2 rounded-md w-fit'>
          {file==='' ? "No file chosen" : file.name}
        </p>
      </div>

      <div className='mt-4 flex flex-wrap gap-3'>
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={()=> readFile("logo")}
          customStyles="text-xs"
        />

        <CustomButton
          type="filled"
          title="Full"
          handleClick={()=> readFile("full")}
          customStyles="text-xs"
        />
      </div>
    </div>
  )
}

export default FilePicker;