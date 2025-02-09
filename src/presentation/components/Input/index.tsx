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
      <label htmlFor={props.id} className="block text-md font-medium mb-1">
        {label}
      </label>
      {description && (
        <p id={`${props.id}-desc`} className="text-xs text-gray-500 mb-1">
          {description}
        </p>
      )}
      <input
        {...props}
        value={deferredValue}
        onChange={(e) => onChangeValue(e.target.value)}
        aria-label={props['aria-label'] || label}
        aria-describedby={description ? `${props.id}-desc` : undefined}
        className="w-full p-2 border rounded border-gray-300"
      />
    </fieldset>
  )
}

export default memo(Input)
