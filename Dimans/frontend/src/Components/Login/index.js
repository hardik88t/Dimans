import Logo from './LogoSection';
import LoginForm from './LoginForm';
import '../../Styles/login.css';



function Login() {

    return (
        <div className='fe-login-page'>
            <Logo />
            <LoginForm />
        </div>
    )
}

export default Login;