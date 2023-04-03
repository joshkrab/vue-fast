<template>
	<v-container>
		<PhotoForm @addPhoto="addPhoto" />
		<!-- <div v-else>You can't add more photos</div> -->
		<v-row>
			<Photo v-for="photo in $store.getters.getAllPhotos" v-bind:photo="photo" />
		</v-row>
		<PhotoDialog />
	</v-container>
</template>

<script>
import Photo from '@/components/photo/Photo.vue';
import PhotoDialog from '@/components/photo/PhotoDialog.vue';
import PhotoForm from '@/components/photo/PhotoForm.vue';
import { mapActions } from 'vuex';

export default {
	components: { Photo, PhotoForm, PhotoDialog },

	data: () => ({

		// photos: [
		// 	{ id: 1, title: 'photo 1' },
		// 	{ id: 2, title: 'photo 2' },
		// 	{ id: 3, title: 'photo 3' },
		// 	{ id: 4, title: 'photo 4' },
		// 	{ id: 5, title: 'photo 5' },
		// ]

		photos: [], // response.data
		// currentPhoto: {},
		// dialogVisible: false
	}),

	mounted () {
		// this.fetchToDo()
		// this.$store.dispatch('fetchPhotos')
		this.fetchPhotos()
	},

	methods: {
		...mapActions(['fetchPhotos']),
		// fetchToDo () {
		// 	this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
		// 		.then(response => this.photos = response.data)
		// },
		addPhoto (photo) {
			this.photos.push(photo)
		},
		openPhoto (photo) {
			this.currentPhoto = photo
			this.dialogVisible = true
		},
	}
}
</script>

<style></style>