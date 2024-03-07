import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const projectsPerPage = 2;

const projects = [
  {
    title: 'HelpHands: Orphanage Resource Management System',
    description: 'Brief description of Project 1.',
    category: 'Web-Based System',
    image: '../vite.svg',
  },
  {
    title: 'Barangay Business Information System',
    description: 'Brief description of Project 2.',
    category: 'Web Application',
    image: './pic1.png',
  },
  {
    title: 'Hospital Inventory Management System',
    description: 'Brief description of Project 3.',
    category: 'Web-Based System',
    image: './pic1.png',
  },
];

export default function Project() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="bg-blue-50 rounded-lg overflow-hidden">
      <div className="relative isolate px-6 lg:px-8 mb-6">
        <div className="mx-auto max-w-8xl py-0 sm:py-20 lg:py-20 overflow-x-auto">
          <div className="flex justify-between mb-5">
            <div className="flex justify-start mt-4">
              <div className="flex items-center mb-1">
                <h1 className="text-2xl font-bold">Latest Projects</h1>
              </div>
            </div>
            <div className="flex justify-end mt-4">
                <div className="flex items-center mb-3">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="bg-white text-blue-500 px-4 py-2 rounded-l-lg flex items-center"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
                    Back
                  </button>
                </div>
                <div className="flex items-center mb-3">
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-lg flex items-center"
                  >
                    Next
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                  </button>
                </div>
              </div>
          </div>
          <div className="pagination-container">
            <div className="pagination-content" style={{ transform: `translateX(-${(currentPage - 1) * 100}%)` }}>
              {projects.map((project, index) => (
                <div key={index} className="flex-shrink-0 w-full sm:w-96 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-gray-100 p-4 rounded-lg">
                  <div className="mb-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="bg-white p-4 rounded-b-lg text-left">
                    <div className="text-gray-600 font-medium text-blue-600 mb-2">{project.category}</div>
                    <h2 className="text-lg font-bold mb-1">{project.title}</h2>
                    <p className="text-gray-600 mb-2">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
