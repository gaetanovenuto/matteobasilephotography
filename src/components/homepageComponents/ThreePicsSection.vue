<script>
export default {
  data() {
    return {
        threePics: [
          {
            src: '/img/pexels/PexelsBasketRim.jpg',
            alt: 'Basket Rim'
          },
          {
            src: '/img/pexels/PexelsFog.jpg',
            alt: 'Fog'
          },
          {
            src: '/img/pexels/PexelsKidsBeach.jpg',
            alt: 'Kids Beach'
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
  position: relative;

  img {
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    opacity: .9;
  }

}
</style>