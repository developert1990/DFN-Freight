<template>
    <MusicService />
</template>

<script>
import MusicService from "./pages/MusicService.vue";

export default {
    name: "App",
    components: {
        MusicService,
    },
};
</script>

<style>
:root {
    --mainColor: #011e41;
    --subColor: #f28b00;
    --subHoverColor: #f2890093;
    --lightWhite: #eeeeee;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    margin: 0;
    height: 100vh;
    font-family: "Calibre-Bold";
    background-color: var(--mainColor);
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--lightWhite);
    margin-top: 60px;
    height: 100vh;
}
</style>
