import React from 'react'
import { CircleAlert } from 'lucide-react'
import EmptyState from '../../components/EmptyState'
import { ErrorBoundary } from 'react-error-boundary'

interface IErrorBoundary {
  children: React.ReactNode
}

const ErrorLayout = ({ children }: IErrorBoundary) => {
  return (
    <ErrorBoundary
      fallback={
        <EmptyState
          icon={
            <CircleAlert
              className="w-12 h-12 text-red-400"
              aria-hidden="true"
            />
          }
          text="Algo salió mal, por favor intenta nuevamente más tarde."
        />
      }
    >
      {children}
    </ErrorBoundary>
  )
}

export default ErrorLayout
