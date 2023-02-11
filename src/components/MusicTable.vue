<template>
    <div id="music-table">
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
        const { formattedSongs, selectedTrack, talbeColums, isAsc, prevCode, order, selectedCode, defaultPage } = storeToRefs(useMusicStore());
        const { fetchSongs } = useMusicStore();
        return { fetchSongs, formattedSongs, selectedTrack, talbeColums, isAsc, prevCode, order, selectedCode, defaultPage };
    },
    async mounted() {
        await this.fetchSongs({ page: this.currentPage });
    },
    methods: {
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
};
</script>
<style>
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
