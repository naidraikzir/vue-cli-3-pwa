<template>
  <div>
    <video
      autoplay
      ref="liveview"
      :class="{ 'front': front }"
    ></video>
    <br>
    <button @click="front = !front">Switch</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    front: true,
  }),

  watch: {
    front() {
      this.setSrc();
    },
  },

  mounted() {
    if (this.featureDetect()) {
      this.setSrc();
    } else {
      alert('Not supported !');
    }
  },

  beforeDestroy() {
    let tracks = this.$refs.liveview.srcObject.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
    this.$refs.liveview.srcObject = null;
  },

  methods: {
    async setSrc() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: {
            facingMode: this.front ? 'user' : 'environment',
          },
        });
        this.$refs.liveview.srcObject = stream;
      } catch (error) {
        console.error(error);
      }
    },
    featureDetect: () => !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia),
  },
};
</script>

<style lang="scss" scoped>
video.front {
  transform: rotateY(180deg);
}

.media {
  margin-top: 1em;
  word-break: break-all;
}
</style>
