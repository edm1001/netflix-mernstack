import React, { useState } from 'react'
import styled from 'styled-components';
import logo from '../assets/netflix-logo.png'
import { Link } from 'react-router-dom';
import {FaSearch, FaPowerOff} from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import {firebaseAuth} from '../utils/firebase-config.js';

export default function Navbar({isScrolled}) {
    const links = [
        {name: "Home", link: "/"},
        {name:"TV Shows" , link:"/tv" },
        {name: "Movies", link: "/movies"},
        {name: "My List", link: "mylist"}
    ];
    const [showSearch, setShowSearch] = useState(false);
    const [inputHover, setInputHover] = useState(false);

    return (
    <Container>
    <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
        <div className="left flex a-center">
            <div className="brand flex a-center j-center">
                <img src={logo} alt="logo" />
            </div>
            <ul className="links flex">
                {links.map(({name,link}) => {
                    return (
                        <li>
                            <Link to={link}>{name}</Link>
                        </li>
                    )
                })}
            </ul>
            </div>
            <div className="right flex a-center">
                <div className={`search ${showSearch} ? "show-search": ""`}>
                    <button onFocus={() => setShowSearch} onBlur={()=> {
                            if (!inputHover) setShowSearch(false);
                        }
                        }>
                        <FaSearch />
                    </button>
                    <input type="text" placeholder='Search'
                        onMouseEnter={() => setInputHover(true)}
                        onMouseLeave={() => setInputHover(false)}
                        onBlur={()=> {
                            setShowSearch(false);
                            setInputHover(false);
                        }}
                    /> 
                </div>
                <button onClick={()=>signOut(firebaseAuth) }>
                    <FaPowerOff />
                </button>
            </div>
            </nav>    
        
    </Container>
  )
}

const Container = styled.div`

`