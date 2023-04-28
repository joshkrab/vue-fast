<!-- vueinit -->
<template>
	<!-- container - for not full hight of app-bar -->
	<!-- fluid - for full width of app-bar -->
	<v-container fluid>
		<v-app-bar color="orange" dark>

			<!-- Move buttons right: fill free space -->
			<v-spacer />

			<v-btn outlined class="ml-3">
				<router-link to="/">
					Main
				</router-link>
			</v-btn>

			<v-btn outlined class="ml-3">
				<router-link to="/photos">
					Photo
				</router-link></v-btn>
		</v-app-bar>
	</v-container>
</template>

<script>
export default {

}
</script>
<style scoped>
.v-application a {
	text-decoration: none;
	color:antiquewhite;
}</style>
