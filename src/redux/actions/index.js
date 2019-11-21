import { FETCH_USER } from "./types";
import axios from 'axios';

export const fetchUser =  async (authValues, dispatch) => {
    const authResponse = await axios.post('http://localhost:5000/signin', authValues);
    const token = authResponse.data && authResponse.data.token;
    localStorage.setItem('userToken', token)
    console.log('response: ', authResponse)


    dispatch({ type: FETCH_USER, payload: authResponse.data.user })
}
