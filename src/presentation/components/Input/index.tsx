import { memo, useDeferredValue } from 'react'

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  description?: string
  useDeferred?: boolean
  error?: string
}

const Input = ({
  label,
  description,
  useDeferred = false,
  error,
  ...props
}: IInput) => {
  const deferredValue = useDeferred
    ? useDeferredValue(props.value)
    : props.value

  return (
    <fieldset className="w-full">
      <legend className="sr-only">{label}</legend>
      <label htmlFor={props.id} className="block text-lg font-medium mb-1">
        {label}
      </label>
      {description && (
        <p id={`${props.id}-desc`} className="text-sm text-gray-500 mb-1">
          {description}
        </p>
      )}
      <input
        {...props}
        value={deferredValue}
        aria-label={props['aria-label'] || label}
        aria-describedby={description ? `${props.id}-desc` : undefined}
        className={`w-full p-2 border rounded border-gray-300 focus:outline-none 
              ${error ? 'border-red-500 focus:border-red-500' : 'focus:border-black'}`}
      />
      {error && (
        <p className="text-md text-red-500 mt-1" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  )
}

export default memo(Input)
