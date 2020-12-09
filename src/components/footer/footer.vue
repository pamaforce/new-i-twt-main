<template>
    <v-footer app absolute height="160px" color="#424242">
        <img src="../../assets/logo.png" alt="twt-footer-logo" class="twt-footer-logo"/>
    </v-footer>
</template>

<script>
export default {
    name: "Footer",
    data: () => ({
        drawer:true
    }),
};
</script>

<style lang="scss" scoped>
.twt-footer-logo {
    position: relative;
    top: 40px;
    height: 40px;
    width: 40px;
    margin: 0 auto;
}
</style>