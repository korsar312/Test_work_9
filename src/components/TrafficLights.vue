<template>

    <div class="trafficLights">
        <Color v-for="(item, i) in colors" :key="i" :color="item.color" :chosenone="chose(item.color)"/>
    </div>

</template>

<script>
    import Color from "./Color";
    export default {
        name: "trafficLights",
        components: {Color},
        methods:{
            chose(val){
                return val == this.chosenone
            },
        },
        props:{
            colors:{
                type: Array,
                default() {
                    return []
                }
            },
            chosenone:{
                type: String,
                default(){
                    return ''
                }
            }
        }
    }
</script>

<style scoped>
    .trafficLights{
        padding: 5vmin;
        background: #222222;
        border: 5px black solid;
        border-radius: 4vmin;
    }
</style>