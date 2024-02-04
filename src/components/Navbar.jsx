
const Navbar = () => {
  return (
    <>
    <nav className="nav-container">
        <div className="nav-logo">
            <img src="/images/logo.png" alt="" />
        </div>
        <div className="nav-cont">
            <ul>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contect</a></li>
            </ul>
        </div>
        <button className="login-btn">Login</button>
    </nav>
    </>
  )
}

export default Navbar