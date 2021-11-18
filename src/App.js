import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
	if(!localStorage.getItem('username')) return <LoginForm />


	return (
		<ChatEngine
			height="100vh"
			projectID="365c730e-33c3-4d2a-a533-36fdd3272ea2"
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}	
		/>
	);
}

export default App;