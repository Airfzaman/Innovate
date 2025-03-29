// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import Head from 'next/head';
// import Link from 'next/link';

// export default function About() {
//   return (
//     <div className="bg-gray-100 text-black dark:text-white min-h-screen flex flex-col dark:bg-gray-900">
//       <Head>
//         <title>About Me</title>
//         <meta name="description" content="About Arif Uz Zaman" />
//       </Head>

//       {/* Header Section */}
//       <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
//         <Header />
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 mb-20">
//         <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Image Section */}
//           <div className="flex justify-center">
//             <div className="relative rounded-full overflow-hidden w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-orange-500">
//               <img
//                 src="/p-pic.png"
//                 alt="Arif Uz Zaman"
//                 className="object-cover w-full h-full"
//               />
//             </div>
//           </div>

//           {/* Text Section */}
//           <div className="max-w-xl space-y-6 ">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 text-center lg:text-left">
//               About <span className="text-black dark:text-white">Me</span>
//             </h2>
//             <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center lg:text-left">
//               Software Developer & Designer
//             </h3>
//             <p className=" text-black dark:text-gray-300 text-sm sm:text-base text-justify lg:text-left">
//               Hello! I'm <span className="text-orange-500 font-semibold">Arif Uz Zaman</span>, a passionate <strong>Software Developer</strong> dedicated to crafting innovative solutions. My expertise spans across <strong>web development</strong>, <strong>data science</strong>, and programming languages like <strong>C++, Java, JavaScript</strong>, and <strong>Python</strong>.
//             </p>
//             <p className="text-black dark:text-gray-300 text-sm sm:text-base text-justify lg:text-left">
//               I thrive on creating projects that make a meaningful impact, such as:
//             </p>
//             <ul className="list-disc list-inside text-black dark:text-gray-300 text-sm sm:text-base space-y-3 text-justify">
//               <li>
//                 <strong>Mood-Based Movie Recommendation System</strong>: Personalized recommendations based on user emotions.
//               </li>
//               <li>
//                 <strong>Tomato Leaf Disease Detection</strong>: Achieved 99.36% accuracy using deep learning models.
//               </li>
//               <li>
//                 <strong>House Price Prediction</strong>: Advanced ML techniques for accurate house price prediction.
//               </li>
//               <li>
//                 <strong>Diabetes Prediction</strong>: Early detection system to enable timely preventive measures.
//               </li>
//             </ul>
//             <div className="flex justify-center lg:justify-start">
//               <Link href="/projects">
//                 <button className="bg-orange-500 text-white px-8 py-3 rounded shadow-lg hover:bg-orange-600 transition mt-6">
//                   Explore My Work
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer Section */}
//       <footer className="bg-white shadow">
//         <Footer />
//       </footer>
//     </div>
//   );
// }

// import { FaLightbulb, FaBullseye, FaProjectDiagram, FaLaptopCode, FaRobot, FaDatabase, FaMicrochip } from "react-icons/fa";
// import Head from 'next/head';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const innovateData = [
//   { title: "Vision", description: "To empower aspiring engineers by transforming innovative ideas into impactful projects, fostering creativity, and driving technological excellence globally.", icon: <FaLightbulb className="text-yellow-500 text-4xl" /> },
//   { title: "Mission", description: "Providing end-to-end solutions for final year engineering students, nurturing innovation, ensuring project excellence, and equipping students with professional skills.", icon: <FaBullseye className="text-red-600 text-4xl" /> },
//   { title: "Departments", description: "Covering Electrical Engineering, Computer Science, AI, Robotics, Data Science, and more.", icon: <FaProjectDiagram className="text-blue-600 text-4xl" /> },
//   { title: "IoT Projects", description: "Developing cutting-edge IoT applications with real-world impact.", icon: <FaRobot className="text-green-600 text-4xl" /> },
//   { title: "Web Development", description: "Building modern, scalable, and responsive web applications.", icon: <FaLaptopCode className="text-indigo-600 text-4xl" /> },
//   { title: "Machine Learning", description: "Implementing AI-driven solutions for complex problems.", icon: <FaDatabase className="text-teal-600 text-4xl" /> },
//   { title: "IC & PCB Design", description: "Designing and developing integrated circuits and PCBs for hardware solutions.", icon: <FaMicrochip className="text-orange-600 text-4xl" /> },
// ];

// const Innovate360 = () => {
//   return (
//     <div>
//       <Head>
//         <title>Innovate360</title>
//         <meta name="description" content="Empowering engineers with innovative projects" />
//         <link rel="icon" href="/logo.png" />
//       </Head>
//       {/* Fixed Header */}
//       <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
//         <Header />
//       </header>
//       {/* Main Content */}
//       <main className="flex-grow bg-gray-100 p-8 mt-16 overflow-auto">
//         <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome to Innovate360</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {innovateData.map((item, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
//               {item.icon}
//               <h3 className="text-xl font-semibold text-gray-800 mt-4">{item.title}</h3>
//               <p className="text-gray-600 mt-2">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </main>
//       {/* Footer */}
//       <footer className="bg-white shadow">
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default Innovate360;


import { FaLightbulb, FaBullseye, FaProjectDiagram, FaLaptopCode, FaRobot, FaDatabase, FaMicrochip } from "react-icons/fa";
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const innovateData = [
  { title: "Vision", description: "To empower aspiring engineers by transforming innovative ideas into impactful projects, fostering creativity, and driving technological excellence globally.", icon: <FaLightbulb className="text-yellow-500 text-4xl" /> },
  { title: "Mission", description: "Providing end-to-end solutions for Tech-Enthusiast students, nurturing innovation, ensuring project excellence, and equipping students with professional skills.", icon: <FaBullseye className="text-red-600 text-4xl" /> },
  { title: "Departments", description: "Covering Electrical Engineering, Computer Science, AI, Robotics, Data Science, and more.", icon: <FaProjectDiagram className="text-blue-600 text-4xl" /> },
  { title: "IoT Projects", description: "Developing cutting-edge IoT applications with real-world impact.", icon: <FaRobot className="text-green-600 text-4xl" /> },
  { title: "Web Development", description: "Building modern, scalable, and responsive web applications.", icon: <FaLaptopCode className="text-indigo-600 text-4xl" /> },
  { title: "Machine Learning", description: "Implementing AI-driven solutions for complex problems.", icon: <FaDatabase className="text-teal-600 text-4xl" /> },
  { title: "IC & PCB Design", description: "Designing and developing integrated circuits and PCBs for hardware solutions.", icon: <FaMicrochip className="text-orange-600 text-4xl" /> },
];

const Objectives= () => {
  return (
    <div className="bg-gray-100 text-black dark:text-white dark:bg-gray-900 min-h-screen flex flex-col">
      <Head>
        <title>Objectives</title>
        <meta name="description" content="Empowering engineers with innovative projects" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow z-50">
        <Header />
      </header>
      {/* Main Content */}
      <main className="flex-grow p-8 mt-16 overflow-auto container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">Welcome to Innovate360</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {innovateData.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition transform hover:scale-105">
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-4">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-left">{item.description}</p>
            </div>
          ))}
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow">
        <Footer />
      </footer>
    </div>
  );
};

export default Objectives;
