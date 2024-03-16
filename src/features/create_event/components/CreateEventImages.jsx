import React, { useMemo, useRef, memo } from 'react';
import { v4 as uuid } from 'uuid';
import Button from '../../../global_components/Button';
import { PictureIcon } from '../../../icons';
import useCreateEvent from '../hook/useCreateEvent';

// const { CreateEventContextObject, CreateEventImageObject } = useCreateEvent();
// const { tempImage } = CreateEventImageObject;

const CreateEventImages = memo(({ tempImage }) => {
  const { CreateEventContextObject } = useCreateEvent();
  const {
    coverImage,
    handleUploadCover,
    handleUploadImage,
    handleDeleteImage,
    error,
  } = CreateEventContextObject;

  const fileEl = useRef();
  const fileEl2 = useRef();

  return (
    <div className='flex flex-col  gap-[1rem] w-full'>
      {/* Cover Image */}
      <div className='flex flex-col  gap-[1rem] w-full'>
        <span className='text-[1.2rem] font-medium'>Cover Image</span>
        {coverImage ? (
          <div className=' flex justify-center items-center'>
            <img
              className='object-cover w-full h-[34vh] rounded-lg'
              src={URL.createObjectURL(coverImage)}
              alt='cover pic'
            />
          </div>
        ) : (
          <div className='flex flex-col items-center'>
            <PictureIcon />
          </div>
        )}

        {/* Cover Image upload */}
        <div className='flex flex-row w-full items-center justify-end'>
          {error?.coverImage && (
            <small className='text-red-500 pl-[0.5rem] flex  w-full'>
              {error.coverImage}
            </small>
          )}
          <div className='md:w-[18%] sm:[30%] justify-end w-full hidden'>
            <input
              name='coverImage'
              type='file'
              ref={fileEl}
              className='hidden'
              onChange={handleUploadCover}
            />
          </div>

          <Button onClick={() => fileEl.current.click()}>Upload </Button>
        </div>
        <div />
      </div>

      {/* Event images */}
      <div className='flex flex-col  gap-[1rem] w-full'>
        <span className='text-[1.2rem] font-medium '>Image</span>
        {tempImage[0] ? (
          <div className=' flex flex-col gap-2 justify-center'>
            {tempImage.map((el) => (
              <div className=' relative' key={uuid()}>
                <img
                  id={uuid()}
                  name={el.name}
                  className='object-cover w-full h-[34vh] rounded-lg'
                  src={URL.createObjectURL(el)}
                  alt='cover pic'
                />
                <button
                  type='button'
                  className='absolute top-0 right-0 m-3 bg-white w-[1.5rem] font-bold h-[1.5rem] text-center rounded-[100%]'
                  onClick={() => handleDeleteImage(el, fileEl2)}
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

        {/* Event images upload */}
        <div className='flex flex-row justify-end'>
          <div className='md:w-[18%] sm:[30%]'>
            <input
              name='image'
              type='file'
              ref={fileEl2}
              className='hidden'
              onChange={handleUploadImage}
            />
          </div>

          <Button onClick={() => fileEl2.current.click()}>Upload </Button>
        </div>
      </div>
    </div>
  );
});

export default CreateEventImages;
