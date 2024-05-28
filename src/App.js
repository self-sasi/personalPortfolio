import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Navbar } from './components/navbar';
import Timeline from './components/Timeline';
import ContactForm from './components/ContactForm';
import WelcomeMessage from './components/WelcomeMessage';
import AboutMe from './components/AboutMe';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const scrollTopRef = useRef(null);
  const welcomeMessageRef = useRef(null);
  const aboutMeRef = useRef(null);
  const timelineRef = useRef(null);
  const contactRef = useRef(null);

  const handleToggle = (isChecked) => {
    setIsDarkMode(isChecked);
  };

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

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

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
        <Navbar onToggle={handleToggle} scrollToWelcomeMessage={scrollToWelcomeMessage} scrollToAboutMe={scrollToAboutMe} scrollToTimeline={scrollToTimeline} scrollToContact={scrollToContact} />
      </div>
      <div id="background-wrap">
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
          <WelcomeMessage />
        </div>
        <div className="aboutMeDiv fade" ref={aboutMeRef}>
          <AboutMe />
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
