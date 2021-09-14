<template>
    <main>

        <TrafficLights :colors="$store.state.colorChange" :chosenone="'red'"/>


    </main>
</template>



<script>

    import TrafficLights from "../components/TrafficLights";
    export default {
        name: "Main",
        data() {
            return {
            }
        },
        methods:{
        },
        components: {
            TrafficLights
        },
    }
</script>



<style scoped lang="scss">

</style>
