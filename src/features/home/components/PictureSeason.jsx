function PictureSeason({ src, month, onClick }) {
  return (
    <button
      className='relative  h-[14rem] rounded-md overflow-hidden '
      onClick={onClick}
      type='button'
      aria-label='Save'
    >
      <img src={src} alt='' className='h-full w-full object-cover' />
      <div className='absolute left-1/2 bottom-1 transform translate-x-[-50%]  text-white'>
        {month}
      </div>
    </button>
  );
}

export default PictureSeason;
