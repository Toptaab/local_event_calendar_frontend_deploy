import { EyeIcon } from '../icons';

export default function Input({
  name,
  type = 'text',
  title = 'title',
  placeholder = 'type here...',
  children,
  errorMessage,
  value,
  onChange,
  onClick,
  border,
  onClickButton,
}) {
  const finalValue = (value ? value[name] : '') || '';

  return (
    <label htmlFor={name}>
      <p className='p-[0.5rem]  font-semibold text-[1.0rem]'>{title}</p>
      <div
        className={`${border || 'border-2 rounded-lg'} w-full px-4 py-2  flex items-center gap-2`}
      >
        {children}
        <input
          onChange={onChange}
          value={finalValue}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className=' outline-none w-full bg-inherit '
          onClick={onClick}
        />
        {(type === 'password' || onClickButton) && (
          <button type='button' aria-label='Save' onClick={onClickButton}>
            <EyeIcon />
          </button>
        )}
      </div>
      {errorMessage && (
        <small className='text-red-500 pl-[0.5rem]'>{errorMessage}</small>
      )}
    </label>
  );
}
