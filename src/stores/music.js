import { defineStore } from "pinia";
import { albumsAPI } from "../apis/albumsAPI";
import { artistsAPI } from "../apis/artistsAPI";
import { songsAPI } from "../apis/songsAPI";
import { createObjectById } from "../utils/index";
import { createSongsObj } from "../libs/createSongsObj";

export const useMusicStore = defineStore({
    id: "music",
    state: () => ({
        albumsById: {},
        artistsById: {},
        albums: [],
        artists: [],
        songs: [],
        totalSongs: 0,
        totalPage: 0,
        formattedSongs: [],
        selectedAlbum: "",
        selectedTrack: "",
        searchBySong: "",
        order: "asc",
        selectedCode: "",
        talbeColums: [
            { name: "Album Number", type: "btn-active", code: "id" },
            { name: "Album", type: "btn-inactive", code: undefined },
            { name: "Artist", type: "btn-inactive", code: undefined },
            { name: "Song", type: "btn-active", code: "name" },
            { name: "Track", type: "btn-active", code: "track" },
        ],
        isAsc: false,
        prevCode: "id",
        defaultPage: 1,
    }),
    getters: {
        getAlbumsById: (state) => {
            return state.albumsById;
        },
        getArtistsById: (state) => {
            return state.artistsById;
        },
        getAlbums: (state) => {
            return state.albums;
        },
        getArtists: (state) => {
            return state.artists;
        },
        getSongs: (state) => {
            return state.songs;
        },
    },
    actions: {
        async fetchAlbums() {
            this.albums = await albumsAPI();
            this.albumsById = createObjectById(this.albums);
        },
        async fetchArtists() {
            this.artists = await artistsAPI();
            this.artistsById = createObjectById(this.artists);
        },
        async fetchSongs({ page }) {
            const param = this.generateParam();
            const { data, totalSongs } = await songsAPI({ page, param });
            this.songs = data;
            this.totalSongs = totalSongs;
            this.formatSongs({ songs: this.songs });
        },
        formatSongs({ songs }) {
            this.formattedSongs = createSongsObj({ songs, albumsById: this.albumsById, artistsById: this.artistsById });
            this.totalPage = Math.ceil(this.totalSongs / 10);
        },
        generateParam() {
            let param = "";
            param += this.selectedAlbum !== "" ? `&album_id=${this.selectedAlbum}` : "";
            param += this.selectedTrack !== "" ? `&track=${this.selectedTrack}` : "";
            param += this.selectedCode !== "" ? `&_sort=${this.selectedCode}&_order=${this.order}` : "";
            param += this.searchBySong !== "" ? `&name_like=${this.searchBySong}` : "";

            return param;
        },
    },
});
