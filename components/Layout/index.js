import Header from '../HeaderRectan'
function Layout ({ children, title, image }) {
  return (
    <>
      <Header title={title} image={image} />
      {children}
    </>
  )
}

export default Layout
