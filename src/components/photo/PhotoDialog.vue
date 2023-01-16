<template>
  <v-dialog v-model="value" max-width="600">
    <v-card>
      <v-card-title>{{photo.title}}</v-card-title>
      <v-card-text>
        <v-img :src="photo.url" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  // Another wat for props with array:
  // props: ['photo', 'dialogVisible'], // but it isn't ok
  props: {
    photo: {
      type: Object,
      required: true
    },
    value: {
      type: Boolean,
      default: false,
    }
  },

  created () {
    this.dialogVisible = this.value
  },

  data: () => ({
    dialogVisible: false
  }),

  watch: {
    value (newValue) {
      console.log(newValue);
      this.dialogVisible = newValue
    },
    dialogVisible (newValue) {
      this.$emit('input', newValue)
    }

  }
}
</script>

<style>

</style>