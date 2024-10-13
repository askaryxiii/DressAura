import { Input, Option, Select, Typography } from '@material-tailwind/react'
// import { useAuth } from '../../context/Auth/AuthContext'

const InputForm = ({
  label,
  input,
  text,
  text2,
  textType,
  selectType,
  gender,
  disabled,
  onChange,
}) => {
  return (
    <div>
      <Typography
        variant='paragraph'
        className=' text-gray-700 dark:text-blue-gray-300 mb-2 font-bold'
      >
        {label || ''}
      </Typography>
      {textType && (
        <Input
          className='!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10'
          labelProps={{
            className: 'hidden',
          }}
          type='text'
          //   label={input}
          value={input || ''}
          disabled={disabled}
          onChange={onChange}
        />
      )}
      {selectType && (
        <Select value={gender || ''} onChange={onChange} disabled={disabled}>
          <Option value='male'>Male</Option>
          <Option value='female'>Female</Option>
        </Select>
      )}

      <Typography
        variant='small'
        className='mt-2 flex items-center gap-1 font-normal text-gray-400'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='-mt-px h-4 w-4'
        >
          <path
            fillRule='evenodd'
            d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z'
            clipRule='evenodd'
          />
        </svg>
        {text}.
      </Typography>
      {text2 && (
        <Typography
          variant='small'
          className='mt-2 flex items-center gap-1 font-normal text-gray-400'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='-mt-px h-4 w-4'
          >
            <path
              fillRule='evenodd'
              d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z'
              clipRule='evenodd'
            />
          </svg>
          {text2}.
        </Typography>
      )}
    </div>
  )
}

export default InputForm
