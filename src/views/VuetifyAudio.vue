<template>
  <v-container>
    <v-flex xs12 sm6 offset-sm3 lg4 offset-lg4>
      <v-card>
        <v-card-text>
          Base on vuetify-audio 0.3.3
        </v-card-text>
        <v-card-text>
          <vuetify-audio
            :flat="flat"
            :file="file"
            :color="color"
            :ended="audioFinish"
            :downloadable="downloadable"
            :autoPlay="autoPlay"
          ></vuetify-audio>
        </v-card-text>
        <v-card-actions>
          <v-btn outlined block @click="setFlat">
            {{ btnTextFlat }}
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn outlined block @click="setColor">
            {{ btnText }}
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn outlined block @click="setDownloadable">
            Set Downloadable, Now is: {{ downloadable }}
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn outlined block @click="setAutoPlay">
            Set Auto Play, Now is : {{ autoPlay }}
          </v-btn>
        </v-card-actions>
        <v-card-text v-for="(msg, i) in msgs" :key="i">
          {{ msg }}
        </v-card-text>
        <v-card-text>
          This page source code:
          <a
            href="https://github.com/wilsonwu/wilsonwu/blob/master/src/views/VuetifyAudio.vue"
            >Source Code</a
          >
        </v-card-text>
        <v-card-text>
          The component source code:
          <a href="https://github.com/wilsonwu/vuetify-audio/"
            >wilsonwu/vuetify-audio</a
          >
        </v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>
<script>
export default {
  created() {
    if (localStorage.autoPlay === "true") {
      this.autoPlay = true;
    } else {
      this.autoPlay = false;
    }
  },
  components: {
    VuetifyAudio: () => import("vuetify-audio"),
  },
  data: () => ({
    file: "http://wilsonwu.github.io/dist/290.mp3",
    color: null,
    downloadable: false,
    autoPlay: false,
    btnText: 'Set Color to "Primary" (Blue)',
    btnTextFlat: "The component card is Flat",
    flat: false,
    msgs: [],
  }),
  methods: {
    audioFinish() {
      this.msgs.push("The audio finished.");
    },
    setFlat() {
      if (this.flat) {
        this.flat = false;
        this.btnTextFlat = "The component card is NOT Flat";
      } else {
        this.flat = true;
        this.btnTextFlat = "The component card is Flat";
      }
    },
    setColor() {
      if (this.color) {
        this.color = null;
        this.btnText = 'Set Color to "Primary" (Blue)';
      } else {
        this.color = "primary";
        this.btnText = "Set Color to Default (Follow the Theme)";
      }
    },
    setDownloadable() {
      this.downloadable = !this.downloadable;
    },
    setAutoPlay() {
      this.autoPlay = !this.autoPlay;
      localStorage.autoPlay = this.autoPlay;
    },
  },
};
</script>
