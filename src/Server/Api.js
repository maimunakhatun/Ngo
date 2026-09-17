import axios from 'axios';
const URL = "http://localhost:8000";

// DONOR ER JONNO (tomar age theke ache)
export const addDonor = async (data) => {
  return await axios.post(`${URL}/donor`, data);
};

// MEMBER ER JONNO - ETA NOTUN ADD KORO
export const addMember = async (data) => {
  return await axios.post(`${URL}/member`, data);
};

export const registerUser = async (data) => {
  return await axios.post(`${URL}/register`, data);
};

export const loginUser = async (data) => {
  return await axios.post(`${URL}/login`, data);
};
export const addVolunteer = async (data) => {
  return await axios.post(`${URL}/volunteer`, data);
};
