import { Navigate } from "react-router-dom";
import Login from "../Login";
import { useSelector } from "react-redux";

export const isUserExist = () =>{
   return !!sessionStorage.getItem("current-user");
}
export const getCurrentUser = ()=>{
   let user =  sessionStorage.getItem("current-user");
   user = JSON.parse(user);
   return user;
}
function Auth({children}){
    const {user,isLoggedIn} = useSelector((store)=>store.User);
    if(isLoggedIn)
        return children;
    return <Navigate to="/login"/>
}

export default Auth;