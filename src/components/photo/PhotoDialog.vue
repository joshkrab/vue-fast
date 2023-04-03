<template>
  <v-dialog v-model="$store.getters.getDialogVisible" max-width="600" @click:outside="$store.commit('hideDialog')"  >
    <v-card>
      <v-card-title>{{ full_title }}</v-card-title>
      <v-card-text>
        <v-img :src="$store.getters.getCurrentPhoto.url" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  // Another way for props with array:
  // props: ['photo', 'dialogVisible'], // but it isn't ok
  // props: {
  //   photo: {
  //     type: Object,
  //     required: true
  //   },
  //   value: {
  //     type: Boolean,
  //     default: false,
  //   }
  // },

  computed: {
    full_title () {
      return `Name of photo - ${this.$store.getters.getCurrentPhoto.title}`
    }
  }
  // created () {
  //   this.dialogVisible = this.value
  // },

  // data: () => ({
  //   dialogVisible: false
  // }),

  // watch: {
  //   value (newValue) {
  //     console.log(newValue);
  //     this.dialogVisible = newValue;
  //   },
  //   dialogVisible (newValue) {
  //     this.$emit('input', newValue);
  //   }

  // }
}
</script>

<style></style>