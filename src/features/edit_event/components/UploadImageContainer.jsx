import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';
import { PictureIcon } from '../../../icons';
import Button from '../../../global_components/Button';

export default function UploadImageContainer({ onClick, image, onChange }) {
  const fileEl2 = useRef();
  return (
    <>
      <span className='text-[1.2rem] font-medium '>Image</span>
      {image[0] ? (
        <div className=' grid grid-cols-2 gap-2'>
          {image.map((el) => (
            <div className=' relative' key={uuid()}>
              <img
                id={uuid()}
                name={el.name}
                className='object-cover w-full h-[16rem]  rounded-lg'
                src={URL.createObjectURL(el)}
                alt='cover pic'
              />
              <button
                type='button'
                className='absolute top-0 right-0 m-3 bg-white w-[1.5rem] font-bold h-[1.5rem] text-center rounded-[100%]'
                onClick={() => onClick(el)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex flex-col items-center'>
          <PictureIcon />
        </div>
      )}
      <div className='flex flex-row justify-end'>
        <div className='md:w-[18%] sm:[30%]'>
          <input
            name='image'
            type='file'
            ref={fileEl2}
            className='hidden'
            onChange={onChange}
          />
        </div>
        <Button onClick={() => fileEl2.current.click()}>Upload </Button>
      </div>
    </>
  );
}
