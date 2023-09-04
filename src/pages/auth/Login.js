import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const handleLogin = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      navigate('/app/homePage');
    }
    setValidated(true);
    // Handle login logic here
  };
  return (
    <>
      <div className="sectionLogin">
        <div className="main-login-section">
          <div className="sub-login-section">
            <div className="survey-login">Survey</div>
            <div className="inner-login">
              <h2 className="text-center">Login</h2>
              <Form noValidate validated={validated} onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail" className="mb-2">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="login-input-box"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email address.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input-box"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a password.
                  </Form.Control.Feedback>
                </Form.Group>
                <p className="forgot">Forgot Password ?</p>
                <div className="btn-Section">
                  <Button
                    className="BtnLogin"
                    type="submit"
                    // onClick={() => navigate("/app/homePage")}
                  >
                    LOGIN
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
