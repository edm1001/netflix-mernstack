import React, {useState} from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import BgImage from '../components/bgImage';
import {firebaseAuth} from '../utils/firebase-config';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Loginp() {
  const [formValues, setFormValues] = useState({ email: "", password: ""});
  const navigate = useNavigate();

  const handleLogIn = async () => {
    try {
      const {email, password} = formValues;
      await signInWithEmailAndPassword (firebaseAuth, email, password)
    } catch(err){
      console.log(err);
    }
  }
  onAuthStateChanged(firebaseAuth, (currentUser)=>{
    if (currentUser) navigate("/");

  })
  return (
    <Container >
      <BgImage/>
      <div className="content">
        <Header/>
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
            <input type='email' placeholder='Enter your Email Address' name='email' value={formValues.email} onChange={(e) => setFormValues({...formValues, [e.target.name]: e.target.value})} />

            <input type='password' placeholder='Enter your Password' name='password' value={formValues.password} onChange={(e) => setFormValues({...formValues, [e.target.name]: e.target.value})}/>

          <button onClick={handleLogIn}>Log In</button>
            </div>
          </div>
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
      grid-template-columns:${({showPassword})=> showPassword ? "1fr 1fr" : "2fr 1fr"};
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
