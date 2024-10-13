import { Tooltip } from '@material-tailwind/react'
import { FaChevronUp } from 'react-icons/fa'

const UpArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div>
      <Tooltip content='Page Up' placement='top'>
        <button
          onClick={scrollToTop}
          className='fixed bottom-6 right-6 bg-blue-800 rounded-lg text-gray-200'
        >
          <FaChevronUp size={30} />
        </button>
      </Tooltip>
    </div>
  )
}

export default UpArrow
