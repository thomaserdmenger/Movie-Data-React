export const Button = ({ text, onClick, svg }) => {
  return (
    <button
      className='flex gap-2 cursor-pointer border-2 px-4 py-1 rounded-full border-purple-600 text-gray-300 items-center hover:text-gray-300 hover:bg-purple-600 transition-all duration-500'
      onClick={onClick}>
      {text} {svg}
    </button>
  )
}
