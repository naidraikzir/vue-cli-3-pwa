<template>
  <div>
    <video autoplay ref="liveview"></video>
    <div class="p1" v-show="medias.length">
      <h3>Available Medias</h3>
      <div class="media" v-for="(media, m) of medias" :key="m">
        <div><strong>Device ID</strong> : {{ media.deviceId }}</div>
        <div><strong>Group ID</strong> : {{ media.groupId }}</div>
        <div><strong>Label</strong> : {{ media.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    medias: [],
  }),

  async mounted() {
    if (this.featureDetect()) {
      try {
        const medias = await navigator.mediaDevices.enumerateDevices();
        this.medias = medias.filter(media => media.kind === 'videoinput');

        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user',
          },
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

.media {
  margin-top: 1em;
  word-break: break-all;
}
</style>
