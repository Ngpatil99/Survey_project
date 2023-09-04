import React from "react";

function ChangeLang() {
    return (
        <div>
            <div className="container main-morefile">
                <div className="row  lang-body">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="lang-heading">Change Language</h5>
                                <div className="d-flex">
                                    <input type="text" className="form-control change-language" placeholder="English" aria-label="Username"/>
                                    <div className="lang-submit-btn">
                                        <button className="lang-submit ">SUBMIT</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangeLang;
