const Footer = () => {
  const date = new Date()
  return (
    <footer className="footer">
      Copyright &copy; {date.getFullYear()}
    </footer>
  )
}

export default Footer
