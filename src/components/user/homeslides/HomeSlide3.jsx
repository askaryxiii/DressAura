const HomeSlide3 = () => {
  return (
    <div>
      <div className='h-1 bg-blue-gray-300 sm:m-4 rounded'></div>
      <div className='flex  justify-evenly sm:mb-12'>
        <img
          src='/img/last-section/1.jpg'
          className='w-1/6 h-1/6 rounded cursor-pointer hover:scale-110 transition-all'
        />
        <img
          src='/img/last-section/2.jpg'
          className='w-1/6 h-1/6 rounded cursor-pointer hover:scale-110 transition-all'
        />

        <img
          src='/img/last-section/3.jpg'
          className='w-1/6 h-1/6 rounded cursor-pointer hover:scale-110 transition-all'
        />
        <img
          src='/img/last-section/4.jpg'
          className='w-1/6 h-1/6 rounded cursor-pointer hover:scale-110 transition-all'
        />
      </div>
    </div>
  )
}

export default HomeSlide3
