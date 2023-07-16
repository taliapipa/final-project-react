import { useForm } from "react-hook-form";
import {API} from "../../Services/api"
import {useNavigate} from "react-router-dom"
import '../../../styles/LoginRegister.css'

const Register = () => {
const { register, handleSubmit } = useForm();
const navigate = useNavigate()
const onSubmit = (formData) => {
    API.post("register", formData).then((res)=>{
    console.log(res);
    })
    alert("usuario creado")
    navigate("/home")

    // console.log(formData);
};
return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='email'>Email:</label>
        <input
        type='email'
        id='email'
        {...register("email", { required: true })}
        />
         <label htmlFor='name'>Name:</label>
        <input
        type='text'
        id='name'
        {...register("name", { required: true })}
        />
        <label htmlFor='password'>Password:</label>
        <input
        type='password'
        id='password'
        {...register("password", { required: true })}
        />
        <button type='submit'>Register</button>
    </form>
);
};

export default Register;
