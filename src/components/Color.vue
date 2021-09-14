<template>
    <div class="circle">
        <div :class="{color: true, active: chosenone, warning: warning}" :style="`background: ${color}`" />
    </div>
</template>

<script>
    export default {
        name: "Color",
        computed:{
            warning(){
                return this.chosenone && (this.$store.state.timer < 30)
            }
        },
        props:{
            color:{
                type: String,
                default(){
                    return 'black'
                }
            },
            chosenone:{
                type: Boolean,
                default(){
                    return false
                }
            }
        }
    }
</script>

<style scoped>
    .circle{
        border-radius: 50%;
        border: 2px grey solid;
        width: 20vmin;
        height: 20vmin;
        overflow: hidden;
        margin: 1vmin 0;
    }

    .color{
        width: 100%;
        height: 100%;
        transition: ease-in-out 0.2s;
        opacity: 0.4;
    }
    .active{
        opacity: 1;
    }

    p {
        animation-duration: 3s;
        animation-name: slidein;
    }


    .warning{
        animation-duration: 0.5s;
        animation-name: blink;
        animation-iteration-count: infinite;
        animation-direction: alternate;

    }
    @keyframes blink {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }

</style>