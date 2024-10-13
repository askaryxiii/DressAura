import { Link } from 'react-router-dom'
const AdminProducts = () => {
  return (
    <div>
      <div>
        <h1>DashBoard</h1>
        <ul>
          <li>
            <Link to={'/users'}>Users</Link>
          </li>
          <li>
            <Link to={'/products'}>Products</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AdminProducts
