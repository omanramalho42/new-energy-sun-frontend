"use client"

import { convertFileToUrl } from '@/lib/utils'
import Image from 'next/image'
import React, {useCallback} from 'react'
import { useDropzone } from 'react-dropzone'

interface FileUploaderProps {
  files: File[],
  onChange: (file: any) => void
}

export const FileUploader:React.FC<FileUploaderProps> = ({ files, onChange }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles)
  }, [])

  const {
    getRootProps,
    getInputProps
  } = useDropzone({onDrop})

  return (
    <div
      className='tex-sm flex cursor-pointer flex-col items-center justify-center gap-3 rounded-md border border-dashed border-dark-500 bg-dark-400 p-5'
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {files && files.length > 0 ? 
        (
          <Image
            src={convertFileToUrl(files[0])}
            width={1000}
            height={1000}
            alt='uploaded file'
            className='max-h-[100px] overflow-hidden object-contain' 
          /> 
        ) : (
          <>
            <Image
              src="/assets/icons/upload.svg"
              alt='upload'
              width={40}
              height={40} 
            />
            <div 
              className="flex flex-col justify-center gap-2 text-center text-dark-600"
            >
              <p
                className='text-sm text-white'
              >
                <span className='text-green-500'>
                  Click to upload
                </span> {" "}
                or drag and drop
              </p>
              <p className='text-white'>
                PDF (max 800x400)
              </p>
            </div>
          </>
        )
      }
    </div>
  )
}