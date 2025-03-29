// import Header from '../components/Header';
// import Head from 'next/head';
// import Footer from '../components/Footer';
// import { useState } from 'react';
// import Link from 'next/link';
// import { FaProjectDiagram, FaSearch, FaFileAlt } from 'react-icons/fa';

// export default function Services() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Head>
//         <title>Services</title>
//         <meta name="description" content="Empowering engineers with innovative projects" />
//         <link rel="icon" href="/logo.png" />
//       </Head>
//       <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
//         <Header />
//       </header>

//       <section className="bg-white py-16 px-6 lg:px-20">
//         <div className="text-center">
//           <h3 className="text-lg font-semibold text-gray-500">Our Services</h3>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Discover What We Offer</h2>
//           <p className="mt-4 text-gray-700 max-w-2xl mx-auto">Explore a world of academic support and project excellence with Innovate360. Our comprehensive services cover a wide array of subjects and project types. From research to writing, editing to proofreading, we're your one-stop destination for all your academic needs.</p>
//         </div>
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200">
//             <FaProjectDiagram className="text-orange-500 text-4xl mx-auto" />
//             <h3 className="text-xl font-bold mt-4">Project Development</h3>
//             <p className="mt-2 text-gray-600">From web development and AI/ML projects to Python programming and beyond, we offer tailored solutions for a diverse range of academic disciplines.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200">
//             <FaSearch className="text-orange-500 text-4xl mx-auto" />
//             <h3 className="text-xl font-bold mt-4">Research and Analysis Assistance</h3>
//             <p className="mt-2 text-gray-600">Whether you're exploring data, conducting experiments, or analyzing trends, our experts are here to assist you in the research and analysis phase of your projects.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200">
//             <FaFileAlt className="text-orange-500 text-4xl mx-auto" />
//             <h3 className="text-xl font-bold mt-4">Writing and Documentation Services</h3>
//             <p className="mt-2 text-gray-600">From essays and reports to technical documentation, our skilled writers create well-crafted, clear, and comprehensive content for your projects.</p>
//           </div>
//         </div>
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200">
//             <FaProjectDiagram className="text-orange-500 text-4xl mx-auto" />
//             <h3 className="text-xl font-bold mt-4">Project Development</h3>
//             <p className="mt-2 text-gray-600">From web development and AI/ML projects to Python programming and beyond, we offer tailored solutions for a diverse range of academic disciplines.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200">
//             <FaSearch className="text-orange-500 text-4xl mx-auto" />
//             <h3 className="text-xl font-bold mt-4">Research and Analysis Assistance</h3>
//             <p className="mt-2 text-gray-600">Whether you're exploring data, conducting experiments, or analyzing trends, our experts are here to assist you in the research and analysis phase of your projects.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200">
//             <FaFileAlt className="text-orange-500 text-4xl mx-auto" />
//             <h3 className="text-xl font-bold mt-4">Writing and Documentation Services</h3>
//             <p className="mt-2 text-gray-600">From essays and reports to technical documentation, our skilled writers create well-crafted, clear, and comprehensive content for your projects.</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import Header from '../components/Header';
import Head from 'next/head';
import Footer from '../components/Footer';
import { useState } from 'react';
import Link from 'next/link';
import { FaProjectDiagram, FaSearch, FaFileAlt, FaCode, FaChartBar, FaUserTie } from 'react-icons/fa';

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Innovate360</title>
        <meta name="description" content="Empowering engineers with innovative projects" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <Header />
      </header>

      <section className="bg-white py-16 px-6 lg:px-20">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-500">Our Services</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Discover What We Offer</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">Explore a world of academic support and project excellence with Innovate360. Our comprehensive services cover a wide array of subjects and project types. From research to writing, editing to proofreading, we're your one-stop destination for all your academic needs.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200">
            <FaProjectDiagram className="text-orange-500 text-4xl mx-auto" />
            <h3 className="text-xl font-bold mt-4">Project Development</h3>
            <p className="mt-2 text-gray-600">From web development and AI/ML projects to Python programming and beyond, we offer tailored solutions for a diverse range of academic disciplines.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200">
            <FaSearch className="text-orange-500 text-4xl mx-auto" />
            <h3 className="text-xl font-bold mt-4">Research and Analysis Assistance</h3>
            <p className="mt-2 text-gray-600">Whether you're exploring data, conducting experiments, or analyzing trends, our experts are here to assist you in the research and analysis phase of your projects.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200">
            <FaFileAlt className="text-orange-500 text-4xl mx-auto" />
            <h3 className="text-xl font-bold mt-4">Writing and Documentation Services</h3>
            <p className="mt-2 text-gray-600">From essays and reports to technical documentation, our skilled writers create well-crafted, clear, and comprehensive content for your projects.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200">
            <FaCode className="text-orange-500 text-4xl mx-auto" />
            <h3 className="text-xl font-bold mt-4">Coding and Programming Assistance</h3>
            <p className="mt-2 text-gray-600">Get coding and programming support for a wide range of languages and platforms, including Python, Java, web development, and more.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200">
            <FaChartBar className="text-orange-500 text-4xl mx-auto" />
            <h3 className="text-xl font-bold mt-4">Presentation and Visualization</h3>
            <p className="mt-2 text-gray-600">Make your findings and ideas come to life with compelling presentations and data visualizations that captivate your audience. Our design experts ensure that your visuals are not just informative but also engaging.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200">
            <FaUserTie className="text-orange-500 text-4xl mx-auto" />
            <h3 className="text-xl font-bold mt-4">Subject Expert Guidance</h3>
            <p className="mt-2 text-gray-600">Receive personalized guidance, insights, constructive feedback, and mentorship from experts in various fields to ensure your projects not only meet but exceed the highest academic standards.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

