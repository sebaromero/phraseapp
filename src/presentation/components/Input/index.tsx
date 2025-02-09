import { memo, useDeferredValue } from 'react'

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  onChangeValue: (value: string) => void
  description?: string
  useDeferred?: boolean
}

const Input = ({
  label,
  onChangeValue,
  description,
  useDeferred = false,
  ...props
}: IInput) => {
  const deferredValue = useDeferred
    ? useDeferredValue(props.value)
    : props.value

  return (
    <fieldset className="w-full">
      <legend className="sr-only">{label}</legend>
      <label
        htmlFor={props.id}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      {description && (
        <p
          id={`${props.id}-desc`}
          className="text-xs text-gray-500 dark:text-gray-400"
        >
          {description}
        </p>
      )}
      <input
        {...props}
        value={deferredValue}
        onChange={(e) => onChangeValue(e.target.value)}
        aria-label={props['aria-label'] || label}
        aria-describedby={description ? `${props.id}-desc` : undefined}
        className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
      />
    </fieldset>
  )
}

export default memo(Input)
