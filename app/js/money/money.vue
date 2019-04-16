<template>
    <div>
        <Head/>
        <MSlider/>
        <Activity/>
        <Finac/>
        <Activity2/>
        <SelectPerfect/>
        <Banner/>
        <Footer :cname="mfooter"/>
    </div>
</template>
<script>
    import Head from "../public/header.vue";
    import Footer from "../public/footer.vue";
    import MSlider from "./mslider.vue";
    import Activity from "./activity.vue";
    import Activity2 from "./activity2.vue";
    import Finac from "./finac.vue";
    import SelectPerfect from "./selectPerfect.vue";
    import Banner from "./banner.vue";
    export default {
        components:{
            Head,
            Footer,
            MSlider,
            Activity,
            Finac,
            Activity2,
            SelectPerfect,
            Banner,
        }
    };
</script>
<style lang="scss">
    .mfooter{
        margin-top: 0!important;
        ul{
            li:first-child{
                display: none;
            }
        }
    }
</style>