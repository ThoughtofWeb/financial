<template>
    <div>
        <Head/>
        <HSlider/>
        <Novice/>
    </div>
</template>
<script>
import Head from "../public/header.vue";
import HSlider from "./hslider.vue";
import Novice from "./novice.vue";
export default {
    components:{
        Head,
        HSlider,
        Novice
    }
};
</script>