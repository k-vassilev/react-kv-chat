import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
	return (
		<ChatEngine
			height="100vh"
			projectID="365c730e-33c3-4d2a-a533-36fdd3272ea2"
			userName="Kristian"
			userSecret="123"
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}	
		/>
	);
}

export default App;