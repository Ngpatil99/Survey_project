import React from 'react'
import {useNavigate} from "react-router-dom";

function PeopleMenu() {

    const navigate = useNavigate();
    const selectdata = () => {
        const path = "/app/addvillage";
        navigate(path, {replace: true});
    };

    const addpeopledata = () => {
        const path = "/app/addpeople";
        navigate(path, {replace: true});

    };


    return (
        <div>
            <div className='container main-peoplemenu'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='main-card-data'>
                                    <label>
                                        <input type="text" className="form-control people-search" placeholder="Search Here..."/>
                                    </label>
                                    <span className='peoplemenu-btn'>
                                        <button onClick={addpeopledata}
                                            className="add-people-btn">
                                            ADD PEOPLE</button>
                                    </span>
                                </div>
                                <div className='select-btn'>
                                    <button onClick={selectdata}
                                        className='main-select-btn'>
                                        Select Villages For View Data</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    )
}
export default PeopleMenu
