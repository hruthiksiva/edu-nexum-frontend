import { useState } from 'react';
import { getWelcomeMessage } from './api';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      const response = await getWelcomeMessage();
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 className="text-red-500">Learning Platform</h1>
      <button onClick={fetchMessage}>Get Welcome Message</button>
      <p>{message || 'Click the button to load message'}</p>
    </div>
  );
}

export default App;