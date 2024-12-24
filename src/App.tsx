import { useEffect, useState } from 'react';
import Approach from './components/Approach';
import Consultant from './components/Consultant';
import DiscoverAayurveda from './components/DiscoverAayurveda';
import Experts from './components/Experts';
import Contact from './components/Contact';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import PlayStoreApp from './components/PlayStoreApp';
import Stories from './components/Stories';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <>
      {isLoading ? (
        <div className='w-full h-screen flex justify-center items-center m-auto '>
         <div className='border-4 border-b-0 border-green-500 animate-spin rounded-full w-20 h-20 self-center '>
         </div>
        </div>
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <DiscoverAayurveda />
          <Consultant />
          <Approach />
          <Stories />
          <Experts />
          <PlayStoreApp />
          <Contact />
        </>
      )}
    </>
  );
};

export default App;
