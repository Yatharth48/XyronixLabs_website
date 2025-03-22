import { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  
  const handleSubmit = async () => {
    
    setStatus('Loading...');
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('Success! Check your email to confirm subscription.');
        setEmail('');
      } else {
        const data = await response.json();
        setStatus(data.error || 'Subscription failed.');
      }
    } catch (error) {
      setStatus('Error: Unable to subscribe. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default NewsletterForm;
