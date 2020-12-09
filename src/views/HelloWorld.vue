<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
        <v-btn @click="test" depressed>
      Normal
    </v-btn>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({}),
    methods:{
      test(){
        this.$message.success('213')
      }
    }
  }
</script>
