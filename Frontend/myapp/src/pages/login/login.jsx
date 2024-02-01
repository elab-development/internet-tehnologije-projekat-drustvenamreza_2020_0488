import "./login.css"
import { Link } from "react-router-dom"
export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapp">
                <div className="loginLeft">
                    <h3 className="socialAppName">Free speech</h3>
                    <span className="loginDescription">Povezite se sa ljudima i prijateljima svuda u svetu!</span>
                </div>
                <div className="loginRight">
                    <div className="loginForm">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Lozinka" className="loginInput" />
                        <Link to="/" style={{ textDecoration: 0 }}>
                            <button className="loginButton">Ulogujte se</button>
                        </Link>
                        <span className="forgotPassword">Zaboravili ste lozinku?</span>
                        <Link to="/register" style={{ textDecoration: 0 }}>
                            <button className="registerButton">Kreirajte novi nalog</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}