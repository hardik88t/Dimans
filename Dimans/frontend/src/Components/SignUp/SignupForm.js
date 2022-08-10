import "../../Styles/login.css";
import Input from '../../Components/UI/Input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { login } from '../../actions/auth.actions';
import axios from "./../../helpers/axios";
import { useNavigate } from 'react-router-dom';



const SignupForm = (props) => {
  const navigate = useNavigate();
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let [msg, setMsg] = useState("")
  // const dispatch = useDispatch();

  let userSignup = async (e) => {

    e.preventDefault();

    axios.post(`/signup`, { firstName, lastName, email, password }).then(function (response) {
      setMsg(response.data.message);
      // const { token, user } = response.data;
      if (response.data.code === 0) {
        console.log(msg);
        // localStorage.setItem('token', token);
        // localStorage.setItem('user', JSON.stringify(user));
        // document.getElementById("alert").style.display = "block";
        // document.getElementById("alert").style.backgroundColor = "#04AA6D";

      } else {
        navigate("/");

        document.getElementById("alert").style.display = "block";
        document.getElementById("alert").style.backgroundColor = "#f44336";
      }

    }).catch(function (error) {
      console.log(error);
      setMsg(error.message);

    })

    document.getElementById("closebtn").addEventListener("click", () => {
      document.getElementById("alert").style.display = "none";
    })
  }


  return (
    <>
      <div className="fe-login-loginform">
        <div className="fe-login-heading">
          <h3>Admin SignUp</h3>
        </div>
        <div class="alert" id="alert">
          {(msg === '') ? <div>

          </div> :
            <div>

              <strong id="str">{msg}</strong>
              <span class="closebtn" id="closebtn">&times;</span>
            </div>
          }
        </div>
        <div className="fe-login-form">
          <form onSubmit={userSignup}>
            <table className="fe-login-form-table">
              <tbody>
                <tr className="fe-login-email">
                  <td>
                    <label htmlFor="login-email">First Name : </label>
                  </td>
                  <td>
                    <Input
                      // controlID="formBasicEmail"
                      Label="First Name :"
                      placeholder="First Name"
                      id="first-name"
                      value={firstName}
                      type="text"
                      //   type=""
                      name="first-name"
                      onChange={(e) => setfirstName(e.target.value)}
                    />
                  </td>
                </tr>
                <br />
                <br />
                <tr className="fe-login-email">
                  <td>
                    <label htmlFor="login-email">Last Name : </label>
                  </td>
                  <td>
                    <Input
                      // controlID="formBasicEmail"
                      Label="Last Name :"
                      placeholder="Last Name"
                      id="last-name"
                      value={lastName}
                      type="text"
                      //   type=""
                      name="last-name"
                      onChange={(e) => setlastName(e.target.value)}
                    />
                  </td>
                </tr>
                <br />
                <br />
                <tr className="fe-login-email">
                  <td>
                    <label htmlFor="login-email">Email : </label>
                  </td>
                  <td>
                    <Input
                      // controlID="formBasicEmail"
                      Label="Email :"
                      placeholder="Admin Email Address"
                      id="login-email"
                      value={email}
                      type="email"
                      name="login-email"
                      onChange={(e) => setEmail(e.target.value)}

                    />
                  </td>
                </tr>
                <tr className="fe-login-password">
                  <td>
                    <label htmlFor="login-password">Password : </label>
                  </td>
                  <td>
                    <Input
                      // controlID="formBasicPassword"
                      Label="Password"
                      id="login-password"
                      placeholder="Admin Password"
                      value={password}
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </td>
                </tr>
                <tr className="fe-login-button-row">
                  <td colSpan={2}>
                    <button type="submit" className="fe-login-button">
                      SignUp & Login
                    </button>
                  </td>
                </tr>
                <tr className="fe-login-forgotpass">
                  <td colSpan={2}>
                    <p>Forgot Password?<a href="/passwordReset">click here</a></p>
                  </td>
                </tr>
                <tr className="fe-login-forgotpass">
                  <td colSpan={2}>
                    <p>Already have an Account?<a href="/">click here</a></p>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
