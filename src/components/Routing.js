import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddVillage from "./pages/AddVillage";
import AddPeople from "./pages/AddPeople";
import AddMore from "./pages/AddMore";
import ViewFile from "./pages/ViewFile";
import HeaderFile from "./layout/HeaderFile";
import DownloadFile from "./pages/DownloadFile";
import VillageMenu from "./pages/VillageMenu";
import PeopleMenu from "./pages/PeopleMenu";
import ChangeLang from "./pages/ChangeLang";
import ExectiveFile from "./pages/ExectiveFile";
import ExcesiveEdit from "./pages/ExcesiveEdit";
import ChangePass from "./pages/ChangePass";
import HomePage from "./pages/HomePage";

function Routing() {
  return (
    <div>
      <div>
        <HeaderFile />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/addVillage" element={<AddVillage />} />
            <Route path="/addPeople" element={<AddPeople />} />
            <Route path="/village" element={<VillageMenu />} />
            <Route path="/peoplemenu" element={<PeopleMenu />} />
            <Route path="/addmore" element={<AddMore />} />
            moremenu NavDropdown
            <Route path="/exectivefile" element={<ExectiveFile />} />
            <Route path="/changelanguage" element={<ChangeLang />} />
            <Route path="/changepass" element={<ChangePass />} />
            village page btn
            <Route path="/downloadpdf" element={<DownloadFile />} />
            <Route path="/viewpdf" element={<ViewFile />} />
            <Route path="/editpdf" element={<AddVillage />} />
            <Route path="/active-edit" element={<ExcesiveEdit />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Routing;
