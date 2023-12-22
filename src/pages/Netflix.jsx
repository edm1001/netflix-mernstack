import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/home.jpg';
import MovieCard from '../assets/homeTitle.webp';
import {FaPlay} from 'react-icons/fa';
import {AiOutlineInfoCircle} from 'react-icons/ai';

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll=null);
  };

  return (
    <div>

      <Navbar isScrolled={isScrolled} />
    </div>
  )
}
