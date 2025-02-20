<script>
export default {
  data() {
    return {
        twoPics: [
          {
            src: '/img/fotomarocco/MaroccoBrasil.jpeg',
            alt: 'Marocco Brasil'
          },
          {
            src: '/img/fotomarocco/MaroccoTunnel.jpeg',
            alt: 'Marocco Tunnel'
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
  <div class="twoPics">
    <img v-for="(image, index) in twoPics" :key="index" :src="image.src" :alt="image.alt" class="col-12 col-md-6 m-0 p-0 img-fluid threePics-img">
  </div>
</template>

<style lang="scss" scoped>
.twoPics {

  img {
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    opacity: .9;
  }
}
</style>