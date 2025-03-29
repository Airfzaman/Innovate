import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

const projects = [
  { 
    id: 1, 
    title: 'Personalized Mood-Based Movie Recommendation System', 
    description: 'Developed a unique recommendation platform to suggest movies tailored to users moods. Integrated a mood slider and mood-based filters to create personalized watchlists. Utilized user mood history and advanced filtering techniques to enhance recommendations.', 
    slug: 'https://www.arifdesigns.store/',
    image: '/mov.jpg' 
  },
  {
    id: 2,
    title: 'Rent a Bike System',
    description: 'Developed a user-friendly platform for renting bikes, streamlining the process for customers and providers. The system features a real-time inventory management system, secure payment integration, and a responsive design for seamless accessibility across devices. Implemented using modern web technologies to ensure reliability and scalability.',
    slug: 'https://arif-seven.vercel.app/',
    image: '/bike.jpg'
  },
  {
    id: 3,
    title: 'Image Forgery Detection Using Deep Learning',
    description: 'Designed and implemented a deep learning-based system to detect image forgeries with high accuracy. Utilized convolutional neural networks (CNNs) to analyze and identify tampered regions in digital images. Trained and tested the model using datasets of manipulated images, enhancing robustness against various types of forgery techniques.',
    slug: 'image-forgery-detection-deep-learning',
    image: '/forgery.jpg'
  },
  { 
    id: 4, 
    title: 'House Price Prediction System for Real Estate', 
    description: 'Developed an automated machine learning system to assist real estate companies in predicting house prices with precision. Analyzed multiple algorithms using the Boston House dataset from Kaggle to improve prediction accuracy.', 
    slug: 'house-price-prediction-ML',
    image: '/hou.jpg' 
  },
  { 
    id: 5, 
    title: 'Tomato Leaf Disease Detection using Deep Learning', 
    description: 'Designed a hybrid deep learning model combining CNN and MLP to detect diseases in tomato leaves with 99.36% accuracy. Utilized the PlantVillage dataset and a self-collected field dataset to enhance model robustness.', 
    slug: 'tomato-leaf-disease-detection',
    image: '/tomato.jpg' 
  },
  { 
    id: 6, 
    title: 'Early Detection of Diabetes using Machine Learning', 
    description: 'Built a system to identify diabetes at early stages, enabling timely preventive measures. Explored various machine learning algorithms using the Kaggle Diabetes Dataset to optimize prediction accuracy.', 
    slug: 'my_project',
    image: '/dia.jpg' 
  },
  
  
  
];

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 sm:pt-24 px-6 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-white dark:bg-gray-800 shadow">
        <Footer />
      </footer>
    </div>
  );
}
