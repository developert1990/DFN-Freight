import axios from "axios";
import { VUE_API } from "../config";

export const artistsAPI = async () => {
    const { data } = await axios.get(`${VUE_API}/artists`);
    return data;
};
