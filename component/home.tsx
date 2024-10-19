import Link from 'next/link';
import React from 'react';
import './home.css';

const home = () => {
  return (
    <div className="container">
      <div className="home-section">
        <h2>Home</h2>
        <p>Welcome to the Job Portal! Your gateway to your dream job.</p>
        <Link href="/" className="button">
          Learn More
        </Link>
      </div>
      <div className="home-section">
        <h2>Jobs</h2>
        <p>
          Browse through a wide range of job listings and find your perfect
          match.
        </p>
        <Link href="/Jobs" className="button">
          Explore Jobs
        </Link>
      </div>
      <div className="home-section">
        <h2>Companies</h2>
        <p>
          Discover the companies looking to hire talented professionals like
          you.
        </p>
        <Link href="/Companies" className="button">
          Explore Companies
        </Link>
      </div>
      <div className="home-section">
        {' '}
        <h2>Contact Us</h2>
        <p>Have any questions? Feel free to get in touch with us.</p>
        <Link href="/Contact" className="button">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default home;
