<template>
    <main>

        <TrafficLights :colors="$store.state.colorChange" :chosenone="'red'"/>

    </main>
</template>

<script>
    import TrafficLights from "../components/TrafficLights";
    export default {
        name: "Red",
        components: {TrafficLights}
    }
</script>

<style scoped>

</style>