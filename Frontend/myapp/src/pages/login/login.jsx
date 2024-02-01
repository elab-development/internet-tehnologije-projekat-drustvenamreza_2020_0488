import "./login.css"
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
                        <button className="loginButton">Ulogujte se</button>
                        <span className="forgotPassword">Zaboravili ste lozinku?</span>
                        <button className="registerButton">Kreirajte novi nalog</button>
                    </div>
                </div>
            </div>
        </div>
    )
}