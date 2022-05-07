import React, { useEffect, useState } from "react";
import { useCookieConsentContext } from '@use-cookie-consent/react';
import { Link } from "react-router-dom";
import './CookieBanner.css';

const CookieBanner = () => {
	const [done, setDone] = useState(false);
	const { acceptAllCookies, consent, acceptCookies } =
		useCookieConsentContext();

	useEffect(() => {
		if (consent.thirdParty) {
			setDone(true);
		}
	}, [consent.thirdParty])

	const onAcceptAll = () => {
		acceptAllCookies();
		setDone(true);
	}

	const onAcceptSome = (consent) => {
		acceptCookies(consent)
		setDone(true);
	}

	return (
		<div className={`cookie-container ${done ? "hidden" : ""}`}>
			<p>
				This website displays content from third-party sources such as Twitch, Youtube, Streamable and Github
				that may require the use of third-party cookies. These cookies might be neccessary to view content on this website.
				<Link to="/cookie-policy">Privacy Policy</Link>
			</p>
			<div>
				<button className="button-accept-some" onClick={onAcceptAll}>Allow All</button>
				<button className="button-accept-some" onClick={() => onAcceptSome({ firstParty: true })}>Allow Necessary (Videos won't work)</button>
			</div>
		</div>
	);
};

export default CookieBanner;