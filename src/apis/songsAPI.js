import axios from "axios";
import { VUE_API } from "../config";

export const songsAPI = async ({ page, param }) => {
    const { data, headers } = await axios.get(`${VUE_API}/songs?_page=${page}${param}`);
    return { data, totalSongs: headers["x-total-count"] };
};
