<template>
    <main>

        <TrafficLights :colors="$store.state.colorChange" :chosenone="'green'"/>

    </main>
</template>

<script>
    import TrafficLights from "../components/TrafficLights";
    export default {
        name: "Green",
        mounted() {

        },
        components: {TrafficLights}
    }
</script>

<style scoped>

</style>