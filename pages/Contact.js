// import Header from '../components/Header';
// import Head from 'next/head';
// import Footer from '../components/Footer';
// import { useState } from 'react';

// export default function Example() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     company: '',
//     email: '',
//     message: '',
//   });

//   const [formStatus, setFormStatus] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormStatus('Submitting...');
//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         setFormStatus('Message sent successfully!');
//         setFormData({
//           firstName: '',
//           lastName: '',
//           company: '',
//           email: '',
//           message: '',
//         });
//       } else {
//         setFormStatus('Failed to send the message. Please try again later.');
//       }
//     } catch (error) {
//       setFormStatus('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Header */}
//       <Head>
//         <title>Contact Us</title>
//         <meta name="description" content="Empowering engineers with innovative projects" />
//         <link rel="icon" href="/logo.png" />
//       </Head>
//       <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
//         <Header />
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow bg-gray-100 dark:bg-gray-900 px-6 py-12 sm:py-20 mt-5 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-orange-500">
//             Get in Touch
//           </h2>
//           <p className="mt-4 text-lg text-justify text-black dark:text-gray-500 md:pl-12 md:pr-10 lg:pl-12 lg:pr-10">
//             Let's turn ideas into reality together! Whether you're looking to
//             collaborate, have a question, or just want to say hello, I'm always
//             excited to connect. Drop me a message, and let's start a
//             conversation!
//           </p>
//         </div>
//         <form
//           onSubmit={handleSubmit}
//           className="mx-auto mt-8  max-w-xl"
//         >
//           <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//             {/* First Name */}
//             <div>
//               <label
//                 htmlFor="firstName"
//                 className="block text-sm font-semibold text-balck dark:text-white"
//               >
//                 First name
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   id="firstName"
//                   name="firstName"
//                   type="text"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Last Name */}
//             <div>
//               <label
//                 htmlFor="lastName"
//                 className="block text-sm font-semibold text-black dark:text-white"
//               >
//                 Last name
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   id="lastName"
//                   name="lastName"
//                   type="text"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Company */}
//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="company"
//                 className="block text-sm font-semibold text-black dark:text-white"
//               >
//                 Company
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   id="company"
//                   name="company"
//                   type="text"
//                   value={formData.company}
//                   onChange={handleChange}
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-semibold text-black dark:text-white"
//               >
//                 Email
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Message */}
//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-semibold text-black dark:text-white"
//               >
//                 Message
//               </label>
//               <div className="mt-2.5">
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="mt-10">
//             <button
//               type="submit"
//               className="block w-full rounded-md bg-indigo-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
//             >
//               Let's talk
//             </button>
//           </div>
//           {/* Status Message */}
//           {formStatus && (
//             <p className="mt-4 text-center text-sm text-gray-500">{formStatus}</p>
//           )}
//         </form>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white shadow">
//         <Footer />
//       </footer>
//     </div>
//   );
// }

import Header from '../components/Header';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Head from 'next/head';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Example() {
  const [formData, setFormData] = useState({
    name: '',
    institute: '',
    department: '',
    otherDepartment: '',
    researchTopic: '',
    phone: '',
    email: '',
    service: '',
    otherService: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormStatus('Message sent successfully!');
        setFormData({
          name: '',
          institute: '',
          department: '',
          otherDepartment: '',
          researchTopic: '',
          phone: '',
          email: '',
          service: '',
          otherService: ''
        });
      } else {
        setFormStatus('Failed to send the message. Please try again later.');
      }
    } catch (error) {
      setFormStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Empowering engineers with innovative projects" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <Header />
      </header>

      <main className="flex-grow bg-gray-100 dark:bg-gray-900 px-6 py-12 sm:py-20 mt-5 lg:px-8">
        {/* <div className="mx-auto max-w-2xl text-center"> */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-orange-500">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-justify text-black dark:text-gray-500 md:pl-12 md:pr-10 lg:pl-12 lg:pr-10">
            Let's turn ideas into reality together! Whether you're looking to
            collaborate, have a question, or just want to say hello, I'm always
            excited to connect. Drop me a message, and let's start a
            conversation!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
          {/* Address */}
          <div className="bg-white shadow-md p-6 border rounded-lg">
            <FaMapMarkerAlt className="text-blue-500 text-3xl mx-auto mb-2" />
            <h2 className="font-semibold text-lg">Our Address</h2>
            <p className="text-gray-600">
              House# 30, Bye lane# 3, Kalyanpur,
              Nayanpur Road, Ganeshguri, Guwahati - 781006,
              Assam.
            </p>
          </div>
          {/* Email */}
          <div className="bg-white shadow-lg border p-6 rounded-lg">
            <FaEnvelope className="text-blue-500 text-3xl mx-auto mb-2" />
            <h2 className="font-semibold text-lg">Email Us</h2>
            <p className="text-gray-600">innovate360ind@gmail.com</p>
          </div>
          {/* Phone */}
          <div className="bg-white shadow-lg border p-6 rounded-lg">
            <FaPhoneAlt className="text-blue-500 text-3xl mx-auto mb-2" />
            <h2 className="font-semibold text-lg">Call Us</h2>
            <p className="text-gray-600">+91-9366329139</p>
            {/* <p className="text-gray-600">+91-99547-46451</p> */}
          </div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-orange-500">Get in Touch</h2>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl">
          <div className="grid grid-cols-1 gap-6">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="input-field" />
            <input type="text" name="institute" value={formData.institute} onChange={handleChange} placeholder="Institute Name" required className="input-field" />

            <select name="department" value={formData.department} onChange={handleChange} required className="input-field">
              <option value="">Select Department</option>
              <option>Electrical Engineering</option>
              <option>Electronics and Communication Engineering</option>
              <option>Computer Science Engineering</option>
              <option>Instrumentation</option>
              <option>Artificial Intelligence</option>
              <option>Robotics and Automation Engineering</option>
              <option>Data Science</option>
              <option>Others</option>
            </select>
            {formData.department === 'Others' && (
              <input type="text" name="otherDepartment" value={formData.otherDepartment} onChange={handleChange} placeholder="Please specify your department" className="input-field" />
            )}

            <input type="text" name="researchTopic" value={formData.researchTopic} onChange={handleChange} placeholder="Research Topic" required className="input-field" />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="input-field" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="input-field" />

            <select name="service" value={formData.service} onChange={handleChange} required className="input-field">
              <option value="">Select Service</option>
              <option>Research Assistance</option>
              <option>Model Integration</option>
              <option>Thesis Writing</option>
              <option>Coding Assistance</option>
              <option>Complete Package</option>
              <option>Others</option>
            </select>
            {formData.service === 'Others' && (
              <textarea name="otherService" value={formData.otherService} onChange={handleChange} placeholder="Please specify the details" className="input-field" />
            )}
          </div>

          <button type="submit" className="block w-full bg-indigo-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white rounded-md shadow-sm hover:bg-indigo-800">Submit</button>
          {formStatus && <p className="mt-4 text-center text-sm text-gray-500">{formStatus}</p>}
        </form>
      </main>

      <footer className="bg-white shadow">
        <Footer />
      </footer>
    </div>
  );
}
