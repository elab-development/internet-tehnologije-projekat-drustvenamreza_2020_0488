import "./register.css"
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
                        <button className="registerButton">Registrujte se</button>
                        <span className="loginDescription">Vec imate nalog?</span>
                        <button className="loginButton">Ulogujte se</button>
                    </div>
                </div>
            </div>
        </div>
    )
}