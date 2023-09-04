import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPeople() {
  const navigate = useNavigate();

  const [people, setPeople] = useState({
    pName: "",
    pMobile: "",
    nimshashkiyEmpPos: "",
    polPartyActName: "",
    highlyEduPerEducation: "",
  });
  const handleChange = (e) => {
    setPeople({ ...people, [e.target.name]: e.target.value });
    setPeople((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = () => {
    alert("Done");
    console.log("Add People", people);
    setPeople({
      pName: "",
      pMobile: "",
      nimshashkiyEmpPos: "",
      polPartyActName: "",
      highlyEduPerEducation: "",
    });
  };
  return (
    <div>
      <div className="container c-addvillage">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5>Add People</h5>
                  <button className="add-v-btn" onClick={() => navigate("/")}>
                    Back
                  </button>
                </div>
                <div className="row mb-4">
                  <div className="col-md-4 ">
                    <div className="form-group">
                      <label className="form-label">Villages</label>
                      <select
                        name="Select"
                        className="form-control"
                        value={people.pName}
                        onChange={handleChange}
                      >
                        <option value="Select">Select</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Nagpur">Nagpur</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input
                        name="pName"
                        type="text"
                        className="form-control"
                        value={people.pName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Mobile</label>
                      <input
                        name="pMobile"
                        type="text"
                        className="form-control"
                        value={people.pMobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Gender</label>
                      <div className="d-flex">
                        <input
                          type="radio"
                          name="male"
                          value={people.male}
                          onChange={handleChange}
                        />
                        <label className="ms-1 me-2 " for="gender0">
                          Male
                        </label>
                        <input
                          type="radio"
                          name="female"
                          value={people.female}
                          onChange={handleChange}
                        />
                        <label className="ms-1 me-2 " for="gender1">
                          Female
                        </label>
                        <input
                          type="radio"
                          name="other"
                          value={people.other}
                          onChange={handleChange}
                        />
                        <label className="ms-1 me-2 " for="gender2">
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Nimshashkiy Employee</label>
                      <div className="d-flex">
                        <input type="radio" name="yes" value="Yes" />
                        <label className="ms-1 me-2 " for="gender0">
                          Yes
                        </label>
                        <input type="radio" name="no" value="No" />
                        <label className="ms-1 me-2 " for="gender1">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">
                        Nimshashkiy Employee Position
                      </label>
                      <input
                        name="nimshashkiyEmpPos"
                        type="text"
                        className="form-control"
                        value={people.nimshashkiyEmpPos}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">
                        Political party activists
                      </label>
                      <div className="d-flex">
                        <input
                          type="radio"
                          name="gender"
                          id="gender0"
                          value="Male"
                        />
                        <label className="ms-1 me-2 " for="gender0">
                          Yes
                        </label>
                        <input
                          type="radio"
                          name="gender"
                          id="gender1"
                          value="Female"
                        />
                        <label className="ms-1 me-2 " for="gender1">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">
                        Political party activists party name
                      </label>
                      <input
                        name="polPartyActName"
                        type="text"
                        className="form-control"
                        value={people.polPartyActName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">
                        Highly educated person
                      </label>
                      <div className="d-flex">
                        <input
                          type="radio"
                          name="gender"
                          id="gender0"
                          value="Male"
                        />
                        <label className="ms-1 me-2 " for="gender0">
                          Yes
                        </label>
                        <input
                          type="radio"
                          name="gender"
                          id="gender1"
                          value="Female"
                        />
                        <label className="ms-1 me-2 " for="gender1">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">
                        Highly educated person Education
                      </label>
                      <input
                        name="highlyEduPerEducation"
                        type="text"
                        className="form-control"
                        value={people.highlyEduPerEducation}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">School Student</label>
                      <div className="d-flex">
                        <input
                          type="radio"
                          name="gender"
                          id="gender0"
                          value="Male"
                        />
                        <label className="ms-1 me-2 " for="gender0">
                          Yes
                        </label>
                        <input
                          type="radio"
                          name="gender"
                          id="gender1"
                          value="Female"
                        />
                        <label className="ms-1 me-2 " for="gender1">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">
                        Gra.P.Sarpanch/Member(Current/Former)
                      </label>
                      <div className="d-flex">
                        <input
                          type="radio"
                          name="gender"
                          id="gender0"
                          value="Male"
                        />
                        <label className="ms-1 me-2 " for="gender0">
                          Yes
                        </label>
                        <input
                          type="radio"
                          name="gender"
                          id="gender1"
                          value="Female"
                        />
                        <label className="ms-1 me-2 " for="gender1">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row md-3">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">
                        Ex-Army/Army families of the village
                      </label>
                      <div className="d-flex">
                        <input
                          type="radio"
                          name="gender"
                          id="gender0"
                          value="Male"
                        />
                        <label className="ms-1 me-2 " for="gender0">
                          Yes
                        </label>
                        <input
                          type="radio"
                          name="gender"
                          id="gender1"
                          value="Female"
                        />
                        <label className="ms-1 me-2 " for="gender1">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Shopkeeper</label>
                      <div className="d-flex">
                        <input
                          type="radio"
                          name="gender"
                          id="gender0"
                          value="Male"
                        />
                        <label className="ms-1 me-2 " for="gender0">
                          Yes
                        </label>
                        <input
                          type="radio"
                          name="gender"
                          id="gender1"
                          value="Female"
                        />
                        <label className="ms-1 me-2 " for="gender1">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Progressive farmer</label>
                      <div className="d-flex">
                        <input
                          type="radio"
                          name="gender"
                          id="gender0"
                          value="Male"
                        />
                        <label className="ms-1 me-2 " for="gender0">
                          Yes
                        </label>
                        <input
                          type="radio"
                          name="gender"
                          id="gender1"
                          value="Female"
                        />
                        <label className="ms-1 me-2 " for="gender1">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center pt-4 mt-5">
                  <button
                    className="reset"
                    onClick={() => {
                      setPeople({
                        pName: "",
                        pMobile: "",
                        nimshashkiyEmpPos: "",
                        polPartyActName: "",
                        highlyEduPerEducation: "",
                      });
                    }}
                  >
                    Reset
                  </button>
                  <button
                    className=" submit d-flex align-items-center"
                    onClick={handleSubmit}
                  >
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPeople;
