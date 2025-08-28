

const FooterLink = ({ href = "", children="" }) => {
  return (
  <ul>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary transition-colors duration-300 ease-in-out"
    >
      {children}
    </a>
  </ul>
  )
}

export default FooterLink
