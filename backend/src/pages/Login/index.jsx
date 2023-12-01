import logo from '../../assets/react.svg'
import './styles.css'

function Login(){
    return(
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="loginform">
                        <span className="login-form-title">Bem Vindo </span>
                        <span className="login-form-title">
                            <img src={logo} alt="Logo" />
                        </span>
                        <div className="wrap-input">
                            <input type="email" />
                            <span className="focus-input" data-placeholder='Email'></span>
                        </div>
                        <div className="wrap-input">
                            <input type="password" />
                            <span className="focus-input" data-placeholder='Password'></span>
                        </div>

                        <div className="container-login-form-btn">
                            <button className='login-form-btn'>Login</button>
                        </div>

                        <div className="text-center">
                            <span className='text1'>Não possui conta?</span>
                            <a className='text2' href="#">Criar conta.</a>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;