import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';

import { v4 as uuid } from 'uuid';
import Button from '../../../global_components/Button';
import { PictureIcon } from '../../../icons';

export default function EventModalImage() {
  const [image, setImage] = useState([]);
  const fileEl2 = useRef();

  const handleUploadImage = (e) => {
    setImage([...image, e.target.files[0]]);
  };

  const handleResetInput = () => {
    if (fileEl2.current) {
      fileEl2.current.value = null;
    }
  };

  const handleCancelImage = (el) => {
    const tempImage = image?.filter((file) => file.name !== el.name);
    setImage(tempImage);
    handleResetInput();
  };

  const handleCloseUpload = () => {
    document.getElementById('my_modal_1').close();
    setImage([]);
    handleResetInput();
  };

  const handleformSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      if (image) {
        image.forEach((value) => {
          formData.append('image', value);
        });
      }

      toast.success('create successfully');
      document.getElementById('my_modal_1').close();

      setImage({});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='flex justify-end gap-4 pr-4'>
      <button
        type='button'
        className='btn bg-primary text-white'
        onClick={() => document.getElementById('my_modal_1').showModal()}
      >
        upload Image
      </button>
      <dialog id='my_modal_1' className='modal'>
        <div className='modal-box'>
          <form
            onSubmit={handleformSubmit}
            className='flex flex-col  gap-[1rem] w-full max-h-[70%]'
          >
            <span className='text-[1.2rem] font-medium '>Image</span>
            {image[0] ? (
              <div className=' flex flex-col gap-2 justify-center'>
                {image.map((el) => (
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
                      onClick={() => handleCancelImage(el)}
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
            <div className='flex flex-row justify-end items-end  gap-4'>
              <div className='md:w-[18%] sm:[30%]'>
                <input
                  name='image'
                  type='file'
                  ref={fileEl2}
                  className='hidden'
                  onChange={handleUploadImage}
                />
              </div>

              <Button onClick={() => fileEl2.current.click()}>
                add Image{' '}
              </Button>
              <div className='modal-action '>
                <div method='dialog flex '>
                  <button
                    type='button'
                    className='bg-gray-400 rounded-btn px-[0.5rem] py-[0.2rem] h-fit text-white font-semibold'
                    onClick={handleCloseUpload}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
            <Button type='submit'>Upload</Button>
          </form>
        </div>
      </dialog>

      {/* <button
        type='button'
        className='btn bg-primary text-white'
        onClick={() => document.getElementById('my_modal_4').showModal()}
      >
        Delete Image
      </button> */}
      <dialog id='my_modal_4' className='modal'>
        <div className='modal-box w-11/12 max-w-5xl bg-pri'>
          <h3 className='font-bold text-lg'>Hello!</h3>
          <p className='py-4'>Click the button below to close</p>
          <div className='modal-action'>
            <form method='dialog'>
              <button
                type='button'
                className='btn'
                onClick={() => document.getElementById('my_modal_4').close()}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
