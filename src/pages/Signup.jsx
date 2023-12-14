import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import BgImage from '../components/bgImage';

export default function Signup() {
  return (
    <Container>
      <BgImage />
      <div className="content">
      <Header />
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
    margin-left: 15%;
    height: 100vh
    width: 100%;
    display: grid;
    grid-template-rows: 15vh 85vh;
    justify-content: center;
  }
`;
