import axios from "axios";

const URL = "http://localhost:8000";

// DONOR
export const addDonor = async (data) => {
  return await axios.post(`${URL}/api/donor/add`, data);
};

// MEMBER
export const addMember = async (data) => {
  return await axios.post(`${URL}/member`, data);
};

// REGISTER
export const registerUser = async (data) => {
  return await axios.post(`${URL}/register`, data);
};

// LOGIN
export const loginUser = async (data) => {
  return await axios.post(`${URL}/login`, data);
};

// VOLUNTEER
export const addVolunteer = async (data) => {
  return await axios.post(`${URL}/volunteer`, data);
};