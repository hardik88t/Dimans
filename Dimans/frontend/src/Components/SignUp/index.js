import Logo from './LogoSection';
import SignUpForm from './SignupForm';
import '../../Styles/login.css';



function SignUp() {

    return (
        <div className='fe-login-page'>
            <Logo />
            <SignUpForm />
        </div>
    )
}

export default SignUp;