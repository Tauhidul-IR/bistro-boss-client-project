import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://restaurent-server-khaki.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
