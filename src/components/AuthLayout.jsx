import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useLocation } from "react-router-dom"

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate()
    const location = useLocation() // 👈 Track where we currently are
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        // Option 1: You need authentication, but user is NOT logged in
        if (authentication && authStatus !== true) {
            navigate("/login")
        } 
        // Option 2: Page is for logged-OUT users (login/signup), but user IS logged in
        else if (!authentication && authStatus === true) {
            navigate("/")
        }
        
        setLoader(false)
    }, [authStatus, navigate, authentication])

    return loader ? <h1>loading...</h1> : <>{children}</>
}