const primary = 'bg-[#00103c]';

export default function Button({ children, secondary, type, onClick }) {
  return (
    <button
      type={type ? 'submit' : 'button'}
      className={`${secondary ? 'bg-gray-300' : primary} rounded-lg px-[0.5rem] py-[0.2rem] font-medium text-white
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
