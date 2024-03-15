export const Button = ({ text, onClick }) => {
  return (
    <button
      className='cursor-pointer border-2 px-2 py-1 rounded-full border-gray-700'
      onClick={onClick}>
      {text}
    </button>
  )
}
