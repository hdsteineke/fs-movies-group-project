import React, { useState } from 'react';
import { signUpUser, signInUser } from './services/supabase-utils.js';

export default function AuthPage({ setUser }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  async function handleSignUp(e) {
    e.preventDefault();
    const user = await signUpUser(signUpEmail, signUpPassword);
    setUser(user);
  }

  async function handleSignIn(e) {
    e.preventDefault();
    const user = await signInUser(signInEmail, signInPassword);
    setUser(user);
  }

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <label>
          Email
          <input onChange={(e) => setSignInEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input onChange={(e) => setSignInPassword(e.target.value)} />
        </label>
        <button>Sign In</button>
      </form>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input onChange={(e) => setSignUpEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input onChange={(e) => setSignUpPassword(e.target.value)} />
        </label>
        <button>Sign Up</button>
      </form>
    </div>
  );
}
