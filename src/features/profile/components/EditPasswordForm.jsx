import React from 'react';
import Input from '../../../global_components/Input';
import useProfileContext from '../hook/useProfileContext';

function EditPasswordForm() {
  const ProfileContextObject = useProfileContext();

  console.log(ProfileContextObject, 'form Edit password');
  return (
    <form className='border-2 rounded-lg w-full flex flex-col p-3 gap-3'>
      <div className='p-3 border-b-2 w-full'>Change Password</div>

      <div className='w-full border-b-2 pb-4'>
        <Input title='Old Password' placeholder='password' />
      </div>
      <div className='w-full'>
        <div className='w-full flex flex-col gap-2'>
          <Input title='New Password' placeholder='password' />
          <Input title='Confirm New Password' placeholder='confirm password' />
        </div>
      </div>

      <div className='flex gap-3 justify-end'>
        <button type='button' className='btn '>
          cancel
        </button>
        <button type='submit' className='btn '>
          save
        </button>
      </div>
    </form>
  );
}

export default EditPasswordForm;
