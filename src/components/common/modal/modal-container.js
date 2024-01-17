import { useNavigate } from "react-router-dom";
import ModalComponent from "./modal-component"
import { useGoogleLogin } from '@react-oauth/google';
const ModalConatiner=( props)=>{
    const navigate=useNavigate()
const login = useGoogleLogin({
    onSuccess: codeResponse =>{ console.log(codeResponse)
    navigate("/dashboard")
},
    flow: 'auth-code',
  });
    return <ModalComponent {...props} login={login}/>
}
export default ModalConatiner