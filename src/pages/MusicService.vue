<template>
    <div id="music-service">
        <div class="main-title">
            <h1>Welcome to DFN's Music Service</h1>
        </div>
        <div class="main-body">
            <div v-if="isLoading">
                <LoadingBox />
            </div>
            <div class="table-and-pagination-wrapper" v-else>
                <MusicTable :currentPage="currentPage" @setdefaultpage="setDefaultPage" />
                <pagination v-if="formattedSongs.length !== 0" :totalPages="totalPage" :currentPage="currentPage" @pagechanged="onPageChange" :totalSongs="totalSongs" />
            </div>
        </div>
    </div>
</template>
<script>
import MusicTable from "../components/MusicTable.vue";
import Pagination from "../components/Pagination.vue";
import LoadingBox from "../components/LoadingBox.vue";
import { useMusicStore } from "../stores/music";
import { storeToRefs } from "pinia";

export default {
    name: "MusicService",
    components: {
        MusicTable,
        Pagination,
        LoadingBox,
    },
    setup() {
        // Can not use destructuring for state properties and getters because they will lose their reactivity. So used storeToRefs utility, which creates a ref for each property.
        const { totalPage, totalSongs, selectedCode, order, formattedSongs } = storeToRefs(useMusicStore());
        const { fetchAlbums, fetchArtists, fetchSongs } = useMusicStore();
        return { fetchAlbums, fetchArtists, fetchSongs, totalPage, totalSongs, selectedCode, order, formattedSongs };
    },
    data() {
        return {
            currentPage: 1,
            isLoading: false,
        };
    },
    async created() {
        this.isLoading = true;
        await this.fetchAlbums();
        await this.fetchArtists();

        // This is just to show the loader, setTimeout() is not needed.
        setTimeout(() => {
            this.isLoading = false;
        }, 500);
    },
    methods: {
        async onPageChange(page) {
            this.currentPage = page;
            await this.fetchSongs({ page: this.currentPage });
        },
        setDefaultPage() {
            this.currentPage = 1;
        },
    },
};
</script>
<style>
#music-service {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.main-title {
    flex: 1;
    color: var(--subColor);
}
.main-body {
    flex: 5;
    min-width: 750px;
}

.table-and-pagination-wrapper {
    position: relative;
    min-height: 500px;
}
</style>
