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
    <div>
      <Controller
        name={name}
        control={control}
        rules={rules}

        render={({ field: { onChange, onBlur, value } }) => (
          <div className='p-3'>
            <p className='text-white font-semibold'>{title}:</p>
            <select className='outline-none w-[100%] h-[4.4rem] font-semibold mb-[1rem] rounded-md'>
              {options.map((element) => (
                <option
                  value="dados"
                  onChange={onChange}
                  onBlur={onBlur}
                >
                  {element.value}
                </option>
              ))}
            </select>
          </div>
        )}
      />
    </div>
  )
}