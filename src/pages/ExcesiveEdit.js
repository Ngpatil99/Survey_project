import React, { useState } from "react";

function ExcesiveEdit() {
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

  return (
    <div>
      <div className="container excesive-edit">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h4 className="mb-3">Add exective</h4>
                <div className="row mb-3">
                  <div className="col-md-4">
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
                  <div className="col-md-4">
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
                  <div className="col-md-4">
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
                    <div className="col-md-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExcesiveEdit;
