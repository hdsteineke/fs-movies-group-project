import { client } from './client';

export async function getUser() {
  return client.auth.session();

}

export async function signUpUser(email, password) {
    ///revisit email/password arguments --- may need curlies
  const response = await client.auth.signUp(email, password);

  return response;
}


export async function signInUser(email, password) {
  const response = await client.auth.signIn(email, password);

  return response;
}

export async function logout() {
  await client.auth.signOut();

  return window.location.href = '../';
}

