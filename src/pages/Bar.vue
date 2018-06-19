<template>
  <div class="p1">
    <h2>Geolocation</h2>
    <pre>{{ coords }}</pre>
  </div>
</template>

<script>
export default {
  data: () => ({
    coords: {
      accuracy: null,
      altitude: null,
      altitudeAccuracy: null,
      heading: null,
      latitude: null,
      longitude: null,
      speed: null,
    },
  }),

  mounted() {
    if (this.featureDetect()) {
      try {
        navigator.geolocation.watchPosition((location) => {
          Object.keys(this.coords)
            .map((key) => {
              this.coords[key] = location.coords[key];
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
