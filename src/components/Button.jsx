export const Button = ({ text, onClick }) => {
  return (
    <button className='cursor-pointer text-blue-700' onClick={onClick}>
      {text}
    </button>
  )
}
