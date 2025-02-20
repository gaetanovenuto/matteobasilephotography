<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
        twoPics: [
          {
            src: '/img/pexels/PexelsFog.jpg',
            engName: 'Projects',
            itName: 'Progetti',
            href: '/projects'
          },
          {
            src: '/img/pexels/PexelsBasketRim.jpg',
            engName: 'Series',
            itName: 'Serie',
            href: '/series'
          }
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
    <div class="twoPics d-flex justify-content-between flex-wrap">
        <div v-for="(image, index) in twoPics" :key="index" class="image-container col-12 col-md-6 m-0 p-0">
            <img :src="image.src" :alt="image.alt" class="img-fluid threePics-img">
            <div class="info text-center">
                <div class="text-white label">
                    {{ language === 'it' ? image.itName : image.engName }}
                </div>
                <button class="btn info-btn mt-3">
                    <a :href="image.href" class="text-white text-decoration-none">
                        {{ language === 'it' ? 'Vedi Galleria' : 'See Gallery' }}
                    </a>
                </button>
            </div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
.twoPics {
    
    
    .image-container {
        position: relative;
    }

    img {
        height: 100vh;
        width: 100%;
        object-fit: cover;
        filter: grayscale(80%);
        opacity: .9;
        transition: opacity .3s ease;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, .5);

        &:hover {
            opacity: 1;
        }
    }

    .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .label {
            font-size: 52px;
            text-shadow: 2px 2px 2px rgba(0, 0, 0, .5);
        }

        .info-btn {
            border: 2px solid white;
            border-radius: 0;
            transition: background-color .5s, color .5s;
            
            &:hover {
                background-color: white;
                
                a {
                    color: rgb(124, 124, 124) !important;
                    text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);
                }
            }
        }
    }
}
</style>