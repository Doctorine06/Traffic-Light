import React, { useState } from "react";

//create your first component
const Home = () => {
	const [lightColor, setLightColor] = useState("");

	return (
		<div id="container">
			<div className="trafficTop"></div>
			<div className="trafficBox">
				<div
					className={lightColor === "red" ? "red redOff" : "redOff"}
					onClick={() => {
						setLightColor("red");
					}}></div>
				<div
					className={
						lightColor === "yellow"
							? "yellow yellowOff"
							: "yellowOff"
					}
					onClick={() => {
						setLightColor("yellow");
					}}></div>
				<div
					className={
						lightColor === "green" ? "green GreenOff" : "greenOff"
					}
					onClick={() => {
						setLightColor("green");
					}}></div>
			</div>
		</div>
	);
};

export default Home;
