import React, { useState } from "react";
import axios from "axios";

const Login = () => {
	const [info, setInfo] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const resp = await axios.post("http://localhost:3001/login", { info });
			console.log(resp.data);
		} catch (err) {
			console.log(err.response);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					placeholder="Enter Name..."
					onChange={(e) => setInfo(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default Login;
