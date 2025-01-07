import axios from "axios";
export const useAxios = () => axios.create({
    baseURL: 'https://accounts.spotify.com/api/token',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
});