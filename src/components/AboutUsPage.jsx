import React from 'react';
import { motion } from 'framer-motion'; // For animations
import heroImage from '../assets/hello.png';
import developerImage from '../assets/harshil.jpg';

const AboutUsPage = () => {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif', color: '#333' }}>
      {/* Hero Section */}
      <motion.div
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '15px', // More rounded corners for a sleek look
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay for readability
            borderRadius: '15px', // Match parent border-radius
          }}
        />
        <h1
          style={{
            fontSize: '3.5rem',
            color: '#fff',
            textShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)', // Text shadow for better readability
            zIndex: 1,
            textAlign: 'center',
          }}
        >
          About Us
        </h1>
      </motion.div>

      {/* Main Content */}
      <div
        style={{
          display: 'grid', // Using a grid structure
          gridTemplateRows: 'auto auto auto', // Grid layout for sections
          gridTemplateColumns: '1fr',
          gap: '30px', // Space between sections
          padding: '40px',
          maxWidth: '800px',
          margin: '40px auto', // Center the content
          backgroundColor: '#f9f9f9', // Light background color
          borderRadius: '10px', // Soft corners
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)', // Deep shadow for depth
        }}
      >
        <div
          style={{
            textAlign: 'justify',
            transition: 'transform 0.3s', // Smooth hover transition
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')} // Hover animation
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            Our Mission
          </h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '20px' }}>
            At Money Investment Management, our mission is to help you achieve your financial goals through personalized investment strategies. We believe in the power of diversification and create tailored plans based on your risk tolerance and investment horizon.
          </p>

          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              marginBottom: '20px',
            }}
          >
            Our team of experienced professionals is dedicated to providing disciplined investment processes, transparency, and clear communication, guiding you through the complexities of the financial markets.
          </p>

          <ul
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              paddingLeft: '20px',
              marginBottom: '20px', // Spacing between list and content
            }}
          >
            <li>Personalized Investment Strategies</li>
            <li>Diversified Portfolios</li>
            <li>Transparency and Communication</li>
            <li>Long-Term Growth and Stability</li>
          </ul>
        </div>

        {/* Meet the Developer Section */}
        <div
          style={{
            padding: '40px',
            background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)', // Gradient for a stylish look
            borderRadius: '15px', // Smooth corners
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)', // Deep shadow for depth
            textAlign: 'center',
            transition: 'transform 0.3s', // Smooth hover transition
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <motion.h2
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              transition: '0.3s',
              marginBottom: '30px',
            }}
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet the Developer
          </motion.h2>

          <motion.div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.img
              src={developerImage}
              alt="Developer"
              style={{
                width: '300px', // Larger image size
                height: '400px', // Rectangular image
                borderRadius: '15px', // Rounded corners
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)', // Deep shadow
                transition: 'transform 0.3s', // Smooth hover effect
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Harshil Bhatt</h3>
            <p
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.6',
                maxWidth: '600px', // Limit text width for readability
              }}
            >
              Harshil Bhatt is the developer at Money Investment Management. With a passion for technology and finance, which brings innovation and expertise to the team, ensuring our platform is reliable, efficient, and user-friendly.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
