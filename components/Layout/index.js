import Header from '../HeaderRectan'
function Layout ({ children, title, image, typeHeader }) {
  return (
    <>
      <Header title={title} image={image} typeHeader={typeHeader} />
      {children}
    </>
  )
}

export default Layout
