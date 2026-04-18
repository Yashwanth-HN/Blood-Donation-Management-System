import axios from "axios";
import API_BASE_URL from "../config/api";

const API_URL = `${API_BASE_URL}/api/donors`;

// ✅ Register Donor
export const registerDonor = (data) => {
  return axios.post(`${API_URL}/register`, data);
};

// ✅ Login Donor
export const loginDonor = (data) => {
  return axios.post(`${API_URL}/login`, data);
};

// ✅ Get Donor by ID
export const getDonorById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};
