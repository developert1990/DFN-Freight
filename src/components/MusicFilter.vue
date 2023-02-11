<template>
    <div class="filters">
        <input class="search-by-song" placeholder="Search by Song" type="text" v-model="searchBySong" ref="focusSearch" />
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
</template>
<script>
import { storeToRefs } from "pinia";
import { useMusicStore } from "../stores/music";
export default {
    name: "MusicFilter",
    setup() {
        const { albums, selectedAlbum, selectedTrack, searchBySong, defaultPage, selectedCode } = storeToRefs(useMusicStore());
        const { fetchSongs } = useMusicStore();
        return { fetchSongs, albums, selectedAlbum, selectedTrack, searchBySong, defaultPage, selectedCode };
    },
    data() {
        return {
            tracks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        };
    },
    mounted() {
        this.$refs.focusSearch.focus();
    },
    methods: {
        async resetSearch() {
            this.selectedAlbum = "";
            this.selectedTrack = "";
            this.searchBySong = "";
            this.selectedCode = "";
            this.$emit("setdefaultpage");
            await this.fetchSongs({ page: this.defaultPage });
        },
        debounce(func, timeout = 300) {
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    func.apply(this, args);
                }, timeout);
            };
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
                await this.fetchSongs({ page: this.defaultPage });
            }, 300);
        },
    },
};
</script>
<style>
.filters {
    text-align: right;
    margin-bottom: 40px;
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
</style>
