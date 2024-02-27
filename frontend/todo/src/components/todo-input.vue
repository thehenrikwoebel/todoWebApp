<template>
    <div id="input">
        <v-text-field clearable label="Todo" class="in" v-model="text"></v-text-field>
        <v-btn icon="mdi-plus" size="large" @click="addToDo"></v-btn>
    </div>
</template>

<script>

    export default {
        name: 'Todo-input',
        text: "",
        components: {

        },
        methods: {
            addToDo() {
                this.$emit("updateList", this.text);
            }
        }
    }
</script>

<style scoped>
    .in {
        color: white !important;
        max-width: 300px;
    }
    #input {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 50px;
        gap: 20px;
    }
</style>