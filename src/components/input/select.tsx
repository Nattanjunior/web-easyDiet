import { Controller } from 'react-hook-form';

interface OptionsProps {
  label: string;
  value: string | number
}
interface SelectProps {
  name: string;
  control: any;
  placeholder?: string;
  rules?: object;
  error?: string;
  title: string
  options: OptionsProps[]
}

export function Select({ name, control, placeholder, rules, error, options, title }: SelectProps) {
  return (
    <div className='p-3'>
      <Controller
        name={name}
        control={control}
        rules={rules}

        render={({ field: { onChange, onBlur, value } }) => (
          <div>
            <p className='text-white font-semibold'>{title}:</p>
            <select
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              className='outline-none w-[100%] h-[4.4rem] font-semibold mb-[1rem] rounded-md'>
              <option value="" defaultValue={placeholder}>{placeholder}</option>
              {options.map((element) => (
                <option
                  key={element.value}
                  value={element.value}
                >
                  {element.value}
                </option>
              ))}
            </select>
          </div>
        )}
      />
      {error && (
        <p className='text-red-500'>{error}</p>
      )}
    </div>
  )
}