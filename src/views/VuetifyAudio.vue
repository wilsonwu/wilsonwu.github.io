<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3 lg4 offset-lg4>
			<v-card>
				<v-card-text>
					Base on vuetify-audio 0.0.8
				</v-card-text>
			</v-card>
			<vuetify-audio :file="file" :ended="audioFinish"></vuetify-audio>
			<v-card>
				<v-card-text v-for="(msg,i) in msgs" :key="i">
					{{ msg }}
				</v-card-text>
			</v-card>
			<v-card>
				<v-card-text>
					This page source code: <a href="https://github.com/wilsonwu/wilsonwu.github.io/blob/master/src/view/vuetifyaudio.vue">Source Code</a>
				</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
</template>
<script>
	import VuetifyAudio from 'vuetify-audio';

	export default {
		data() {
			return {
				file: 'http://www.noiseaddicts.com/samples_1w72b820/290.mp3',
				msgs: ['No message now.'],
			};
		},
		components: {
			'vuetify-audio': VuetifyAudio
		},
		methods: {
			audioFinish () {
				this.msgs.push('The audio finished.');
			},
		},
	}
</script>