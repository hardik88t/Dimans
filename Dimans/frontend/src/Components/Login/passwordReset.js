import React from 'react';
import "../../Styles/login.css";
import Input from '../../Components/UI/Input';
import axios from '../../helpers/axios';
import Logo from './LogoSection';
import { useState } from 'react';

export default function PasswordReset(props) {
  const [email, setEmail] = useState('');



  const sendLink = async (e) => {
    e.preventDefault();
    await axios.post(`/sendpasswordresetlink`, { email }).then(function (response) {
      alert(response.data.message)
      // navigate("/login");
    }).catch(function (error) {
      console.log(error);
    });

  }
  return (
    <>
      <Logo />
      <div className="fe-login-loginform">
        <div className="fe-login-heading">
          <h3>Enter Your Email</h3>
        </div>

        <div className="fe-login-form">
          <form >
            <table className="fe-login-form-table">
              <tbody>
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
                <tr className="fe-login-button-row">
                  <td colSpan={2}>
                    <button type="submit" className="fe-login-button" onClick={sendLink}>
                      Send
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  )
}

