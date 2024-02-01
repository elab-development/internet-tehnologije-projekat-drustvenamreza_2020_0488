import "./register.css"
import { Link } from "react-router-dom"
export default function Register() {
    return (
        <div className="register">
            <div className="registerWrapp">
                <div className="registerLeft">
                    <h3 className="socialAppName">Free speech</h3>
                    <span className="registerDescription">Povezite se sa ljudima i prijateljima svuda u svetu!</span>
                </div>
                <div className="registerRight">
                    <div className="registerForm">
                        <input placeholder="Korisnicko ime" className="registerInput" />
                        <input placeholder="Email" className="registerInput" />
                        <input placeholder="Lozinka" className="registerInput" />
                        <input placeholder="Ponovite lozinku" className="registerInput" />
                        <Link to="/login" style={{ textDecoration: 0 }}>
                            <button className="registerButton">Registrujte se</button>
                        </Link>
                        <span className="loginDescription">Vec imate nalog?</span>
                        <Link to="/login" style={{ textDecoration: 0 }}>
                            <button className="loginButton">Ulogujte se</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}