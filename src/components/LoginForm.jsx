import { useState } from 'react';
import axios from 'axios';

const projectID = '1061d406-37d4-4533-b494-03ba14d3a905';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Incorrect Credential.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form" style={{
        padding: '15px',
        background: '#ccc',
        border : '0px solid #000',
        width: '500px',
        height: '430px',
        borderRadius: '8px'
      }}>
        <h1 className="title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className='name'>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          </div>

          <div>
            <label htmlFor="password" className='name'>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          </div>
          <div align="center">
          
            <button type="submit" className="button">
              <span>Login</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal