import { useState } from 'react'
import { BsFillHouseFill, BsFillPersonFill, BsThreeDotsVertical, BsX } from 'react-icons/bs'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=' fixed bg-white text-sm font-semibold p-4 w-full z-40'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className=' text-black  text-xl font-bold'>
          Amrutam
        </div>
        <div className='hidden md:flex space-x-6'>
          <a href='#home' className=' text-black hover:text-green-400 flex items-center'><BsFillHouseFill className='mr-2' /> Home</a>
          <a href='#about' className=' text-black hover:text-green-400 flex items-center'><BsFillPersonFill className='mr-2' /> About</a>
          <a href='#services' className=' text-black hover:text-green-400'>Services</a>
          <a href='#review' className='block  text-black hover:text-green-400'>Review</a>
          <a href='#contact' className=' text-black hover:text-green-400'>Contact</a>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className=' text-black hover:text-green-400'>
            {isOpen ? <BsX/> :<BsThreeDotsVertical />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden mt-4 space-y-4'>
          <a href='#home' className='block  text-black hover:text-green-400 flex items-center'><BsFillHouseFill className='mr-2' /> Home</a>
          <a href='#about' className='block  text-black hover:text-green-400 flex items-center'><BsFillPersonFill className='mr-2' /> About</a>
          <a href='#services' className='block  text-black hover:text-green-400'>Services</a>
          <a href='#review' className='block  text-black hover:text-green-400'>Review</a>
          <a href='#contact' className='block  text-black hover:text-green-400'>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
