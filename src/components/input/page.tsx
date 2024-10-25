import { Controller } from 'react-hook-form';


interface InputProps {
  name: string;
  control: any;
  placeholder?: string;
  rules?: object;
  error?: string;
}


export function Input({ name, control, placeholder, rules, error }: InputProps) {
  return (
    <div className='mb-[1.6rem]'>
      <Controller
        name={name}
        control={control}
        rules={rules}

        render={({ field: { onChange, onBlur, value = '' } }) => (
          <input type='text'
            className='h-[4.4rem] w-[100%] bg-white p-3 rounded-md outline-none'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {error && (
        <p className='text-red-600 mt-1'>{error}</p>
      )}

    </div>
  )
}