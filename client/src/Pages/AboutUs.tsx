import React, { useEffect, useState } from 'react';
import './CSS/AboutUs.css';
import axios from 'axios';

const AboutUs = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/contact-us/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      <p>{message}</p>
    </div>
  );
};
export default AboutUs;