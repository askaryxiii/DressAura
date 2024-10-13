import { Link, useLocation } from 'react-router-dom'

const AdminSideBar = () => {
  const location = useLocation()
  return (
    <div>
      <div className='fixed top-18 z-10 h-full text-center text-gray-500 font-bold text-3xl  bg-teal-900 w-1/6 '>
        <ul className='flex flex-col items-center pb-16 justify-around h-full '>
          <li
            className={`${
              location.pathname == '/admin' && 'text-blue-400'
            } hover:text-black transition-all`}
          >
            <Link to={'/admin'}>DashBoard</Link>
          </li>
          <li
            className={`${
              location.pathname == '/admin/products' && 'text-blue-400'
            } hover:text-black transition-all`}
          >
            <Link to={'/admin/products'}>Products</Link>
          </li>
          <li
            className={`${
              location.pathname == '/admin/users' && 'text-blue-400'
            } hover:text-black transition-all`}
          >
            <Link to={'/admin/users'}>Users</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AdminSideBar
