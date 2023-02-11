<template>
    <ul id="pagination">
        <li class="pagination-item">
            <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">First</button>
        </li>

        <li class="pagination-item">
            <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">Previous</button>
        </li>
        <div class="page-status">
            {{ `${currentPage} / ${totalPages}` }}
        </div>
        <li class="pagination-item">
            <button type="button" @click="onClickNextPage" :disabled="isInLastPage">Next</button>
        </li>

        <li class="pagination-item">
            <button type="button" @click="onClickLastPage" :disabled="isInLastPage">Last</button>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        totalPages: {
            type: Number,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        },
    },
    computed: {
        isInFirstPage() {
            return this.currentPage === 1;
        },
        isInLastPage() {
            return this.currentPage === this.totalPages;
        },
    },
    methods: {
        onClickFirstPage() {
            this.$emit("pagechanged", 1);
        },
        onClickPreviousPage() {
            this.$emit("pagechanged", this.currentPage - 1);
        },
        onClickNextPage() {
            this.$emit("pagechanged", this.currentPage + 1);
        },
        onClickLastPage() {
            this.$emit("pagechanged", this.totalPages);
        },
    },
};
</script>
<style>
#pagination {
    list-style-type: none;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 120px;
    bottom: -120px;
}

.pagination-item {
    display: inline-block;
}

.page-status {
    margin: 0 10px;
    font-weight: bold;
}

.pagination-item button {
    background-color: var(--subColor);
    border: none;
    padding: 10px 15px;
    margin-left: 10px;
    cursor: pointer;
    color: var(--lightColor);
    font-weight: bold;
}

.pagination-item button:hover {
    transition: all 0.3s ease-in-out;
    background-color: var(--subHoverColor);
    color: var(--subColor);
}

.pagination-item button:active {
    background-color: var(--lightColor);
    color: var(--subColor);
}

.pagination-item button:disabled {
    background-color: rgb(90, 58, 14);
    cursor: default;
    color: var(--subColor);
}
</style>
