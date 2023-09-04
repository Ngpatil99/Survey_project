import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import Icon from "@mdi/react";
import { mdiPencil } from "@mdi/js";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function ExectiveFile() {
  const navigate = useNavigate();
  const active = () => {
    const path = "/active-edit";
    navigate(path, { replace: true });
  };

  const [executiveEdit, setExecutiveEdit] = useState({
    name: "",
    mobile: "",
  });
  const handleChange = (e) => {
    setExecutiveEdit({ ...executiveEdit, [e.target.name]: e.target.value });
    setExecutiveEdit((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="container village-page">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-body">
                <button className="add-exective-btn" onClick={active}>
                  Add Exective
                </button>
                <div className="d-flex align-item-center justify-content-between flex-row-reverse">
                  <label>
                    <input
                      type="text"
                      className="form-control exective-search"
                      placeholder="Search Here..."
                    />
                  </label>
                </div>
                <div className="table-data">
                  <table>
                    <tr className="e-tr">
                      <th>Sr.No</th>
                      <th>Name</th>
                      <th>Mobile</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                    <tr className="e-tr">
                      <td>1</td>
                      <td>Admin</td>
                      <td>7897876545</td>
                      <td>admin</td>
                      <td>
                        <button className="active-btn ">Active</button>
                      </td>
                      <div className="e-tr">
                        <button className="edit-btn" onClick={handleShow}>
                          <Icon path={mdiPencil} className="table-icon" />
                        </button>
                      </div>
                    </tr>
                    <tr className="e-tr">
                      <td>2</td>
                      <td>Jon doe</td>
                      <td>7897876545</td>
                      <td>exicative</td>
                      <td>
                        <button className="active-btn">Active</button>
                      </td>
                      <div className="">
                        <button className="edit-btn">
                          <Icon path={mdiPencil} className="table-icon" />
                        </button>
                      </div>
                    </tr>
                    <tr className="e-tr">
                      <td>3</td>
                      <td>Admin</td>
                      <td>7897876545</td>
                      <td>exicative</td>
                      <td>
                        <button className="disable-btn">Disable</button>
                      </td>
                      <div className="e-tr">
                        <button className="edit-btn" onClick={active}>
                          <Icon path={mdiPencil} className="table-icon" />
                        </button>
                      </div>
                    </tr>
                    <tr className="e-tr">
                      <td>4</td>
                      <td>Jon doe</td>
                      <td>7897876545</td>
                      <td>exicative</td>
                      <td>
                        <button className="active-btn">Active</button>
                      </td>
                      <div className="">
                        <button className="edit-btn" onClick={active}>
                          <Icon path={mdiPencil} className="table-icon" />
                        </button>
                      </div>
                    </tr>
                    <tr className="e-tr">
                      <td>5</td>
                      <td>Admin</td>
                      <td>7897876545</td>
                      <td>exicative</td>
                      <td>
                        <button className="active-btn">Active</button>
                      </td>
                      <div className="e-tr">
                        <button className="edit-btn" onClick={active}>
                          <Icon path={mdiPencil} className="table-icon" />
                        </button>
                      </div>
                    </tr>
                    <tr className="e-tr">
                      <td>6</td>
                      <td>Jon doe</td>
                      <td>7897876545</td>
                      <td>exicative</td>
                      <td>
                        <button className="active-btn">Active</button>
                      </td>
                      <div className="">
                        <button className="edit-btn" onClick={active}>
                          <Icon path={mdiPencil} className="table-icon" />
                        </button>
                      </div>
                    </tr>
                  </table>
                  <hr></hr>
                </div>

                <div className="main-pagination">
                  <div className="page-no">
                    <p>Page 1 of 1</p>
                    <span className="drop-show">
                      <select name="Show 10" className="show-page">
                        <option value="volvo">Show 5</option>
                        <option value="saab">Show 10</option>
                        <option value="opel">Show 20</option>
                      </select>
                    </span>
                  </div>

                  <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Edit Executive</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="row mb-3">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="form-label">Name</label>
                            <input
                              name="name"
                              type="text"
                              min="0"
                              className="form-control "
                              value={executiveEdit.name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="form-label">Mobile</label>
                            <input
                              name="mobile"
                              type="number"
                              min="0"
                              disabled=""
                              className="form-control "
                              value={executiveEdit.mobile}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="form-label">Role</label>
                            <div className="d-flex">
                              <input
                                type="radio"
                                name="role"
                                id="role0"
                                value="admin"
                              />
                              <label className="ms-1 me-2 " for="role0">
                                Admin
                              </label>
                              <input
                                type="radio"
                                name="role"
                                id="role1"
                                value="exective"
                              />
                              <label className="ms-1 me-2 " for="role1">
                                Exective
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="form-label mt-3">Status</label>
                              <div className="d-flex">
                                <input
                                  type="radio"
                                  name="isActive"
                                  id="isActive0"
                                  value="1"
                                />
                                <label className="ms-1 me-2 " for="isActive0">
                                  Active
                                </label>
                                <input
                                  type="radio"
                                  name="isActive"
                                  id="isActive1"
                                  value="0"
                                />
                                <label className="ms-1 me-2 " for="isActive1">
                                  Deactive
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center pt-3">
                          <button
                            className="down-btn me-3"
                            onClick={() => {
                              setExecutiveEdit({ name: "", mobile: "" });
                            }}
                          >
                            reset
                          </button>
                          <button className="add-v-btn d-flex align-items-center">
                            update
                          </button>
                        </div>
                        <div className="d-flex justify-content-center pb-0 mt-3"></div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExectiveFile;
