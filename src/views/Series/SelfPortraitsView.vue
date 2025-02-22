<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      SelfPortraitsImg: [
        {
          src: '/img/fotoselfportraits/PortraitUnfocussed2.jpeg',
          alt: 'Matteo Basile'
        },
        {
          src: '/img/fotoselfportraits/PortraitUnfocussed4.JPG',
          alt: 'Matteo Basile'
        },
        {
          src: '/img/fotoselfportraits/PortraitUnfocussed1.jpeg',
          alt: 'Matteo Basile'
        },
        {
          src: '/img/fotoselfportraits/PortraitUnfocussed3.JPG',
          alt: 'Matteo Basile'
        },
        {
          src: '/img/fotoselfportraits/PortraitEye.JPG',
          alt: 'Matteo Basile'
        },
        {
          src: '/img/fotoselfportraits/PortraitCamera.jpeg',
          alt: 'Matteo Basile'
        },
        {
          src: '/img/fotoselfportraits/PortraitHand1.jpeg',
          alt: 'Matteo Basile'
        },
        {
          src: '/img/fotoselfportraits/PortraitHand2.JPG',
          alt: 'Matteo Basile'
        },
        {
          src: '/img/fotoselfportraits/PortraitBack.jpeg',
          alt: 'Matteo Basile'
        },
        {
          src: '/img/fotoselfportraits/PortraitFront.JPG',
          alt: 'Matteo Basile'
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
      return this.SelfPortraitsImg[this.currentImageIndex];
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
      this.currentImageIndex = (this.currentImageIndex - 1 + this.SelfPortraitsImg.length) % this.SelfPortraitsImg.length;
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.SelfPortraitsImg.length;
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
    <div class="selfPortraitsView container">
      <h1 class="text-center m-0">{{ language === 'it' ? 'Autoritratti' : 'Self-portraits' }}</h1>
      <p>
        {{ language === 'it' ? 'Nel 2023 ho puntato l\'obiettivo su me stesso, non solo per catturare un\'immagine, ma per esplorare le profondità dell\'identità, dell\'emozione e della trasformazione. Attraverso questa serie di autoritratti, ho cercato frammenti di chi ero, chi sono e chi sto diventando. Ogni fotogramma è un momento di introspezione, a volte crudo, a volte incerto, sempre onesto. Questa non è solo una raccolta di fotografie, ma un dialogo con me stesso, un viaggio tranquillo verso la scoperta di sé.' : 'In 2023, I turned the lens on myself, not just to capture an image, but to explore the depths of identity, emotion, and transformation. Through this series of self-portraits, I searched for fragments of who I was, who I am, and who I am becoming. Each frame is a moment of introspection—sometimes raw, sometimes uncertain, always honest. This is not just a collection of photographs, but a dialogue with myself, a quiet journey toward self-discovery.' }}
      </p>
    </div>
    
    <div class="gallery-container">
      <div class="row g-4">
        <div v-for="(image, index) in SelfPortraitsImg" 
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
.selfPortraitsView {
  padding-top: 120px;
  max-width: 1600px;
  margin: 0 auto;

  h1 {
    font-size: 40px;
    font-weight: 300;
    letter-spacing: 4px;
    margin-bottom: 2rem;
    color: #068993;
    text-transform: uppercase;
    position: relative;
    opacity: 0;
    animation: fadeUp 1s ease-out forwards;
    word-wrap: break-word;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: linear-gradient(to right, #5cd8e0ce, #068993);
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
      color: #068993;
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

  .selfPortraitsView h1 {
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

  .selfPortraitsView {
    padding-top: 100px;
    
    h1 {
      font-size: 2rem;
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