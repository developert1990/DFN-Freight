import axios from "axios";
import { VUE_API } from "../config";

export const albumsAPI = async () => {
    const { data } = await axios.get(`${VUE_API}/albums`);
    return data;
};
