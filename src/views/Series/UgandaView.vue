<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      UgandaImg: [
        {
          src: '/img/uganda/UgandaBackCrowd.jpg',
          alt: 'UgandaBackCrowd'
        },
        {
          src: '/img/uganda/UgandaCrowd.jpg',
          alt: 'UgandaCrowd'
        },
        {
          src: '/img/uganda/UgandaFabric.jpg',
          alt: 'UgandaFabric'
        },
        {
          src: '/img/uganda/UgandaFishing1.jpg',
          alt: 'UgandaFishing1'
        },
        {
          src: '/img/uganda/UgandaFishing2.jpg',
          alt: 'UgandaFishing2'
        },
        {
          src: '/img/uganda/UgandaFishing3.jpg',
          alt: 'UgandaFishing3'
        },
        {
          src: '/img/uganda/UgandaFishing4.jpg',
          alt: 'UgandaFishing4'
        },
        {
          src: '/img/uganda/UgandaFront.jpg',
          alt: 'UgandaFront'
        },
        {
          src: '/img/uganda/UgandaHelloKitty.jpg',
          alt: 'UgandaHelloKitty'
        },
        {
          src: '/img/uganda/UgandaKid1.jpg',
          alt: 'UgandaKid1'
        },
        {
          src: '/img/uganda/UgandaKidBooks.jpg',
          alt: 'UgandaKidBooks'
        },
        {
          src: '/img/uganda/UgandaKidFace.jpg',
          alt: 'UgandaKidFace'
        },
        {
          src: '/img/uganda/UgandaKids2.jpg',
          alt: 'UgandaKids2'
        },
        {
          src: '/img/uganda/UgandaLadies.jpg',
          alt: 'UgandaLadies'
        },
        {
          src: '/img/uganda/UgandaLegs.jpg',
          alt: 'UgandaLegs'
        },
        {
          src: '/img/uganda/UgandaMarket.jpg',
          alt: 'UgandaMarket'
        },
        {
          src: '/img/uganda/UgandaMomAndSon.jpg',
          alt: 'UgandaMomAndSon'
        },
        {
          src: '/img/uganda/UgandaPlants.jpg',
          alt: 'UgandaPlants'
        },
        {
          src: '/img/uganda/UgandaPlaying.jpg',
          alt: 'UgandaPlaying'
        },
        
        {
          src: '/img/uganda/UgandaPraying.jpg',
          alt: 'UgandaPraying'
        },
        {
          src: '/img/uganda/UgandaQueue1.jpg',
          alt: 'UgandaQueue1'
        },
        {
          src: '/img/uganda/UgandaQueue2.jpg',
          alt: 'UgandaQueue2'
        },
        {
          src: '/img/uganda/UgandaRedDress.jpg',
          alt: 'UgandaRedDress'
        },
        {
          src: '/img/uganda/UgandaSalad.jpg',
          alt: 'UgandaSalad'
        },
        {
          src: '/img/uganda/UgandaShip1.jpg',
          alt: 'UgandaShip1'
        },
        {
          src: '/img/uganda/UgandaShip2.jpg',
          alt: 'UgandaShip2'
        },
        {
          src: '/img/uganda/UgandaShip3.jpg',
          alt: 'UgandaShip3'
        },
        {
          src: '/img/uganda/UgandaShirt.jpg',
          alt: 'UgandaShirt'
        },
        {
          src: '/img/uganda/UgandaSittingKids.jpg',
          alt: 'UgandaSittingKids'
        },
        {
          src: '/img/uganda/UgandaSittingKids2.jpg',
          alt: 'UgandaSittingKids2'
        },
        {
          src: '/img/uganda/UgandaTower.jpg',
          alt: 'UgandaTower'
        },
        {
          src: '/img/uganda/UgandaTree1.jpg',
          alt: 'UgandaTree1'
        },
        {
          src: '/img/uganda/UgandaTree2.jpg',
          alt: 'UgandaTree2'
        },
        {
          src: '/img/uganda/UgandaTree3.jpg',
          alt: 'UgandaTree3'
        },
        {
          src: '/img/uganda/UgandaTree4.jpg',
          alt: 'UgandaTree4'
        },
        {
          src: '/img/uganda/UgandaTruck.jpg',
          alt: 'UgandaTruck'
        },
        {
          src: '/img/uganda/UgandaWaterCarrying.jpg',
          alt: 'UgandaWaterCarrying'
        },
        {
          src: '/img/uganda/UgandaWindow.jpg',
          alt: 'UgandaWindow'
        },
        {
          src: '/img/uganda/UgandaWorking.jpg',
          alt: 'UgandaWorking'
        },
      ],
      lightboxActive: false,
      currentImageIndex: 0
    }
  },
  components: {
  },
  computed: {
    currentImage() {
      return this.UgandaImg[this.currentImageIndex];
    },
    ...mapGetters(['currentLanguage']),
    language() {
      return this.currentLanguage;
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeyDown);
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    openLightbox(index) {
      this.currentImageIndex = index;
      this.lightboxActive = true;
      document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
    },
    closeLightbox() {
      this.lightboxActive = false;
      document.body.style.overflow = ''; // Restore scrolling
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.UgandaImg.length) % this.UgandaImg.length;
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.UgandaImg.length;
    },
    handleKeyDown(e) {
      if (!this.lightboxActive) return;
      
      switch(e.key) {
        case 'Escape':
          this.closeLightbox();
          break;
        case 'ArrowLeft':
          this.prevImage();
          break;
        case 'ArrowRight':
          this.nextImage();
          break;
      }
    },
    stopPropagation(e) {
      e.stopPropagation();
    }
  },
}
</script>

<template>
  <section class="marocco">
    <div class="maroccoView container">
      <h1 class="text-center">{{ language === 'it' ? 'Uganda' : 'Uganda' }}</h1>
      <p>
        {{ language === 'it' ? 'Nel 2024 ho trascorso sei mesi nella regione del West Nile in Uganda come volontario, insegnando in una scuola. Durante questo periodo, ho anche documentato la vita nei villaggi e l\'impatto del nostro lavoro di volontariato attraverso la fotografia, catturando momenti di interventi medici e di vita quotidiana della comunità. È stata un\'esperienza significativa che mi ha permesso di imparare dalle comunità locali e di condividere le loro realtà quotidiane attraverso il mio obiettivo.' : 'In 2024, I spent six months in the West Nile region of Uganda as a volunteer, teaching skills development. During this time, I also documented life in the villages and the impact of our volunteer work through photography, capturing moments from medical outreaches and daily community life. It was a meaningful experience that allowed me to learn from the local communities while sharing their daily realities through my lens.' }}
      </p>
    </div>
    
    <div class="gallery-container">
      <div class="row g-4">
        <div v-for="(image, index) in UgandaImg" 
            :key="index" 
            class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="gallery-item" @click="openLightbox(index)">
            <img :src="image.src" :alt="image.alt">
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="lightboxActive" class="lightbox" @click="closeLightbox">
      <div class="lightbox-content" @click="stopPropagation">
        <button class="close-btn pt-5" @click="closeLightbox">&times;</button>
        <button class="nav-btn prev-btn" @click="prevImage">&lsaquo;</button>
        <div class="lightbox-image-container">
          <img :src="currentImage.src" :alt="currentImage.alt" class="lightbox-image">
        </div>
        <button class="nav-btn next-btn" @click="nextImage">&rsaquo;</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.marocco {
  background-color: #f9f9f9;
}
.maroccoView {
  padding-top: 120px;
  max-width: 1600px;
  margin: 0 auto;

  h1 {
    font-size: 4rem;
    font-weight: 300;
    letter-spacing: 4px;
    margin-bottom: 2rem;
    color: #662e00;
    text-transform: uppercase;
    position: relative;
    opacity: 0;
    animation: fadeUp 1s ease-out forwards;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: linear-gradient(to right, #a55513b9, #662e00);
    }
  }

  p {
    max-width: 800px;
    margin: 0 auto 4rem;
    text-align: justify;
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
    font-weight: 300;
    opacity: 0;
    animation: fadeUp 1s ease-out 0.3s forwards;
    
    &::first-letter {
      font-size: 2rem;
      font-weight: 400;
      color: #662e00;
    }
  }
}

// Gallery grid styles
.gallery-container {
  padding: 0 2%;
  opacity: 0;
  animation: fadeIn 1.5s ease-out 0.6s forwards;

  .gallery-item {
    margin-bottom: 30px;
    overflow: hidden;
    border-radius: 6px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    position: relative;
    transform: translateY(40px);
    opacity: 0;
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1),
                opacity 0.8s ease,
                box-shadow 0.5s ease;
    cursor: pointer;
    
    // Staggered animation for gallery items
    @for $i from 0 through 12 {
      &:nth-child(#{$i}) {
        animation: slideUp 0.8s cubic-bezier(0.19, 1, 0.22, 1) #{$i * 0.1}s forwards;
      }
    }
    
    &:hover {
      box-shadow: 0 20px 40px rgba(198, 117, 44, 0.2);
      
      img {
        transform: scale(1.1);
      }
      
      .image-overlay {
        opacity: 1;
      }
    }
    
    img {
      height: 380px;
      width: 100%;
      object-fit: cover;
      transition: transform 1.2s cubic-bezier(0.19, 1, 0.22, 1);
    }
    
    .image-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 20px;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
      color: white;
      opacity: 0;
      transition: opacity 0.5s ease;
    
      .image-title {
        margin: 0;
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
    }
  }
}

// Lightbox styles
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;
  padding-top: 30px;
  
  .lightbox-content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
  }
  
  .lightbox-image-container {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    animation: zoomIn 0.4s ease-out;
  }
  
  .lightbox-image {
    max-width: 100%;
    max-height: 85vh;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    object-fit: contain;
  }
  
  .image-caption {
    color: white;
    text-align: center;
    padding: 15px 0;
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
  
  .close-btn {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 40px;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s, transform 0.3s;
    z-index: 10;
    
    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }
  }
  
  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.3);
    color: white;
    border: none;
    width: 60px;
    height: 60px;
    font-size: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background 0.3s, transform 0.3s;
    z-index: 10;
    
    &:hover {
      background: rgba(198, 117, 44, 0.7);
      transform: translateY(-50%) scale(1.1);
    }
    
    &.prev-btn {
      left: 30px;
    }
    
    &.next-btn {
      right: 30px;
    }
  }
}

// Responsive adjustments
@media (max-width: 1200px) {
  .gallery-container .gallery-item img {
    height: 300px;
  }
}

@media (max-width: 992px) {
  .gallery-container .gallery-item {
    margin-bottom: 20px;
  
    img {
      height: 380px;
    }
  }

  .maroccoView h1 {
    font-size: 3rem;
  }
  
  .lightbox .nav-btn {
    width: 50px;
    height: 50px;
    font-size: 30px;
  }
}

@media (max-width: 768px) {
  .gallery-container .gallery-item {
    img {
      height: 220px;
    }
  }

  .maroccoView {
    padding-top: 100px;
    
    h1 {
      font-size: 2.5rem;
    }
    
    p {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }
  
  .lightbox {
    .nav-btn {
      width: 40px;
      height: 40px;
      font-size: 25px;
      
      &.prev-btn {
        left: 15px;
      }
      
      &.next-btn {
        right: 15px;
      }
    }
    
    .image-caption {
      font-size: 1rem;
    }
  }
}

@media (max-width: 576px) {
  .gallery-container .gallery-item {
    margin-bottom: 15px;
    
    img {
      height: 180px;
    }
  }
  
  .lightbox .close-btn {
    top: 10px;
    right: 15px;
    font-size: 30px;
  }
}

// Animations
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>