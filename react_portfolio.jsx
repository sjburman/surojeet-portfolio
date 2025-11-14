import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    'Data Analysis',
    'Power BI Dashboard',
    'Python',
    'Excel',
    'SQL',
    'Machine Learning',
    'Data Science',
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all">

        {/* Navbar */}
        <nav className="flex justify-between px-6 py-4 shadow-md dark:shadow-gray-700">
          <h1 className="text-2xl font-bold">Surojeet Burman</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-xl"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mt-20 px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold mb-4"
          >
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Surojeet Burman</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl text-lg mb-6"
          >
            Data Analyst & Aspiring Data Scientist skilled in Python, Power BI, SQL, and Machine Learning.
          </motion.p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md"
          >
            Contact Me
          </motion.a>
        </section>

        {/* Skills Section */}
        <section className="mt-20 px-6">
          <h3 className="text-3xl font-bold text-center mb-8">Skills</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-20 px-6 pb-20 text-center">
          <h3 className="text-3xl font-bold mb-6">Contact</h3>

          <div className="text-lg space-y-2">
            <p>Email: <span className="font-semibold">sjburman94@gmail.com</span></p>
            <p>Phone: <span className="font-semibold">8447486654</span></p>
          </div>
        </section>
      </div>
    </div>
  );
}
