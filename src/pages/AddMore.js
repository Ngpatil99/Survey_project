import React from "react";
import {Icon} from "@mdi/react";
import {mdiEye} from "@mdi/js";

function AddMore() {
    return (
        <div>
            <div className="container main-morefile">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="morefile-heading">Change Password</h5>

                                <div className="row password-input">
                                    <div className="col-lg-4">
                                        <label>Current Password</label>
                                        <div className="input-group input-group-merge">
                                            <input type="text" className="form-control" placeholder="Username" aria-label="Username"/>
                                            <span className="input-group-text">
                                                <Icon path={mdiEye}
                                                    className="p-icon"/>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <label>
                                            New Password</label>
                                        <div className="input-group input-group-merge">
                                            <input type="text" className="form-control" placeholder="Username" aria-label="Username"/>
                                            <span className="input-group-text">
                                                <Icon path={mdiEye}
                                                    className="p-icon"/>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <label>
                                            New Confirm Password</label>
                                        <div className="input-group input-group-merge">
                                            <input type="text" className="form-control" placeholder="Username" aria-label="Username"/>
                                            <span className="input-group-text">
                                                <Icon path={mdiEye}
                                                    className="p-icon"/>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <div className="d-flex justify-content-center pt-3">
                                    <button className="reset">RESET</button>
                                    <button className="submit d-flex align-items-center">CHANGE PASSWORD</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddMore;
