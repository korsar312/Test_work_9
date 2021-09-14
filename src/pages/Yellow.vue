<template>
    <main>

        <TrafficLights :colors="$store.state.colorChange" :chosenone="'yellow'"/>

    </main>
</template>

<script>
    import TrafficLights from "../components/TrafficLights";
    export default {
        name: "Yellow",
        components: {TrafficLights}
    }
</script>

<style scoped>

</style>