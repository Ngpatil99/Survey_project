import React from 'react'
import {mdiPlus} from "@mdi/js";
import Icon from "@mdi/react";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function HomePage() {

    const navigate = useNavigate();
    const viewButton = () => {
        const path = "/app/addVillage"
        navigate(path, {replace: true});
    }

    const showButton = () => {
        const path = "/app/addPeople"
        navigate(path, {replace: true})
    }
    return (
        <div>

            <main className="container  homepage">
                <div className="card ">
                    <div className="card-body">
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-12 col-md-3">
                                <div className=" dash-box">
                                    <div className=" main-dash-box">
                                        <div className="home-village  dash-count village">3</div>
                                        <div className=" text-center mt-1">
                                            <strong className="fw-bold">Villages</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-3">
                                <div className=" dash-box ">
                                    <div className="main-dash-box">
                                        <div className="home-people dash-count people">25</div>
                                        <div className=" text-center mt-1">
                                            <strong className="fw-bold">Peoples</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <hr></hr>
                            </div>
                            <div className="col-12">
                                <div className="row justify-content-center abc">
                                    <div className="col-12 col-sm-12 col-md-3">
                                        <Button className="naviBtn-A fit"
                                            onClick={viewButton}>
                                            <Icon path={mdiPlus}
                                                className="village-icon"/>{" "}
                                            <span>Add village</span>
                                        </Button>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-3">
                                        <Button className="naviBtn-B git"
                                            onClick={showButton}>
                                            <Icon path={mdiPlus}
                                                className="village-icon"/>{" "}
                                            <span>Add people</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        </div>
    )
}

export default HomePage
