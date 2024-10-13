import { Card, Typography, Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from '../../../context/Auth/AuthContext'
import ClockLoader from 'react-spinners/ClockLoader'

const TABLE_HEAD = ['First Name', 'Role', 'Operations']

const UserDashboard = () => {
  const { getAllUsers, allUsersInfo, changeUserRole, deleteUserById, loading } =
    useAuth()

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <>
      {loading ? (
        <div className='h-[90vh] flex items-center justify-center '>
          <ClockLoader color='#2d5335' size={70} />
        </div>
      ) : (
        <div className='w-full flex flex-col gap-4'>
          <h1 className='text-center text-4xl text-gray-900 dark:text-gray-200 font-bold mt-4'>
            Users
          </h1>
          <Link to={`/admin/users/add`}>
            <Button color='green' className='w-fit'>
              Add New User
            </Button>
          </Link>
          <section className='w-full'>
            <Card className='h-full w-full bg-blue-gray-700 border border-gray-500 dark:border-none px-6'>
              <table className='w-full min-w-max table-auto text-center'>
                <thead>
                  <tr>
                    {TABLE_HEAD?.map(head => (
                      <th key={head} className='pb-4 pt-10'>
                        <Typography
                          variant='small'
                          color='black'
                          className='font-bold leading-none text-xl'
                        >
                          {head || ''}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className='w-full'>
                  {allUsersInfo?.map(
                    ({ firstName, role, _id, image, email }, index) => (
                      <tr key={index} className='border border-teal-900'>
                        <td className='py-4'>
                          <Typography
                            variant='small'
                            className='font-normal text-white text-lg'
                          >
                            {firstName || ''}
                          </Typography>
                        </td>
                        <td className='py-4'>
                          <Typography
                            variant='small'
                            className='font-normal text-white text-lg'
                          >
                            {role || ''}
                          </Typography>
                        </td>
                        <td className='py-4'>
                          <Typography
                            variant='small'
                            as={'div'}
                            className='font-normal text-white flex items-center justify-center gap-4'
                          >
                            <Link to={`/admin/users/${_id}`}>
                              <Button color='blue'>View</Button>
                            </Link>
                            <Link to={`/admin/users/edit/${_id}`}>
                              <Button color='amber'>Edit</Button>
                            </Link>
                            <Button
                              color='red'
                              onClick={() => deleteUserById(image, _id)}
                              disabled={
                                email == 'mohamed@mohamed.com' ||
                                email == 'heshamkhalil1988@gmail.com'
                              }
                            >
                              Delete
                            </Button>
                            <Button
                              color={role === 'admin' ? 'blue-gray' : 'green'}
                              onClick={() => changeUserRole(_id)}
                              disabled={
                                email == 'mohamed@mohamed.com' ||
                                email == 'heshamkhalil1988@gmail.com'
                              }
                              className='w-40'
                            >
                              {role == 'admin' ? 'Remove Admin' : 'Make Admin'}
                            </Button>
                          </Typography>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </Card>
          </section>
        </div>
      )}
    </>
  )
}

export default UserDashboard
