interface ILayout {
  children: React.ReactNode
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className="flex min-h-screen- justify-center p-4 bg-white">
      <main
        role="main"
        aria-labelledby="page-title"
        className="w-full max-w-5xl bg-white"
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
