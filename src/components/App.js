import React, {useState} from "react";
import Nav from "./Nav";
import Grid from "./Grid";
import Filter from "./Filter";

import hogs from "../porkers_data";

function App() {
	const [displayHogs, setDisplayHogs] = useState(hogs)

	return (
		<div className="App">
			<Nav />
			<Grid hogs={hogs} />
		</div>
	);
}

export default App;
