<script>
export default {
  data() {
    return {
        frontPage: [
          {
            src: '/img/pexels/PexelsTurin.jpg',
            alt: 'Turin'
          },
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
    <div class="frontPage row m-0">
      <img v-for="(image, index) in frontPage" :key="index" :src="image.src" :alt="image.alt" class="col-12 col-md-4 m-0 p-0 img-fluid frontPage-img">
      <div class="logo">
        <img src="/img/MatteoBasileLogoNoBG.png" alt="Matteo Basile Photography" class="img-fluid logo-img">
      </div>
      <div class="header-text fs-3 text-white fw-light">
        Explore the reality. Capture the moment.
      </div>
    </div>
    
</template>

<style lang="scss" scoped>
.frontPage {
  position: relative;
  

  img {
    height: calc(100vh - 80px);
    width: 100%;
    filter: grayscale(100%);
    object-fit: cover;
    opacity: .9;
  }

  .logo-img {
    object-fit: contain;
    width: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
  }

  .header-text {
    position: absolute;
    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}
</style>