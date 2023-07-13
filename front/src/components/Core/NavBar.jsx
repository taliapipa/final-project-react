import { Link } from "react-router-dom"
import '../../styles/NavBar.css'
import { useContext } from "react"
import { JwtContext } from "../Context/jwtContext"
import ButtonLogout from "../Shared/ButtonLogout"
import { AiOutlineSmile } from "react-icons/ai";


const NavBar =()=>{

    const {jwt} = useContext(JwtContext)
        return (
        <nav>
            <div className="home-list">
            <a><Link to='/home'>Home</Link></a>
            <a><Link to='/characterlist'>List</Link></a>
            </div>


            {jwt && (
                <div className="account">
                <a><Link to='/account'><AiOutlineSmile className="smile"/></Link></a>
                <ButtonLogout />
                </div>
            )}
            {jwt === null && (
                <div className="login-register">
                <a><Link to='/login'>Login</Link></a>
                <a><Link to='/form'>Register</Link></a>
                </div>
            )}

        </nav>
    )
}

export default NavBar