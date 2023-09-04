import React from "react";
import { useNavigate } from "react-router-dom";

function ViewFile() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container viewfile">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5>Villages</h5>
                  <button className="add-v-btn" onClick={() => navigate("/")}>
                    Back
                  </button>
                </div>
                <div className="row mb-3">
                  <div className="main-view-table">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <th>Village Name</th>
                          <td>Pune</td>
                        </tr>
                        <tr>
                          <th>Post</th>
                          <td>At. Po. Pune</td>
                        </tr>
                        <tr>
                          <th>Pincode</th>
                          <td>456987</td>
                        </tr>
                        <tr>
                          <th>Talathi Office</th>
                          <td>Talathi Office Pune</td>
                        </tr>
                        <tr>
                          <th>Grampanchayat</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>J. P. Circle</th>
                          <td>J,. P. Pune</td>
                        </tr>
                        <tr>
                          <th>P. S. Circle</th>
                          <td>P. S. Pune</td>
                        </tr>
                        <tr>
                          <th>Prathmik Aarogya Kendra</th>
                          <td>Arogya kendra Pune</td>
                        </tr>
                        <tr>
                          <th>MSEB Office</th>
                          <td>MSEB Office Pune</td>
                        </tr>
                        <tr>
                          <th>Patsantha Shakha</th>
                          <td>
                            Patsantha Shakha 1,,Patsantha Shakha 2,Patsantha
                            Shakha 2
                          </td>
                        </tr>
                        <tr>
                          <th>Bank</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Gas Agency</th>
                          <td>Jp gas agency,Cp gas agency</td>
                        </tr>
                        <tr>
                          <th>School</th>
                          <td>J V School,Marathi shala</td>
                        </tr>
                        <tr>
                          <th>Temple statue name</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Villege Major Problems Demands</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Means of communication</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Talathi name</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Talathi mobile</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Gramsevak name</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Gramsevak mobile</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Agri assistant name</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Agri assistant mobile</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Electrician name</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Electrician mobile</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>GramPachayat employee name</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>GramPachayat employee mobile</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Doctor name</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Doctor mobile</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Aasha name</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Aasha mobile</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Police patil name</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Police patil mobile</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Tantamukti chif</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Tantamukti chif mobile</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Kotval name</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Kotval mobile</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Insurance Agent Name</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Insurance Agent Mobile</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Ration Shopkeeper Name</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Ration Shopkeeper Mobile</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>Village sketch</th>
                          <td>
                            <a
                              href="/images/view imag.jpg"
                              className="text-primary"
                              target="view_village_image"
                            >
                              view image
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th>Roads connecting the village</th>
                          <td>
                            <a
                              href="/images/View imag.jpg"
                              className="text-primary"
                              target="view_village_image"
                            >
                              view image
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="d-flex justify-content-center pt-3">
                  <button className="reset">Reset</button>
                  <button className=" submit d-flex align-items-center">
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

export default ViewFile;
