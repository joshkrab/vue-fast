<template>
  <v-container>
    <v-row class="d-flex">

      <!-- add title: -->
      <v-text-field v-model="title" />
      <!-- add file input: -->
      <v-file-input v-model="img" />

      <v-btn @click="addPhoto">Add</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {

  data: () => ({
    title: '',
    img: null
  }),

  methods: {
    addPhoto () {
      const reader = new FileReader();
      // Onload - will work when the file is read
      reader.onload = () => {
        let photo = {
          id: Date.now(),
          title: this.title,
          url: reader.result
        }
        this.$emit('addPhoto', photo)
      }

      reader.readAsDataURL(this.img);

    }
  }
}

</script>

</style>