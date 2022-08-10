import React, { useEffect } from 'react';
import Logo from './LogoSection';
import Input from '../../Components/UI/Input';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../helpers/axios';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword(props) {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const { id, token } = useParams();


  const changepass = async (e) => {
    e.preventDefault();

    await axios.post(`/changepassword`, { id, token, password });
    navigate("/");

  }





  return (
    <>
      <Logo />
      <div className="fe-login-loginform">
        <div className="fe-login-heading">
          <h3>Enter New Password</h3>
        </div>

        <div className="fe-login-form">
          <form >
            <table className="fe-login-form-table">
              <tbody>
                <tr className="fe-login-email">
                  <td>
                    <label htmlFor="login-email">Password : </label>
                  </td>
                  <td>
                    <Input
                      // controlID="formBasicPassword"
                      Label="Password"
                      id="login-password"
                      placeholder="Enter Your new Password"
                      value={password}
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </td>
                </tr>
                <tr className="fe-login-button-row">
                  <td colSpan={2}>
                    <button type="submit" className="fe-login-button" onClick={changepass}>
                      Change
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

