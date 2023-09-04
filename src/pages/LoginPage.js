import React from "react";

function LoginPage() {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-lg-12">
            <form>
              <div className="main-login-form">
                <h2 className="text-center">Sign Up</h2>
                <h5 className="text-center">Sign into your account</h5>
                <div className="login-form">
                  <div>
                    <label>
                      <b>Username/Mobile No</b>
                    </label>
                  </div>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="signin-page"
                  />
                  <div>
                    <label>
                      <b>Password</b>
                    </label>
                  </div>
                  <input
                    type="password"
                    id="fname"
                    name="fname"
                    className="signin-page"
                  />
                  <div>
                    <button className="login-btn">Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
