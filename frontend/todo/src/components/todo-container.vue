<template>
    <div :id="'container-' + text">
        <v-btn variant="outlined" id="btn" @click="destroy()">done</v-btn>
        <h2>{{ text }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Todo-container',
        props: {
            text: String,
        },
        components: {
            
        },
        methods: {
            destroy() {
                fetch("/api/db/deleteTodo/" + this.text);
                document.getElementById("container-" + this.text).remove();
                this.$emit("update");
            }
        }
    }
</script>

<style scoped>
    div {
        display: flex;
        gap: 20px;
    }
    #btn {
        color: #4caf50;
    }
    h2 {
        color: white;
    }
</style>