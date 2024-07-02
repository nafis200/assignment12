import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://assignment-12-backend-rho.vercel.app"
});

const useAxiospublic = () => {
  return axiosPublic;
};

export default useAxiospublic;
