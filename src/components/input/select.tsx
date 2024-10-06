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
  options: OptionsProps[];
}

export function Select({ name, control, placeholder, rules, error, options }: SelectProps) {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={rules}

        render={({ field: { onChange, onBlur, value } }) => (

          <select name='dataEntry'>
            <option value="banana">banana</option>
            <option value="banana">pera</option>
            <option value="banana">kiwi</option>

          </select>
        )}
      />
    </div>
  )
}