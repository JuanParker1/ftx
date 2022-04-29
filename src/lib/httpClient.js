import axios from "axios";

export const httpClient = axios.create({
  baseURL: process.env.GATSBY_API_URL,
  timeout: 15000,
});

export async function loginApi(payload) {
  try {
    const response = await httpClient.post(
      `:signInWithPassword?key=${process.env.GATSBY_API_KEY}`,
      { returnSecureToken: true, ...payload },
      {
        timeout: 2000,
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}
