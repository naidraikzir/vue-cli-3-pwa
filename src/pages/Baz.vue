<template>
  <div>
    <video autoplay ref="liveview"></video>
  </div>
</template>

<script>
export default {
  async mounted() {
    if (this.featureDetect()) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        this.$refs.liveview.srcObject = stream;
      } catch (error) {
        console.error(error);
      }
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
    featureDetect: () => !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia),
  },
};
</script>

<style lang="scss" scoped>
video {
  transform: rotateY(180deg);
}
</style>
