// App.js
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Navbar } from './components/navbar';
import Timeline from './components/Timeline';
import ContactForm from './components/ContactForm';
import WelcomeMessage from './components/WelcomeMessage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // References for components
  const scrollTopRef = useRef(null);
  const welcomeMessageRef = useRef(null);
  const aboutMeRef = useRef(null);
  const timelineRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null); // Reference for Projects component

  // Dark mode toggle handler
  const handleToggle = (isChecked) => {
    setIsDarkMode(isChecked);
  };

  // Scroll functions
  const scrollToWelcomeMessage = () => {
    welcomeMessageRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAboutMe = () => {
    aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTimeline = () => {
    timelineRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to scroll to the Projects component
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // Intersection Observer for fade-in effect
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.15) {
          entry.target.classList.add('fade-visible');
        } else {
          entry.target.classList.remove('fade-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '-15% 0px 0px 0px',
      threshold: [0, 0.25],
    });

    const sections = [
      scrollTopRef.current,
      welcomeMessageRef.current,
      aboutMeRef.current,
      projectsRef.current,
      timelineRef.current,
      contactRef.current,
    ];

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="App">
      <div className="Navigation">
        <Navbar
          onToggle={handleToggle}
          scrollToWelcomeMessage={scrollToWelcomeMessage}
          scrollToAboutMe={scrollToAboutMe}
          scrollToTimeline={scrollToTimeline}
          scrollToContact={scrollToContact}
          scrollToProjects={scrollToProjects} // Pass the function as a prop
        />
      </div>
      <div id="background-wrap">
        {/* Background clouds */}
        <div className="x1">
          <div className="cloud"></div>
        </div>
        <div className="x2">
          <div className="cloud"></div>
        </div>
        <div className="x3">
          <div className="cloud"></div>
        </div>
        <div className="x4">
          <div className="cloud"></div>
        </div>
        <div className="x5">
          <div className="cloud"></div>
        </div>
      </div>
      <div className="Body">
        <div className="welcomeMessageDiv fade" ref={welcomeMessageRef}>
          <WelcomeMessage scrollToProjects={scrollToProjects} />
        </div>
        <div className="aboutMeDiv fade" ref={aboutMeRef}>
          <AboutMe scrollToProjects={scrollToProjects} /> {/* Pass the function here */}
        </div>

        {/* Include the Projects component here */}
        <div className="projectsDiv fade" ref={projectsRef}>
          <Projects />
        </div>

        <div className="timelinediv fade" ref={timelineRef}>
          <Timeline isDarkMode={isDarkMode} />
        </div>
        <div className="contactDiv fade" ref={contactRef}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;
