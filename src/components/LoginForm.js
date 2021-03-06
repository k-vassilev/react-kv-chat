import { useState } from "react";
import axios from 'axios';

const LoginForm = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		const authObject = { 'Project-ID': "365c730e-33c3-4d2a-a533-36fdd3272ea2", 'User-Name': userName, 'User-Secret': password}
	
		try{
			await axios.get('https://api.chatengine.io/chats', { headers: authObject } )
			
			localStorage.setItem('username', userName);
			localStorage.setItem('password', password);

			window.location.reload();
		} catch (error) {
			setError('Oops, you have entered wrong Username or Password');
		}
	
	}

	return(
		<div className="wrapper">
			<div className="form">
				<h1 className="title">React KV chat application</h1>
				<form onSubmit={handleSubmit}>
					<input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="Username" required />
					<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
					<div align="center">
						<button type="submit" className="button">
							<span>Start Chatting</span>
						</button>
					</div>
					<h2 className="error">{error}</h2>
				</form>
			</div>
		</div>

	)
}

export default LoginForm;