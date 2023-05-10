function Header(props) {
  return (
    <header>
    <div className="container flex">
        <div className="header-title">
            <picture>
              <img className="header-icon" src={props.logo} />
            </picture>
            <h2>{props.name}</h2>
        </div>
        <div className="nav-bar">
            <ul>
                <li><a href="#" target="_self"><p>Home</p></a></li>
                <li><a href="#" target="_self"><p>Courses</p></a></li>
                <li><a href="#" target="_self"><p>About us</p></a></li>
                <li><a href="#" target="_self"><p>Contact us</p></a></li>
            </ul>
        </div>
    </div>
    </header>
  )
}

export default Header