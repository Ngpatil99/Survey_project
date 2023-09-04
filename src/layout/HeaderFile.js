import { mdiPower, mdiAccountCircle } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

function HeaderFile() {
    const navigate = useNavigate();
  useEffect(() => {
    setInterval(myTimer, 1000);
  }, []);

  const myTimer = () => {
    const d = new Date();
    const date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

    document.getElementById("demo").innerHTML =
      date + "" + "" + d.toLocaleTimeString();
  };

  return (
    <div>
      <header className="header">
        <div className="topBar">
          <div className="container header-item">
            <span className="text-white time-span">
              <p id="demo"></p>
            </span>
            <div onClick={()=>navigate("/")} className="logout">
              <Icon path={mdiPower} className="icon"></Icon>
              <p>Logout</p>
            </div>
          </div>
        </div>
        <div className="nav-header">
          <Navbar bg="" expand="lg" className="main-nav">
            <Container className="main-header">
              <Navbar.Brand href="#home">
                <h2 className="logo">Survey</h2>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="toggle-btn"
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto fs-5  navitem">
                  <Nav.Link href="/app/homePage">Dashboard</Nav.Link>
                  <Nav.Link href="/app/village">Villages</Nav.Link>
                  <Nav.Link href="/app/peopleMenu">Peoples</Nav.Link>

                  <NavDropdown title="More" className="nav-dropdown">
                    <NavDropdown.Item href="addmore">More</NavDropdown.Item>
                    <NavDropdown.Item href="exectivefile">
                      Exective
                    </NavDropdown.Item>
                    <NavDropdown.Item href="changelanguage">
                      Change Language
                    </NavDropdown.Item>
                    <NavDropdown.Item href="changepass">
                      Change Password
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Icon path={mdiAccountCircle} className="user"></Icon>
                <div className="main-user">
                  <span>
                    Welcome....!
                    <p>Admin(admin)</p>
                  </span>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
    </div>
  );
}

export default HeaderFile;
