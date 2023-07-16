import { useContext } from "react"
import { JwtContext } from "../Context/jwtContext"
import { useNavigate } from "react-router-dom"
import { AiOutlineImport } from "react-icons/ai";
const ButtonLogout = () => {
    const navigate  = useNavigate()
    const {setJwt} = useContext(JwtContext)
    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("name")
        setJwt(null)
        navigate("/login")

    }
return (
    <h2 onClick={logout} style={{fontSize:"25px"}}><AiOutlineImport/></h2>
)
}

export default ButtonLogout