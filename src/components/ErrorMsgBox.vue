<template>
    <div class="error-msg-box">
        {{ msg }}
    </div>
</template>
<script>
export default {
    name: "ErrorMsgBox",
    props: {
        msg: {
            type: String,
            required: true,
            default: "Sorry..",
        },
    },
};
</script>
