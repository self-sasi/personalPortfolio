import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'TaleThread',
      description: 'A collaborative story and poem writing social media platform.',
      longDescription:
        'TaleThread is a social media platform that allows users to collaboratively write stories and poems. Users can start new threads, contribute to existing ones, rate contributions, and make friends with fellow writers. The platform encourages creativity and community engagement among writers of all levels. Additional features include personalized writing prompts, genre-specific communities, and integration with AI tools for inspiration.',
      techStack: ['Django', 'SQLite', 'Angular', 'Tailwind CSS', 'ChatGPT'],
      image: '/talethread/logo.png',
      media: [
        '/talethread/gitmotion_talethread.mp4',
        '/talethread/product-screenshot.png',
        '/talethread/create-thread.png',
        '/talethread/contribute.png',
      ],
      githubLink: 'https://github.com/self-sasi/TaleThread',
      externalLink: 'https://github.com/self-sasi/TaleThread',
    },
    {
      id: 2,
      name: 'Root Node',
      description: 'UCalgary Software Community connection platform.',
      longDescription:
        'Root Node is a platform designed for students at the University of Calgary to create profiles, find mentors or mentees, advertise their skills, and connect with others in similar fields. The idea is to allow users to showcase their portfolios on a common hub, facilitating collaboration and networking among students and professionals. Features include discussion forums, project collaboration spaces, and events calendar for workshops and seminars.',
      techStack: ['Express.js', 'Angular', 'PrimeNG', 'PrimeFlex', 'MongoDB'],
      image: '/rootnode/UCalgary.png',
      media: [
        '/rootnode/main-page.png',
      ],
      githubLink: 'https://github.com/yourusername/rootnode',
      externalLink: 'https://rootnode.example.com',
    },
    {
      id: 3,
      name: 'CodeCollab',
      description: 'An online code collaboration tool for developers.',
      longDescription:
        'CodeCollab is a web-based platform that enables developers to collaborate on coding projects in real-time. Features include live code editing, video conferencing, and project management tools. The platform aims to streamline remote collaboration among development teams, providing integrations with popular version control systems and support for multiple programming languages.',
      techStack: ['React', 'Node.js', 'WebRTC', 'Firebase'],
      image: 'https://via.placeholder.com/400x500?text=CodeCollab',
      media: [
        'https://via.placeholder.com/800x600?text=CodeCollab+Screenshot+1',
        'https://via.placeholder.com/800x600?text=CodeCollab+Screenshot+2',
      ],
      githubLink: 'https://github.com/yourusername/codecollab',
      externalLink: 'https://codecollab.example.com',
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [mediaViewer, setMediaViewer] = useState({
    isOpen: false,
    mediaIndex: 0,
    mediaList: [],
  });

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setMediaViewer({ isOpen: false, mediaIndex: 0, mediaList: [] });
  };

  const openMediaViewer = (mediaList, index) => {
    setMediaViewer({ isOpen: true, mediaIndex: index, mediaList });
  };

  const closeMediaViewer = () => {
    setMediaViewer({ isOpen: false, mediaIndex: 0, mediaList: [] });
  };

  const nextMedia = () => {
    setMediaViewer((prevState) => ({
      ...prevState,
      mediaIndex: (prevState.mediaIndex + 1) % prevState.mediaList.length,
    }));
  };

  const prevMedia = () => {
    setMediaViewer((prevState) => ({
      ...prevState,
      mediaIndex:
        (prevState.mediaIndex - 1 + prevState.mediaList.length) %
        prevState.mediaList.length,
    }));
  };

  return (
    <div className="projects-container" >
      <h1>Projects</h1>
    <div className="projects-grid">
      {projects.map((project) => (
        <div
          key={project.id}
          className="project-card"
          style={{ backgroundImage: `url(${project.image})` }}
          onClick={() => openProject(project)}
        >
          <div className="project-links">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                {/* GitHub Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/>
                </svg>
              </a>
            )}
            {project.externalLink && (
              <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                {/* External Link Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ffffff"
                    d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"
                  />
                </svg>
              </a>
            )}
          </div>
          <div className="project-info">
            <div className="project-name">{project.name}</div>
            <div className="project-description">{project.description}</div>
          </div>
        </div>
      ))}
    </div>

      {selectedProject && (
        <div className="project-popup">
          <div className="popup-content">
            <button className="close-button" onClick={closeProject} aria-label="Close Popup">
              &times;
            </button>
            <div className="popup-inner">
              {/* Left division */}
              <div className="popup-left">
                <div className="media-header">Media</div>
                <div className="media-content">
                  {selectedProject.media &&
                    selectedProject.media.map((mediaUrl, index) => (
                      <img
                        key={index}
                        src={mediaUrl}
                        alt={`Project Media ${index + 1}`}
                        onClick={() => openMediaViewer(selectedProject.media, index)}
                      />
                    ))}
                </div>
              </div>
              {/* Divider */}
              <div className="popup-divider"></div>
              {/* Right division */}
              <div className="popup-right">
                <h2>{selectedProject.name}</h2>
                <div className="project-section">
                  <h3>Description</h3>
                  <p>{selectedProject.longDescription}</p>
                </div>
                <div className="project-section">
                  <h3>Tech Stack</h3>
                  <div className="tech-stack">
                    {selectedProject.techStack.map((tech, index) => (
                      <span key={index} className="tech-item">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-section">
                  <h3>Links</h3>
                  <p>
                    {selectedProject.githubLink && (
                      <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                        GitHub Repository
                      </a>
                    )}
                    <br />
                    {selectedProject.externalLink && (
                      <a href={selectedProject.externalLink} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Media Viewer Modal */}
      {mediaViewer.isOpen && (
        <div className="media-viewer">
          <button className="close-button" onClick={closeMediaViewer} aria-label="Close Media Viewer">
            &times;
          </button>
          <div className="media-viewer-content">
            <button className="media-nav prev" onClick={prevMedia} aria-label="Previous Media">
              &#10094;
            </button>
            <img
              src={mediaViewer.mediaList[mediaViewer.mediaIndex]}
              alt={`Media ${mediaViewer.mediaIndex + 1}`}
            />
            <button className="media-nav next" onClick={nextMedia} aria-label="Next Media">
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
