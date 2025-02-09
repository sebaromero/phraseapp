const LoadingState = () => {
  return (
    <section
      role="status"
      aria-live="polite"
      aria-label="Cargando frases..."
      className="flex flex-col gap-4"
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          data-testid="skeleton"
          className="h-20 bg-gray-300 rounded-lg animate-pulse"
          aria-hidden="true"
        ></div>
      ))}
    </section>
  )
}

export default LoadingState
