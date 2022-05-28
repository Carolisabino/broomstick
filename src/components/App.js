import React from "react";
import Entry from "./Entry";
import broomspedia from "../broomspedia";
import NavBar from "./NavBar";
import LandingPage from "./Landingpage";

function creatEntry(broomType) {
	return (
		<Entry
			key={broomType.id}
			name={broomType.name}
			description={broomType.description}
		/>
	);
}

function App() {
	return (
		<>
			<NavBar />
			<LandingPage />
			<div>
				<img src="images/harry.png" />
				<h1>
					<span>Broomstickpedia</span>
				</h1>
				<dl>{broomspedia.map(creatEntry)}</dl>
			</div>
		</>
	);
}

export default App;
