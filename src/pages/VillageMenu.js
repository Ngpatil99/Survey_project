import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiDownload, mdiEyeRefresh, mdiPencil } from "@mdi/js";
import { useNavigate } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { mdiPlus } from "@mdi/js";

function VillageMenu(props) {
  const navigate = useNavigate();
  const downloadbtn = () => {
    const texts = ["line 1", "line 2", "line 3"];
    // file object
    const file = new Blob(texts, { type: "text/plain" });
    // anchor link
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "100ideas-" + Date.now() + ".txt";
    // simulate link click
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();

    // const path = "/downloadpdf";
    // navigate(path, {replace: true});
  };

  const viewbtn = () => {
    const path = "/app/viewpdf";
    navigate(path, { replace: true });
  };
  const editbtn = () => {
    const path = "/app/editpdf";
    navigate(path, { replace: true });
  };

  const handleChangeAddVillageInfo = () => {
    const path = "/app/addVillage";
    navigate(path, { replace: true });
  };

  const villages = [
    { village: "pune", post: "41114", pincode: "411023" },
    { village: "mumbai", post: "41177", pincode: "411024" },
    { village: "nashik", post: "41888", pincode: "411083" },
    { village: "dhule", post: "41999", pincode: "411993" },
  ];

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <div className="container village-page">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="village-btn">
                  <button
                    className="add-village-btn"
                    onClick={handleChangeAddVillageInfo}
                  >
                    ADD VILLAGE
                  </button>
                </div>
                <div className="d-flex align-item-center justify-content-between flex-row-reverse search-here">
                  <label>
                    <input
                      type="text"
                      className="form-control search"
                      placeholder="Search Here..."
                    />
                  </label>
                </div>
                <div className="table-data">
                  <table>
                    <tr className="v-tr">
                      <th>Sr.No</th>
                      <th>Village</th>
                      <th>Post</th>
                      <th>Pincode</th>
                      <th>Action</th>
                    </tr>
                    {villages.map((user, i) => (
                      <tr className="v-tr">
                        <td>{i}</td>
                        <td>{user.village}</td>
                        <td>{user.post}</td>
                        <td>{user.pincode}</td>
                        <div className="d-flex">
                          <button
                            className="download-btn"
                            id="downloadBtn"
                            value="download"
                            onClick={downloadbtn}
                          >
                            <Icon path={mdiDownload} className="table-icon" />
                          </button>
                          <button className="view-btn" onClick={viewbtn}>
                            <Icon path={mdiEyeRefresh} className="table-icon" />
                          </button>
                          <button
                            className="edit-btn"
                            onClick={() => setModalShow(true)}
                          >
                            <Icon path={mdiPencil} className="table-icon" />
                          </button>
                        </div>
                      </tr>
                    ))}
                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </table>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
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

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Villages
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="">
                  <div className="">
                    <div className="row mb-2 ">
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-6">
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

                      <div className="col-md-6">
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
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-6">
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
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Patsantha Shakha</label>
                          <div className="d-flex relative">
                            <input
                              name="patsanthaShakha"
                              type="text"
                              className="form-control"
                              value={village.patsanthaShakha}
                              onChange={handleChange}
                            />
                            <div className="">
                              <button
                                className="Editadd_more_btn"
                                tabIndex="-1"
                              >
                                <Icon path={mdiPlus} className="v-btn-icon" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Gas Agency</label>
                          <div className="d-flex relative">
                            <input
                              name="gasAgency"
                              type="text"
                              className="form-control"
                              value={village.gasAgency}
                              onChange={handleChange}
                            />
                            <div className="">
                              <button
                                className="Editadd_more_btn"
                                tabIndex="-1"
                              >
                                <Icon path={mdiPlus} className="v-btn-icon" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">School</label>
                          <div className="d-flex relative">
                            <input
                              name="school"
                              type="text"
                              className="form-control"
                              value={village.school}
                              onChange={handleChange}
                            />
                            <div className="">
                              <button
                                className="Editadd_more_btn"
                                tabIndex="-1"
                              >
                                <Icon path={mdiPlus} className="v-btn-icon" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">
                            Villege Major Problems Demands
                          </label>
                          <div className="d-flex relative">
                            <input
                              name="VillMajorProbDemands"
                              type="text"
                              className="form-control"
                              value={village.VillMajorProbDemands}
                              onChange={handleChange}
                            />
                            <div className="">
                              <button
                                className="Editadd_more_btn"
                                tabIndex="-1"
                              >
                                <Icon path={mdiPlus} className="v-btn-icon" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">
                            Means of communication
                          </label>
                          <div className="d-flex relative">
                            <input
                              name="meansOfComm"
                              type="text"
                              className="form-control"
                              value={village.meansOfComm}
                              onChange={handleChange}
                            />
                            <div className="">
                              <button
                                className="Editadd_more_btn"
                                tabIndex="-1"
                              >
                                <Icon path={mdiPlus} className="v-btn-icon" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">
                            Temple statue name
                          </label>
                          <div className="d-flex relative">
                            <input
                              name="templeStatueName"
                              type="text"
                              className="form-control"
                              value={village.templeStatueName}
                              onChange={handleChange}
                            />
                            <div className="">
                              <button
                                className="Editadd_more_btn"
                                tabIndex="-1"
                              >
                                <Icon path={mdiPlus} className="v-btn-icon" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Bank</label>
                          <div className="d-flex relative">
                            <input
                              name="bank"
                              type="text"
                              className="form-control"
                              value={village.bank}
                              onChange={handleChange}
                            />
                            <div className="">
                              <button
                                className="Editadd_more_btn"
                                tabIndex="-1"
                              >
                                <Icon path={mdiPlus} className="v-btn-icon" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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
                    </div>
                    <div className="row mb-2 ">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">
                            Agri assistant name
                          </label>
                          <input
                            name="agriAssName"
                            type="text"
                            className="form-control"
                            value={village.agriAssName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
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
                    </div>
                    <div className="row mb-2 ">
                      <div className="col-md-6">
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
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">
                            Electrician mobile
                          </label>
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
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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
                    </div>
                    <div className="row mb-2 ">
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">
                            Police patil name
                          </label>
                          <input
                            name="policePatilName"
                            type="text"
                            className="form-control"
                            value={village.policePatilName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">
                            Police patil mobile
                          </label>
                          <input
                            name="policePatilMobile"
                            type="number"
                            className="form-control"
                            value={village.policePatilMobile}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" row mb-2 ">
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">
                            Insurance Agent Name
                          </label>
                          <input
                            name="insuranceAgentName"
                            type="text"
                            className="form-control"
                            value={village.insuranceAgentName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
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
                    </div>
                    <div className="row mb-2 ">
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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
                      <button className=" submit d-flex align-items-center">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default VillageMenu;
