import React, {useState} from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import BgImage from '../components/bgImage';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <BgImage />
      <div className="content">
      <Header login />
      <div className="body flex column a-center j-center">
        <div className='text flex column'>
          <h1> Unlimited TV Shows, Movies, and many more!</h1>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <h6>Ready to watch? Enter your email to create or restart your membership.</h6>

        </div>
      <div className='form'>
        <input type='email' placeholder='Enter your Email Address' name='email' />
        <input type='password' placeholder='Enter your Password' name='password' />
        <button>Get Started</button>
      </div>
      <button>Log In</button>
      </div>
      </div>
    </Container>
  )
}
const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color:rgba(0,0,0, 0.5)
    margin-left: 15%;
    height: 100vh
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text{
        gap:1rem;
        text-align: center;
        font-size: 1rem;
      h1{
        padding: 0 15rem;
      }
    }
    .form {
      display: grid;
      width: 60%;
      input {
        color: black;
        border: none;
        padding: 1.5rem;
        font-size:1.2rem;
        border: 1px solid black;
        &:focus{
          outline: none;
        }
      }
      button {
        padding: 0.5rem 1rem;
        border: none;
        cursor: pointer;
        color:white;
        background-color: #e50914;
        font-size: 1.05rem;
      }
    }
    button{
      padding: 0.5rem 1rem;
      border: none;
      cursor: pointer;
      color:white;
      background-color: #e50914;
      font-size: 1.05rem;
      border-radius: 0.2rem
    }
    }
  }
`;
