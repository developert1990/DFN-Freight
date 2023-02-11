<template>
    <div id="music-table">
        <div class="filters">
            <input class="search-by-song" placeholder="Search by Song" type="text" v-model="searchBySong" />
            <select name="album" id="album" v-model="selectedAlbum">
                <option default disabled value="">Filter by Album</option>
                <option v-for="album in albums" :value="album.id" :key="album.id">{{ album.name }}</option>
            </select>
            <select name="track" id="track" v-model="selectedTrack">
                <option default disabled value="">Filter by Track</option>
                <option v-for="(track, index) in tracks" :value="track" :key="index">{{ track }}</option>
            </select>
            <button @click="resetSearch">Reset</button>
        </div>
        <div v-if="formattedSongs.length === 0">
            <ErrorMsgBox msg="Sorry, No results found.. 😭" />
        </div>
        <table v-else border="1" class="music-table">
            <thead>
                <th v-for="(column, index) in talbeColums" :key="index">
                    <button :disabled="column.type === 'btn-inactive'" :class="column.type" @click="changeOrder(column.code)">{{ column.name }}</button>
                </th>
            </thead>
            <tbody>
                <tr v-for="song in formattedSongs" :key="song.id">
                    <td>{{ song.id }}</td>
                    <td>{{ song.albumName }}</td>
                    <td>{{ song.artistName }}</td>
                    <td>{{ song.name }}</td>
                    <td>{{ song.track }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { useMusicStore } from "../stores/music";
import { storeToRefs } from "pinia";
import ErrorMsgBox from "./ErrorMsgBox.vue";

export default {
    name: "MusicTable",
    components: {
        ErrorMsgBox,
    },
    props: {
        currentPage: Number,
    },
    setup() {
        const { albums, formattedSongs, selectedAlbum, selectedTrack, searchBySong, selectedOrder, talbeColums, isAsc, prevCode, order, selectedCode } = storeToRefs(useMusicStore());
        const { fetchSongs } = useMusicStore();
        return { fetchSongs, albums, formattedSongs, selectedAlbum, selectedTrack, searchBySong, selectedOrder, talbeColums, isAsc, prevCode, order, selectedCode };
    },
    data() {
        return {
            defaultPage: 1,
            tracks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        };
    },
    async mounted() {
        await this.fetchSongs({ page: this.currentPage });
    },
    methods: {
        debounce(func, timeout = 300) {
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    func.apply(this, args);
                }, timeout);
            };
        },
        async resetSearch() {
            this.selectedAlbum = "";
            this.selectedTrack = "";
            this.searchBySong = "";
            this.$emit("setdefaultpage");
            await this.fetchSongs({ page: this.defaultPage });
        },
        async changeOrder(code) {
            // Early return when track filter is selected.
            if (this.selectedTrack !== "" && code === "track") return;

            this.selectedCode = code;

            if (this.prevCode === this.selectedCode) {
                this.order = this.isAsc ? "asc" : "desc";
                this.isAsc = !this.isAsc;
            } else {
                this.order = "asc";
                this.isAsc = false;
            }
            await this.fetchSongs({ page: this.currentPage });

            this.prevCode = this.selectedCode;
        },
    },
    watch: {
        async selectedAlbum() {
            this.$emit("setdefaultpage");
            this.selectedAlbum !== "" && (await this.fetchSongs({ page: this.defaultPage }));
        },
        async selectedTrack() {
            this.$emit("setdefaultpage");
            this.selectedTrack !== "" && (await this.fetchSongs({ page: this.defaultPage }));
        },
        searchBySong() {
            clearTimeout(this.debounce);
            this.debounce = setTimeout(async () => {
                this.$emit("setdefaultpage");
                console.log("this.formattedSongs", this.formattedSongs);
                await this.fetchSongs({ page: this.defaultPage });
            }, 600);
        },
    },
};
</script>
<style>
.filters {
    text-align: right;
    margin-bottom: 20px;
}

.search-by-song {
    color: var(--lightColor);
    background: none;
    border: none;
    border-bottom: 2px solid var(--subColor);
    padding: 10px;
    margin-right: 10px;
    height: 39px;
}

.filters select {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid var(--subColor);
    margin-right: 10px;
    color: var(--lightColor);
    padding: 10px;
}

.filters select:focus-visible,
.search-by-song:focus-visible {
    outline: none;
}

.filters button {
    background-color: var(--subColor);
    border: none;
    padding: 10px 15px;
    margin-left: 10px;
    cursor: pointer;
    color: var(--lightColor);
    font-weight: bold;
}

.filters button:hover {
    transition: all 0.3s ease-in-out;
    background-color: var(--subHoverColor);
    color: var(--lightColor);
}

.filters button:active {
    background-color: var(--lightColor);
    color: var(--subColor);
}

select,
button.active {
    cursor: pointer;
}

.music-table {
    font-size: 16px;
}

.music-table button {
    background-color: transparent;

    font-weight: bold;
    outline: none;
    border: none;
    width: 100%;
}

.btn-active {
    cursor: pointer;
    color: var(--subColor);
}

.btn-inactive {
    color: var(--lightColor);
}
.music-table tr td:nth-child(1) {
    width: 100px;
}

.music-table tr td:nth-child(2) {
    width: 200px;
    height: 30px;
}
.music-table tr td:nth-child(3) {
    width: 100px;
}
.music-table tr td:nth-child(4) {
    width: 220px;
}
.music-table tr td:nth-child(5) {
    width: 100px;
}
</style>
