import Head from 'next/head'; // Import Head from Next.js
import Header from '../components/Header'; // Ensure this is a valid React component
import Service from '../components/Services'; // Ensure this is a valid React component
import Footer from '../components/Footer'; // Ensure this is a valid React component
import { useEffect } from 'react';
import DarkModeToggle from '../components/DarkModeToggle';
import Link from 'next/link'; // Import Link from Next.js
import { FaSearch, FaPencilAlt, FaCog, FaCheckCircle, FaClock } from 'react-icons/fa';
export default function Home() {
  useEffect(() => {
    const skills = [
      "Web-development",
      "Data Science",
      "C++",
      "Java",
      "JavaScript",
      "Python",
      "PHP",
    ];
    let index = 0;

    const skillElement = document.getElementById("animated-skills");

    const displaySkill = () => {
      if (skillElement) {
        skillElement.textContent = skills[index];
        index = (index + 1) % skills.length; // Loop back to the first skill
      }
    };

    // Update skill every 2 seconds
    const interval = setInterval(displaySkill, 2000);

    // Show the first skill immediately
    displaySkill();

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Page Metadata */}
      <Head>
        <title>Home</title>
        <meta name="description" content="Frontend Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full  bg-white shadow z-50">
        <Header />
      </header>

      {/* dark:bg-gray-900 */}
      {/* Main Content */}
      <main className="dark:bg-gray-900 bg-gray-100 min-h-screen  items-center justify-center">
        <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/bg1.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white px-6 md:px-12">
            <h1 className="text-4xl md:text-6xl font-bold">Your Academic Projects, <span className="text-orange-500">Our Expertise</span></h1>
            <p className="mt-4 text-lg md:text-xl">We're here to take care of your projects, so you can concentrate on acing your grades with confidence.</p>
            <div className="mt-6 flex justify-center space-x-4">
              <Link href="/Contact" className="bg-orange-500 px-6 py-3 rounded-md text-white font-semibold hover:bg-orange-600 transition">Contact Now</Link>
              <Link href="/" className="bg-white px-6 py-3 rounded-md text-orange-500 font-semibold hover:bg-gray-200 transition">Services</Link>
            </div>
          </div>
        </section>
        <div className="lg:pt-12 dark:bg-gray-900 bg-gray-100 min-h-screen  items-center justify-center px-6 lg:px-12">
          <div>
            {/* <section className="py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src="/images/graduation.jpg" alt="Graduation" className="rounded-lg shadow-lg" />
          <img src="/images/graduation2.jpg" alt="Student with diploma" className="rounded-lg shadow-lg" />
          <img src="/images/classroom.jpg" alt="Lecture Hall" className="rounded-lg shadow-lg md:col-span-2" />
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-12">
          <h3 className="text-lg font-semibold text-gray-500">Why Choose Us</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Unlock Full Project Marks with <span className="text-orange-500">Innovate360</span></h2>
          <p className="mt-4 text-gray-700">At Innovate360, we're your secret weapon for academic success. With our expert team by your side, you can turn your college projects into full marks and top grades. Our services ensure your project not only meets but exceeds the highest academic standards. Trust us to be your partner in achieving academic excellence.</p>
          <div className="mt-6">
            <Link href="/services" className="bg-orange-500 px-6 py-3 rounded-md text-white font-semibold hover:bg-orange-600 transition">Explore Our Services</Link>
          </div>
        </div>
      </section> */}
            {/* <section className="py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between"> */}
            <section className="lg:px-6 flex flex-col lg:flex-row items-center justify-between services">
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                {/* <div className="flex"> */}
                <div className="">
                  <div className="flex justify-center pt-4">
                    <img src="/images/graduation.jpg" alt="Graduation" className="rounded-lg shadow-lg lg:w-full lg:h-64 object-cover w-full h-32" />
                  </div>
                  <div className="flex justify-center pt-4">
                    <img src="/images/student.jpg" alt="Student with diploma" className="rounded-lg shadow-lg w-full h-32 lg:w-full lg:h-64 object-cover" />
                  </div>
                </div>
                <div className="mt-[9rem]">
                  <div className="flex justify-center ">
                    <img src="/images/hall.jpg" alt="Lecture Hall" className="rounded-lg shadow-lg lg:w-full lg:h-64 object-cover w-full h-32 items-center " />
                  </div>
                </div>

              </div>
              <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-12">
                <h3 className="text-lg font-semibold text-gray-500">Why Choose Us</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Unlock Full Project Marks with <span className="text-orange-500">Innovate360</span></h2>
                <p className="mt-4 text-gray-700">At Innovate360, we're your secret weapon for academic success. With our expert team by your side, you can turn your college projects into full marks and top grades. Our services ensure your project not only meets but exceeds the highest academic standards. Trust us to be your partner in achieving academic excellence.</p>
                <div className="mt-6">
                  <Link href="/services" className="bg-orange-500 px-6 py-3 rounded-md text-white font-semibold hover:bg-orange-600 transition">Explore Our Services</Link>
                </div>
              </div>
            </section>
          </div>
          {/* <section className="bg-orange-50 py-16 px-6  ">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-500">Our Process</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">The Path to Excellence</h2>
              <p className="mt-4 text-gray-700 max-w-2xl mx-auto">Our streamlined process ensures efficient project execution, seamless collaboration, and exceptional results.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaSearch className="text-orange-500 text-4xl mx-auto" />
                <h3 className="text-xl font-bold mt-4">Step 1: Consultation</h3>
                <p className="mt-2 text-gray-600">We begin with a thorough consultation to understand your project's specific requirements, academic objectives, and any unique needs you may have.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaPencilAlt className="text-orange-500 text-4xl mx-auto" />
                <h3 className="text-xl font-bold mt-4">Step 2: Project Planning</h3>
                <p className="mt-2 text-gray-600">After understanding your project, we create a personalized project plan outlining objectives, milestones, and resource allocation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaCog className="text-orange-500 text-4xl mx-auto" />
                <h3 className="text-xl font-bold mt-4">Step 3: Expert Assignment</h3>
                <p className="mt-2 text-gray-600">Our team of experts is carefully assigned to your project, ensuring the highest academic standards and collaborative feedback.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaCheckCircle className="text-orange-500 text-4xl mx-auto" />
                <h3 className="text-xl font-bold mt-4">Step 4: Quality Assurance</h3>
                <p className="mt-2 text-gray-600">Prior to delivery, every project undergoes a stringent quality assurance process, ensuring error-free and structured content aligned with academic standards.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaClock className="text-orange-500 text-4xl mx-auto" />
                <h3 className="text-xl font-bold mt-4">Step 5: Timely Delivery</h3>
                <p className="mt-2 text-gray-600">We value punctuality and understand deadlines. Your project is delivered promptly with ample time for review and final adjustments.</p>
              </div>
            </div>
          </section> */}
          <section className="bg-orange-50 py-16 px-6 mt-14">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-500">Our Process</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">The Path to Excellence</h2>
              <p className="mt-4 text-gray-700 max-w-2xl mx-auto">Our streamlined process ensures efficient project execution, seamless collaboration, and exceptional results.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaSearch className="text-orange-500 text-4xl mx-auto" />
                <h3 className="text-xl font-bold mt-4">Step 1: Consultation</h3>
                <p className="mt-2 text-gray-600">We begin with a thorough consultation to understand your project's specific requirements, academic objectives, and any unique needs you may have.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaPencilAlt className="text-orange-500 text-4xl mx-auto" />
                <h3 className="text-xl font-bold mt-4">Step 2: Project Planning</h3>
                <p className="mt-2 text-gray-600">After understanding your project, we create a personalized project plan outlining objectives, milestones, and resource allocation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaCog className="text-orange-500 text-4xl mx-auto" />
                <h3 className="text-xl font-bold mt-4">Step 3: Expert Assignment</h3>
                <p className="mt-2 text-gray-600">Our team of experts is carefully assigned to your project, ensuring the highest academic standards and collaborative feedback.</p>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaCheckCircle className="text-orange-500 text-4xl mx-auto" />
                <h3 className="text-xl font-bold mt-4">Step 4: Quality Assurance</h3>
                <p className="mt-2 text-gray-600">Prior to delivery, every project undergoes a stringent quality assurance process, ensuring error-free and structured content aligned with academic standards.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaClock className="text-orange-500 text-4xl mx-auto" />
                <h3 className="text-xl font-bold mt-4">Step 5: Timely Delivery</h3>
                <p className="mt-2 text-gray-600">We value punctuality and understand deadlines. Your project is delivered promptly with ample time for review and final adjustments.</p>
              </div>
            </div>
          </section>
          
          <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
            {/* Left Section */}
            <div className="text-left lg:text-left  max-w-lg">
              {/* <h1 className="text-3xl lg:text-6xl font-bold dark:text-white ">
              Hi <br />
              I'm <span className="text-orange-500 ">Arif Uz Zaman</span> <br />
              a Software Developer & Designer
            </h1> */}
              <p className="text-2xl lg:text-2xl font-bold dark:text-white text-justify">
                {/* Hi <br />
              I'm <span className="text-orange-500 ">Arif Uz Zaman</span> <br />
              a Software Developer & Designer */}
                At Innovate360, we aim to provide end-to-end solutions for final year engineering students by offering expert guidance in Research, Thesis Writing, Model Development, Software designs, IoT integration, Web Development etc. Our mission is to nurture innovation, ensure project excellence, and equip students with the skills and confidence to excel in their professional journeys
              </p>
              <div className="mt-4">
                <p className="text-2xl lg:text-4xl font-bold dark:text-white">My skills are:</p>
                <p className="mt-4 text-gray-600 text-orange-500 font-bold text-xl lg:text-2xl">
                  <span id="animated-skills"></span>
                </p>
              </div>

              {/* <div className="mt-6 flex justify-center lg:justify-start space-x-4">
              <Link href="/HireMe">
                <button className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-600">
                  HireMe
                </button>
              </Link>
              <Link href="/projects">
                <button className="bg-orange-500 text-white px-6 py-2 rounded shadow hover:bg-orange-600">
                  Experience
                </button>
              </Link>
            </div> */}
              <div className="mt-6 flex flex-col lg:flex-row justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
                <Link href="/HireMe">
                  <button className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-600 w-full lg:w-40">
                    Hire Me
                  </button>
                </Link>
                <Link href="/projects">
                  <button className="bg-orange-500 text-white px-6 py-2 rounded shadow hover:bg-orange-600 w-full lg:w-40">
                    Experience
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="relative w-40 h-40 sm:w-60 sm:h-60 lg:w-96 lg:h-96  overflow-hidden">
              <img
                src="\images\Profile.jpg" // Replace with your image URL
                alt="Arif uz zaman"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <section className="py-14">
            {/* <div className="max-w-screen-xl mx-auto md:px-8"> */}
            <div className="">
              <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                {/* <div className="flex-1 sm:hidden lg:block"> */}
                <div className="sm:hidden lg:block w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    className="md:max-w-lg sm:rounded-lg"
                    alt="Loading..."
                  />
                </div>
                <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl dark:bg-gray-900">
                  <h3 className="text-indigo-600 font-semibold">
                    Professional services
                  </h3>
                  <p className="text-gray-800 text-3xl font-semibold sm:text-4xl text-justify">
                    &ldquo;To empower aspiring engineers by transforming innovative ideas into impactful projects, fostering creativity, and driving technological excellence globally.&#8221;
                  </p>
                  <p className="mt-3 text-gray-600 text-justify">
                    At Innovate360, we provide comprehensive project solutions for final-year engineering students across various domains, including <span className="font-bold">Electrical, Electronics, Computer Science, AI, Robotics, and Data Science</span>. Our expert team offers guidance in IoT integration, MATLAB/Simulink simulations, IC design, PCB development, machine learning, deep learning, and web development. We specialize in research assistance, thesis writing, model development, and software design, ensuring high-quality, innovative, and industry-relevant projects. By fostering creativity and technical excellence, we empower students with hands-on experience and the skills needed to excel in their careers. Innovate360 is committed to turning ideas into impactful engineering solutions.
                  </p>

                  <a href="javascript:void(0)" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Service />

      </main>

      {/* Footer */}
      <footer className="bg-white shadow">
        <Footer />
      </footer>
    </div>
  );
}
