<template>
    <v-app-bar app height="80px">
        <v-app-bar-nav-icon @click="open"></v-app-bar-nav-icon>
        <div class="space-div"></div>
        <v-avatar class="twt-logo" tile>
            <img src="../../assets/logo.png" alt="twt" />
        </v-avatar>
        <v-toolbar-title class="twt-title">天外天&emsp;|&emsp;个人中心</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: "Header",
    data: () => ({
        drawer:true
    }),
    methods:{
        open(){
            console.log(123)
            this.$emit('naviOpen')
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/utils/main.scss";

.space-div {
    width: getVw(24);
}

.twt-title{
    @media screen and (max-width:700px) {
        font-size: 14px;
    }
}

.twt-logo{
    @media screen and (max-width:700px) {
        height: 32px!important;
        width: 32px!important;
    }
}
</style>