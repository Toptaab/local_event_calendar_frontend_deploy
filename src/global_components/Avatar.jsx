function Avatar({ src }) {
  return (
    <div className='avatar'>
      <div className='w-12 border-4 border-white shadow-md rounded-full'>
        <img src={src} alt='' />
      </div>
    </div>
  );
}

export default Avatar;
