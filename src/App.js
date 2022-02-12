import { ChatEngine, ChatSettings } from 'react-chat-engine';
import './App.css';
import  ChatFeed  from './components/ChatFeed';
import LoginForm from "./components/LoginForm";


const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height = "100vh"
            projectID = "1061d406-37d4-4533-b494-03ba14d3a905"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />

    );
    
}

export default App;