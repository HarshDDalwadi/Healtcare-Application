import './App.css';
import Login from "./components/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

	return (
		<BrowserRouter>
			<Link to="/login">Login</Link>
			{/* <a href="/cute/home">Login TO Home</a> */}

			<Routes>
				<Route exact path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
