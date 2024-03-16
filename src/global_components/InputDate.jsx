export default function InputDate({
  title = 'date',
  onChange,
  name,
  type = 'date',
  value,
  initData,
}) {
  return (
    <div>
      <div className='font-semibold '>{title}</div>
      <input
        className='bg-inherit border border-gray-300 rounded-btn  py-1 w-[90%] text-center'
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        defaultValue={initData}
      />
    </div>
  );
}
