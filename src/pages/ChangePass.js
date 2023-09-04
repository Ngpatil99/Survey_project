import React, { useState } from 'react'
import {Icon} from '@mdi/react';
import {mdiEye} from '@mdi/js';
import { FormControl } from 'react-bootstrap';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function ChangePass() {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword,setShowNewPassword] = useState(false);
    const [showConfirmPassword,setShowConfirmPassword] = useState(false);

    const [data,setData] = useState({
        currentPassword:'',
        newPassword:'',
        newConfirmPassword:''
    })

    const handleChange = (event) =>{
        setData(event.target.value)
    }

    const handleReset = () =>{
        setData({
            currentPassword:'',
        newPassword:'',
        newConfirmPassword:''
        })
    }

    return (
        <div className=' container changepass'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <h4 className="mb-3">Change Password</h4>
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label className="form-label">Current Password</label>
                                    <div className="input-group input-group-merge">
                                        <input className="form-control" onChange={handleChange} type={showCurrentPassword ? "text" : "password"} data-val="true" data-val-required="The Password field is required." id="Password" name="Password" value={data.currentPassword}/>
                                        <span className="input-group-text"  onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
                                        {showCurrentPassword ? (
                                                // <VscEyeClosed size={20} />
                                                <VisibilityOffIcon/>
                                            ) : (
                                                // <VscEye size={20} />
                                                <VisibilityIcon/>
                                            )}
                                            {/* <Icon path={mdiEye}
                                                className="pass-icon"
                                                id="togglePassword"/> */}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">New Password</label>
                                    <div className="input-group input-group-merge">
                                        <input className="form-control" onChange={handleChange}  type={showNewPassword ? "text" : "password"} data-val="true" data-val-required="The Password field is required." id="Password" name="Password" value={data.newPassword}/>
                                        <span className="input-group-text"  onClick={() => setShowNewPassword(!showNewPassword)}>
                                        {showNewPassword ? (
                                                // <VscEyeClosed size={20} />
                                                <VisibilityOffIcon/>
                                            ) : (
                                                // <VscEye size={20} />
                                                <VisibilityIcon/>
                                            )}
                                            {/* <Icon path={mdiEye}
                                                className="pass-icon"
                                                id="togglePassword"/> */}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">
                                        New Confirm Password
                                    </label>
                                    <div className="input-group input-group-merge">
                                        <input className="form-control" onChange={handleChange}  type={showConfirmPassword ? "text" : "password"} data-val="true" data-val-required="The Password field is required." id="Password" name="Password" value={data.newConfirmPassword}/>
                                        <span className="input-group-text"  onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        {showConfirmPassword ? (
                                                // <VscEyeClosed size={20} />
                                                <VisibilityOffIcon/>
                                            ) : (
                                                // <VscEye size={20} />
                                                <VisibilityIcon/>
                                            )}
                                            {/* <Icon path={mdiEye}
                                                className="pass-icon"
                                                id="togglePassword"/> */}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center pt-3">
                                <button className="reset" onClick={handleReset}>Reset</button>
                                <button className=" submit d-flex align-items-center">ChangePassword</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChangePass
