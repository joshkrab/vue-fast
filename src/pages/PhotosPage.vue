<template>
	<v-container>
		<v-row>
			<Photo v-for="photo in photos" v-bind:photo="photo" />
		</v-row>
	</v-container>
</template>

<script>
import Photo from '@/components/photo/Photo.vue';

export default {
	components: { Photo },

	data: () => ({
		// photos: [
		// 	{ id: 1, title: 'photo 1' },
		// 	{ id: 2, title: 'photo 2' },
		// 	{ id: 3, title: 'photo 3' },
		// 	{ id: 4, title: 'photo 4' },
		// 	{ id: 5, title: 'photo 5' },
		// ]
		photos: []
	}),

	mounted () {
		this.fetchToDo()
	},

	methods: {
		fetchToDo () {
			this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10').then(response => this.photos = response.data)
		}
	}
}
</script>

<style>

</style>