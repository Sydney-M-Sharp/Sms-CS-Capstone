import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./navBar.css"

export const NavBar = ({setCurrentUser}) => {

    const navigate = useNavigate()

    return <ul className="navbar">
        <li className="navbar-item">
            <Link to='/'>Home</Link>
        </li>



        {localStorage.getItem("user") ? ( // this line is saying if there is a learning user render this list item... other wise render nothing.
            <>
                <li className="navbar-item">
                    <Link to='/my-closet'>My Closet</Link>
                </li>
                <li className="navbar-item">
                    <Link to='/upload'>Upload</Link>
                </li>
                <li className="navbar-item">
                    <Link to='/my-profile'>My Profile</Link>
                </li>

                <li className="navbar-item navbar-logout">
                    <Link
                        to=""
                        onClick={() => {
                            localStorage.removeItem("user")
                            navigate("/login", { replace: true })
                            setCurrentUser(null)
                        }}// 28-39 if there is an item in local storage do these lines
                    >
                        Logout
                    </Link>
                </li>
            </>
        ) : ("")}

    </ul>
}
