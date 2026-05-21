import {useDispatch, useSelector} from "react-redux"
import authService from "../../appwrite/auth"
import {togglelogoutStatus} from  "../../store/authSlice"

export default function LougoutBtn(){

    const dispatch = useDispatch();
    function logoutHandler(){
        authService.logout()
        .then(
            ()=>{
                dispatch(togglelogoutStatus())
            }
        )
    }

    return(
        <button
        onClick={logoutHandler}
        className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 reounded-full"
        >Logout</button>
    )
}