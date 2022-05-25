import React, { useState } from 'react';
import { signUpUser, signInUser } from './services/supabase-utils.js';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  async function handleSignUp(e) {
    e.preventDefault();
    const { user } = await signUpUser(signUpEmail, signUpPassword);
    setUser(user);
  }

  async function handleSignIn(e) {
    e.preventDefault();
    const { user } = await signInUser(signInEmail, signInPassword);
    setUser(user);
  }

  return (
    <div className="login-forms">
      <form className="sign-in-form" onSubmit={handleSignIn}>
        <label>
          Email
          <input onChange={(e) => setSignInEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input onChange={(e) => setSignInPassword(e.target.value)} />
        </label>
        <button className="buttons">Sign In</button>
      </form>
      <form className="sign-up-form" onSubmit={handleSignUp}>
        <label>
          Email
          <input onChange={(e) => setSignUpEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input onChange={(e) => setSignUpPassword(e.target.value)} />
        </label>
        <button className="buttons">Sign Up</button>
      </form>
    </div>
  );
}
