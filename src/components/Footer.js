
function Footer(props) {
  return (
    <footer>
        <div className="container">
          <img className="footer-logo" src={props.logo} alt={props.altText} />
            <p className="footer-text">{props.text}</p>
        </div>
    </footer>
  )
}

export default Footer