import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookieConsentProvider } from '@use-cookie-consent/react';

import Header from "./components/Header";
import BoysPage from "./pages/BoysPage";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import MapsPage from "./pages/MapsPage";
import MemberPage from "./pages/MemberPage";
import Footer from "./components/Footer";
import SkandalePage from "./pages/SkandalePage";

import './App.css';
import CookieBanner from "./components/CookieBanner";
import CookiePolicy from "./pages/CookiePolicy";

function App() {
	return (
		<CookieConsentProvider>
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
							<Route path="/cookie-policy" element={<CookiePolicy />}></Route>
						</Routes>
					</div>
					<CookieBanner />
					<Footer />
				</div>
			</BrowserRouter>
		</CookieConsentProvider>
	);
}

export default App;
