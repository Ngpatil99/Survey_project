import { mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddVillage() {
  const navigate = useNavigate();

  const [village, setVillage] = useState({
    villageName: "",
    post: "",
    pincode: "",
    talathiOffice: "",
    grampanchayat: "",
    jpCircle: "",
    psCircle: "",
    prathmikAarogyaKendra: "",
    msebOffice: "",
    patsanthaShakha: "",
    gasAgency: "",
    school: "",
    VillMajorProbDemands: "",
    meansOfComm: "",
    templeStatueName: "",
    bank: "",
    talathiName: "",
    talathiMobile: "",
    gramsevakName: "",
    gramsevakMobile: "",
    agriAssName: "",
    agriAssMobile: "",
    electricianName: "",
    electricianMobile: "",
    grampanchayatEmpName: "",
    grampanchayatEmpMobile: "",
    doctorName: "",
    doctorMobile: "",
    aashaName: "",
    aashaMobile: "",
    policePatilName: "",
    policePatilMobile: "",
    tantamuktiChief: "",
    tantamuktiChiefMobile: "",
    kotvalName: "",
    kotvalMobile: "",
    insuranceAgentName: "",
    insuranceAgentMobile: "",
    rationShopkeeperName: "",
    rationShopkeeperMobile: "",
    villageSketch: "",
    roadsConnectingVillage: "",
  });
  const handleChange = (e) => {
    setVillage({ ...village, [e.target.name]: e.target.value });
    setVillage((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = () => {
    alert("Done");
    console.log("Add Village", village);
    setVillage({
      villageName: "",
      post: "",
      pincode: "",
      talathiOffice: "",
      grampanchayat: "",
      jpCircle: "",
      psCircle: "",
      prathmikAarogyaKendra: "",
      msebOffice: "",
      patsanthaShakha: "",
      gasAgency: "",
      school: "",
      VillMajorProbDemands: "",
      meansOfComm: "",
      templeStatueName: "",
      bank: "",
      talathiName: "",
      talathiMobile: "",
      gramsevakName: "",
      gramsevakMobile: "",
      agriAssName: "",
      agriAssMobile: "",
      electricianName: "",
      electricianMobile: "",
      grampanchayatEmpName: "",
      grampanchayatEmpMobile: "",
      doctorName: "",
      doctorMobile: "",
      aashaName: "",
      aashaMobile: "",
      policePatilName: "",
      policePatilMobile: "",
      tantamuktiChief: "",
      tantamuktiChiefMobile: "",
      kotvalName: "",
      kotvalMobile: "",
      insuranceAgentName: "",
      insuranceAgentMobile: "",
      rationShopkeeperName: "",
      rationShopkeeperMobile: "",
      villageSketch: "",
      roadsConnectingVillage: "",
    });
  };

  return (
    <div>
      <div className="container c-addvillage">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5>Add villages</h5>
                  <button className="add-v-btn" onClick={() => navigate("/")}>
                    Back
                  </button>
                </div>
                <div className="row mb-2 ">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Village Name</label>
                      <input
                        name="villageName"
                        type="text"
                        className="form-control "
                        value={village.villageName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Post</label>
                      <input
                        name="post"
                        type="text"
                        className="form-control"
                        value={village.post}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Pincode</label>
                      <input
                        name="pincode"
                        type="text"
                        className="form-control"
                        value={village.pincode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Talathi Office</label>
                      <input
                        name="talathiOffice"
                        type="text"
                        className="form-control"
                        value={village.talathiOffice}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Grampanchayat</label>
                      <input
                        name="grampanchayat"
                        type="text"
                        className="form-control"
                        value={village.grampanchayat}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">J.P.Circle</label>
                      <input
                        name="jpCircle"
                        type="text"
                        className="form-control"
                        value={village.jpCircle}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">P.S.Circle</label>
                      <input
                        name="psCircle"
                        type="text"
                        className="form-control"
                        value={village.psCircle}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">
                        Prathmik Aarogya Kendra
                      </label>
                      <input
                        name="prathmikAarogyaKendra"
                        type="text"
                        className="form-control"
                        value={village.prathmikAarogyaKendra}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">MSEB Office</label>
                      <input
                        name="msebOffice"
                        type="text"
                        className="form-control"
                        value={village.msebOffice}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Patsantha Shakha</label>
                      <input
                        name="patsanthaShakha"
                        type="text"
                        className="form-control"
                        value={village.patsanthaShakha}
                        onChange={handleChange}
                      />
                      <div className="mb-3"></div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="add_more_btn" tabIndex="-1">
                        <Icon path={mdiPlus} className="v-btn-icon" />
                        <p>Add MORE</p>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Gas Agency</label>
                      <input
                        name="gasAgency"
                        type="text"
                        className="form-control"
                        value={village.gasAgency}
                        onChange={handleChange}
                      />

                      <div className="mb-3"></div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="add_more_btn" tabIndex="-1">
                        <Icon path={mdiPlus} className="v-btn-icon" />

                        <p>Add MORE</p>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">School</label>
                      <input
                        name="school"
                        type="text"
                        className="form-control"
                        value={village.school}
                        onChange={handleChange}
                      />

                      <div className="mb-3"></div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="add_more_btn" tabIndex="-1">
                        <Icon path={mdiPlus} className="v-btn-icon" />
                        <p>Add MORE</p>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">
                        Villege Major Problems Demands
                      </label>
                      <input
                        name="VillMajorProbDemands"
                        type="text"
                        className="form-control"
                        value={village.VillMajorProbDemands}
                        onChange={handleChange}
                      />

                      <div className="mb-3">
                        <span>
                          <small className="text-danger"></small>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="add_more_btn" tabIndex="-1">
                        <Icon path={mdiPlus} className="v-btn-icon" />
                        <p>Add MORE</p>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">
                        Means of communication
                      </label>
                      <input
                        name="meansOfComm"
                        type="text"
                        className="form-control"
                        value={village.meansOfComm}
                        onChange={handleChange}
                      />
                      <div className="mb-3"></div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="add_more_btn" tabIndex="-1">
                        <Icon path={mdiPlus} className="v-btn-icon" />
                        <p>Add MORE</p>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Temple statue name</label>
                      <input
                        name="templeStatueName"
                        type="text"
                        className="form-control"
                        value={village.templeStatueName}
                        onChange={handleChange}
                      />
                      <div className="mb-3"></div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="add_more_btn" tabIndex="-1">
                        <Icon path={mdiPlus} className="v-btn-icon" />
                        <p>Add MORE</p>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Bank</label>
                      <input
                        name="bank"
                        type="text"
                        className="form-control"
                        value={village.bank}
                        onChange={handleChange}
                      />
                      <div className="mb-3"></div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="add_more_btn" tabIndex="-1">
                        <Icon path={mdiPlus} className="v-btn-icon" />
                        <p>Add MORE</p>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Talathi name</label>
                      <input
                        name="talathiName"
                        type="text"
                        className="form-control"
                        value={village.talathiName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Talathi mobile</label>
                      <input
                        name="talathiMobile"
                        type="number"
                        className="form-control"
                        value={village.talathiMobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-2 ">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Gramsevak name</label>
                      <input
                        name="gramsevakName"
                        type="text"
                        className="form-control"
                        value={village.gramsevakName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Gramsevak mobile</label>
                      <input
                        name="gramsevakMobile"
                        type="number"
                        className="form-control"
                        value={village.gramsevakMobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Agri assistant name</label>
                      <input
                        name="agriAssName"
                        type="text"
                        className="form-control"
                        value={village.agriAssName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-2 ">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">
                        Agri assistant mobile
                      </label>
                      <input
                        name="agriAssMobile"
                        type="number"
                        className="form-control"
                        value={village.agriAssMobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Electrician name</label>
                      <input
                        name="electricianName"
                        type="text"
                        className="form-control"
                        value={village.electricianName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Electrician mobile</label>
                      <input
                        name="electricianMobile"
                        type="number"
                        className="form-control"
                        value={village.electricianMobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-2 ">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">
                        GramPachayat employee name
                      </label>
                      <input
                        name="grampanchayatEmpName"
                        type="text"
                        className="form-control"
                        value={village.grampanchayatEmpName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">
                        GramPachayat employee mobile
                      </label>
                      <input
                        name="grampanchayatEmpMobile"
                        type="number"
                        className="form-control"
                        value={village.grampanchayatEmpMobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Doctor name</label>
                      <input
                        name="doctorName"
                        type="text"
                        className="form-control"
                        value={village.doctorName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-2 ">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Doctor mobile</label>
                      <input
                        name="doctorMobile"
                        type="number"
                        className="form-control"
                        value={village.doctorMobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Aasha name</label>
                      <input
                        name="aashaName"
                        type="text"
                        className="form-control"
                        value={village.aashaName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Aasha mobile</label>
                      <input
                        name="aashaMobile"
                        type="number"
                        className="form-control"
                        value={village.aashaMobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-2 ">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Police patil name</label>
                      <input
                        name="policePatilName"
                        type="text"
                        className="form-control"
                        value={village.policePatilName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Police patil mobile</label>
                      <input
                        name="policePatilMobile"
                        type="number"
                        className="form-control"
                        value={village.policePatilMobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Tantamukti chief</label>
                      <input
                        name="tantamuktiChief"
                        type="text"
                        className="form-control"
                        value={village.tantamuktiChief}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className=" row mb-2 ">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">
                        Tantamukti chief mobile
                      </label>
                      <input
                        name="tantamuktiChiefMobile"
                        type="number"
                        className="form-control"
                        value={village.tantamuktiChiefMobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Kotval name</label>
                      <input
                        name="kotvalName"
                        type="text"
                        className="form-control"
                        value={village.kotvalName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Kotval mobile</label>
                      <input
                        name="kotvalMobile"
                        type="number"
                        className="form-control"
                        value={village.kotvalMobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-2 ">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Insurance Agent Name</label>
                      <input
                        name="insuranceAgentName"
                        type="text"
                        className="form-control"
                        value={village.insuranceAgentName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">
                        Insurance Agent Mobile
                      </label>
                      <input
                        name="insuranceAgentMobile"
                        type="number"
                        className="form-control"
                        value={village.insuranceAgentMobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">
                        Ration Shopkeeper Name
                      </label>
                      <input
                        name="rationShopkeeperName"
                        type="text"
                        className="form-control "
                        value={village.rationShopkeeperName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-2 ">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">
                        Ration Shopkeeper Mobile
                      </label>
                      <input
                        name="rationShopkeeperMobile"
                        type="number"
                        className="form-control"
                        value={village.rationShopkeeperMobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">Village sketch</label>
                      <input
                        name="villageSketch"
                        type="file"
                        disabled=""
                        className="form-control"
                        value={village.villageSketch}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-label">
                        Roads connecting the village
                      </label>
                      <input
                        name="roadsConnectingVillage"
                        type="number"
                        className="form-control"
                        value={village.roadsConnectingVillage}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center pt-3">
                  <button
                    className="reset"
                    onClick={() => {
                      setVillage({
                        villageName: "",
                        post: "",
                        pincode: "",
                        talathiOffice: "",
                        grampanchayat: "",
                        jpCircle: "",
                        psCircle: "",
                        prathmikAarogyaKendra: "",
                        msebOffice: "",
                        patsanthaShakha: "",
                        gasAgency: "",
                        school: "",
                        VillMajorProbDemands: "",
                        meansOfComm: "",
                        templeStatueName: "",
                        bank: "",
                        talathiName: "",
                        talathiMobile: "",
                        gramsevakName: "",
                        gramsevakMobile: "",
                        agriAssName: "",
                        agriAssMobile: "",
                        electricianName: "",
                        electricianMobile: "",
                        grampanchayatEmpName: "",
                        grampanchayatEmpMobile: "",
                        doctorName: "",
                        doctorMobile: "",
                        aashaName: "",
                        aashaMobile: "",
                        policePatilName: "",
                        policePatilMobile: "",
                        tantamuktiChief: "",
                        tantamuktiChiefMobile: "",
                        kotvalName: "",
                        kotvalMobile: "",
                        insuranceAgentName: "",
                        insuranceAgentMobile: "",
                        rationShopkeeperName: "",
                        rationShopkeeperMobile: "",
                        villageSketch: "",
                        roadsConnectingVillage: "",
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

export default AddVillage;
