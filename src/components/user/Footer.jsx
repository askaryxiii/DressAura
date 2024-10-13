import { Typography } from '@material-tailwind/react'

const Footer = () => {
  return (
    <footer className='w-full bg-black p-8 dark:border border-gray-400'>
      <div className='flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between'>
        <img src='/img/footer-logo.png' alt='logo-ct' className='w-22' />
        <ul className='flex flex-wrap items-center gap-y-2 gap-x-8'>
          <li>
            <Typography
              as='a'
              href='#'
              color='white'
              className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as='a'
              href='#'
              color='white'
              className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as='a'
              href='#'
              color='white'
              className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as='a'
              href='#'
              color='white'
              className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <div className='flex justify-center my-2'>
        <img src='/img/payment.png' />
      </div>
      <hr className='my-8 border-blue-gray-50' />
      <Typography color='gray' className='text-center font-normal'>
        &copy; 2024 E-Commerce
      </Typography>
    </footer>
  )
}

export default Footer
