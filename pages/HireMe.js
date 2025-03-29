import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

const HireMe = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: null, message: '' });

    try {
      const response = await fetch('/api/hire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ success: true, message: 'Your request has been sent successfully!' });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        const error = await response.json();
        setStatus({ success: false, message: error.error || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Unable to send your request. Please try again later.' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 bg-gray-100">
      <Head>
        <title>Hire Me</title>
        <meta name="description" content="Contact Arif Uz Zaman for hiring opportunities." />
      </Head>

      {/* Header Section */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 sm:pt-24 px-6 sm:px-8 flex items-center justify-center mt-20 mb-10">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="dark:bg-gray-700 bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold text-pink-600 mb-6 text-center md:text-left">
              Hire Me
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full border border-gray-300 dark:border-gray-500 rounded-lg p-3 focus:outline-none focus:ring focus:ring-pink-500"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full border border-gray-300 dark:border-gray-500 rounded-lg p-3 focus:outline-none focus:ring focus:ring-pink-500"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border border-gray-300 dark:border-gray-500 rounded-lg p-3 focus:outline-none focus:ring focus:ring-pink-500"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full border border-gray-300 dark:border-gray-500 rounded-lg p-3 focus:outline-none focus:ring focus:ring-pink-500"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full border border-gray-300 dark:border-gray-500 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring focus:ring-pink-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition"
              >
                Send Message
              </button>
            </form>

            {status.message && (
              <p
                className={`mt-4 text-center ${
                  status.success ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {status.message}
              </p>
            )}
          </div>

          {/* Info Section */}
          <div className="dark:bg-gray-700 bg-white text-gray-800 dark:text-white rounded-lg shadow-lg p-6 space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-2">Office</h2>
              <p>Guwahati, Sixmile (781036)</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Call</h2>
              <p>Tel: +91-9395332125</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Email</h2>
              <p>arifzaman700@gmail.com</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      {/* <footer className="bg-white dark:bg-gray-800 shadow mt-20">
        <Footer />
      </footer> */}
      <footer className="bg-white shadow">
        <Footer />
      </footer>
    </div>
  );
};

export default HireMe;
