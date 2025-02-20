<script>
export default {
  data() {
    return {
        twoPics: [
          {
            src: '/img/pexels/PexelsFog.jpg',
            alt: 'Projects',
            href: '/projects'
          },
          {
            src: '/img/pexels/PexelsBasketRim.jpg',
            alt: 'Series',
            href: '/series'
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
    <div class="twoPics d-flex justify-content-between flex-wrap">
        <div v-for="(image, index) in twoPics" :key="index" class="image-container col-12 col-md-6 m-0 p-0">
            <img :src="image.src" :alt="image.alt" class="img-fluid threePics-img">
            <div class="info text-center">
                <div class="text-white label">
                    {{ image.alt }}
                </div>
                <button class="btn info-btn mt-3">
                    <a :href="image.href" class="text-white text-decoration-none">
                        Vedi galleria
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
        height: 100%;
        object-fit: cover;
        filter: grayscale(100%);
        opacity: .9;
        transition: opacity .3s ease;

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
                    color: black !important;
                    text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);
                }
            }
        }
    }
}
</style>