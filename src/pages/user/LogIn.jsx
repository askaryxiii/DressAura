import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import {
  Card,
  Input,
  Button,
  Typography,
  Spinner,
} from '@material-tailwind/react'
import { useAuth } from '../../context/Auth/AuthContext'

const LogIn = () => {
  // states
  const { login, theme } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [userInfo, setUserInfo] = useState({ email: '', password: '' })
  const [errorSign, setErrorSign] = useState({
    errorEmail: false,
    errorPassword: false,
  })

  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  //   other variables  && hooks
  // eslint-disable-next-line no-useless-escape
  const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const navigate = useNavigate()
  const colorTheme = `${theme == 'dark' ? 'white' : 'blue-gray'}`

  // submit function
  const submitHandler = e => {
    e.preventDefault()
    setErrorSign({
      errorEmail: false,
      errorPassword: false,
    })
    setErrorMsg('')
    if (!regexp.test(userInfo?.email)) {
      setErrorSign({ ...errorSign, errorEmail: true })
    } else if (userInfo?.password?.length < 6) {
      setErrorSign({ ...errorSign, errorPassword: true })
    } else {
      setLoading(true)
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/user/login`, userInfo)
        .then(res => {
          navigate('/')

          console.log(res)
          const dataToken = res?.data
          if (!res) {
            setErrorMsg('incorrect token')
            return
          }
          login(dataToken)
        })
        .catch(err => {
          setErrorMsg(err?.response?.data)
        })
        .finally(() => setLoading(false))
    }
  }

  return (
    <Card
      color='transparent'
      shadow={false}
      className='flex items-center mt-4 text-black dark:text-white'
    >
      <Typography variant='h4'>Sign In</Typography>
      <Typography color={'gray'} className='mt-1 font-normal'>
        Nice to meet you! Enter your details to log in.
      </Typography>
      <form
        className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'
        onSubmit={submitHandler}
      >
        <div>
          <h3 className='text-center text-red-900'>{errorMsg}</h3>
        </div>
        <div className='mb-1 flex flex-col gap-6'>
          <Input
            label='Email'
            value={userInfo.email}
            onChange={e => {
              setUserInfo({ ...userInfo, email: e.target.value })
              setErrorSign({ ...errorSign, errorEmail: false })
              setErrorMsg('')
            }}
            error={errorSign.errorEmail}
            color={colorTheme}
          />
          <div className='relative'>
            <Input
              label='Password'
              value={userInfo.password}
              onChange={e => {
                setUserInfo({ ...userInfo, password: e.target.value })
                setErrorMsg('')
              }}
              error={errorSign.errorPassword}
              type={showPassword ? 'text' : 'password'}
              color={colorTheme}
            />
            {showPassword ? (
              <FaEyeSlash
                className='absolute transform -translate-y-1/2 top-1/2 right-2 text-xl'
                color='blue'
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaEye
                className='absolute transform -translate-y-1/2 top-1/2 right-2 text-xl'
                color='blue'
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>

        <Button
          className='mt-4 text-lg font-normal'
          fullWidth
          type='submit'
          disabled={loading}
          color={'indigo'}
        >
          {loading ? <Spinner color='amber' /> : 'Sign In'}
        </Button>
        <Typography className='mt-4 text-center font-normal' color={colorTheme}>
          Don&apos;t have an account?
          <Link
            to={'/signup'}
            className='font-medium text-gray-900 dark:text-gray-300 hover:text-blue-700 text-lg ml-2 transition-all'
          >
            Sign Up
          </Link>
        </Typography>
      </form>
    </Card>
  )
}

export default LogIn
