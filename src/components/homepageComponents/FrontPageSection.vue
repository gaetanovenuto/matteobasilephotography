<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
        frontPage: [
          {
            src: '/img/pexels/PexelsBook.JPG',
            alt: 'Matteo Basile Photography'
          },
        ]
    }
  },
  components: {
  },
  computed: {
    ...mapGetters(['currentLanguage']),
        language() {
            return this.currentLanguage;
        }
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
        {{ language === 'it' ? 'Attraverso i miei occhi.' : 'Through my eyes.' }}
      </div>
    </div>
    
</template>

<style lang="scss" scoped>
.frontPage {
  position: relative;
  padding-top: 80px;

  img {
    height: calc(100vh - 80px);
    width: 100%;
    filter: grayscale(100%);
    object-fit: cover;
    opacity: .9;
    object-position: center 75%;
  }

  .logo-img {
    object-fit: contain;
    width: 350px;
    position: absolute;
    top: 30%;
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