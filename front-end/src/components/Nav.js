import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const auth = localStorage.getItem('users');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }

    return (
        <div>
            <img alt="logo" className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ26hPzqOVC9afCCWVQRU1RtjIsz_IB633GQQ&s" />
            {auth ? <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product </Link></li>
                
                <li><Link to="/profile">Profile </Link></li>
                <li><Link onClick={logout} to="/signup">Logout({JSON.parse(auth).name}) </Link></li>
            </ul>
                :(
                <ul className="nav-ul nav-right">
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            )}
        </div>
    )
}

export default Nav;