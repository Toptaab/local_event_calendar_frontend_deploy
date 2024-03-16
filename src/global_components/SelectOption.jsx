import { useState } from 'react';

export default function SelectOption({
  title = 'title',
  forMap,
  errorMessage,
  name,
  handleClick,
}) {
  const [selectPlaceholder, setSelectPlaceholder] = useState(false);

  const handleSelectPlaceholder = (e, el) => {
    setSelectPlaceholder(el.name);
    handleClick(e);
  };

  return (
    <div className='flex flex-col gap-1'>
      <span className='pl-3 font-semibold'>{title}</span>

      <div
        className='text-center  border dropdown border-gray-300 bg-transparent rounded-btn w-full relative h-[2rem]  '
        role='button'
        tabIndex={0}
      >
        <div className='p-1 font-medium'>
          {selectPlaceholder || 'Please select'}
        </div>
        <div className=' shadow dropdown-content flex flex-col z-[1] bg-base-100 rounded-lg p-0 bg w-full absolute left-0 top-[2rem] max-h-[40vh] overflow-scroll font-medium'>
          {forMap?.map((el) => (
            <button
              className='border border-gray-300 rounded-lg py-[0.3rem] w-full hover:bg-[]'
              type='button'
              key={el.id}
              name={name}
              value={el.id}
              onClick={(e) => handleSelectPlaceholder(e, el)}
            >
              {el.name}
            </button>
          ))}
        </div>
      </div>

      <span className='text-red-500 pl-3 '>{errorMessage}</span>
    </div>
  );
}
