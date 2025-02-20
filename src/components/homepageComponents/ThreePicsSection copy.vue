<script>
export default {
  data() {
    return {
        threePics: [
          {
            src: '/img/fotomarocco/MaroccoBrasil.jpeg',
            alt: 'Marocco Brasil'
          },
          {
            src: '/img/fotomarocco/MaroccoTunnel.jpeg',
            alt: 'Marocco Tunnel'
          },
          {
            src: '/img/uganda/UgandaTree1.jpg',
            alt: 'Uganda Tree'
          }
        ]
    }
  },
  components: {
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  },
}
</script>

<template>
    <div class="threePics row">
      <img v-for="(image, index) in threePics" :key="index" :src="image.src" :alt="image.alt" class="col-12 col-md-4 m-0 p-0 img-fluid threePics-img">
    </div>
</template>

<style lang="scss" scoped>
.threePics {

  img {
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
  }
}
</style>