import { useNavigate } from "react-router-dom";
import {API} from "../../Services/api"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { JwtContext } from "../../Context/jwtContext";
import '../../../styles/LoginRegister.css'

const Login = () => {

    const { setJwt } = useContext(JwtContext)

const navigate = useNavigate()
const { register, handleSubmit } = useForm();

    const onSubmit = (formData) => {
    API.post("login", formData).then((res)=>{
    console.log(res.data);
    localStorage.setItem("token", res.data.accessToken)
    localStorage.setItem("user", res.data.user.email)
    setJwt(res.data.accessToken)
    navigate("/home")
    })

};
return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='email'>Email:</label>
        <input
        type='email'
        id='email'
        {...register("email", { required: true })}
        />
        <label htmlFor='password'>Password:</label>
        <input
        type='password'
        id='password'
        {...register("password", { required: true })}
        />
        <button type='submit'>Log in</button>
    </form>
);
}

export default Login