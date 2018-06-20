<template>
  <div class="p1">
    <h2>Geolocation</h2>
    <pre>{{ $root.coords }}</pre>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.featureDetect()) {
      try {
        navigator.geolocation.watchPosition((location) => {
          Object.keys(this.$root.coords)
            .map((key) => {
              this.$root.coords[key] = location.coords[key];
            });
        }, (error) => {
          console.error(error)
        })
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Not supported !');
    }
  },

  methods: {
    featureDetect: () => !!(navigator.geolocation),
  },
};
</script>
