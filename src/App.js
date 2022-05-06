import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BoysPage from "./pages/BoysPage";

import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import MapsPage from "./pages/MapsPage";
import MemberPage from "./pages/MemberPage";
import Footer from "./components/Footer";
import SkandalePage from "./pages/SkandalePage";

import './App.css';

function App() {
	return (
		<BrowserRouter basename="/schweineaim-remixed">
			<Header />
			<div className="page-container">
				<div className="page-content-wrap">
					<Routes>
						<Route path="/" element={<HomePage />}></Route>
						<Route path="/maps" element={<MapsPage />}></Route>
						<Route path="/map/:id" element={<MapPage />}></Route>
						<Route path="/member/:name" element={<MemberPage />}></Route>
						<Route path="/members" element={<BoysPage />}></Route>
						<Route path="/skandale" element={<SkandalePage />}></Route>
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
