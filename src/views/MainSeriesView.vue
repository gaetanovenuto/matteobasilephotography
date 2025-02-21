<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            seriesCoverImg: [
                {
                    src: '/img/uganda/UgandaKidBooks.jpg',
                    it: 'Uganda',
                    en: 'Uganda',
                    url: 'uganda'
                },
                {
                    src: '/img/fotomarocco/MaroccoTown.JPG',
                    it: 'Marocco',
                    en: 'Morocco',
                    url: 'marocco'
                },
                {
                    src: '/img/fotoselfportraits/PortraitCamera.jpeg',
                    it: 'Autoritratti',
                    en: 'Self-portraits',
                    url: 'self-portraits'
                },
            ]
        }
    },
    computed: {
        ...mapGetters(['currentLanguage']),
        language() {
            return this.currentLanguage;
        }
    }
}
</script>

<template>
    <div class="seriesCoverImg row m-0 pt-5 d-flex justify-content-evenly flex-wrap">
        <div v-for="(image, index) in seriesCoverImg" 
        :key="index" class="col-12 col-md-6 mt-5 px-2">
            <div class="card-container">
                <img  
                     :src="image.src" 
                     :alt="image.alt" 
                     class="img-fluid projectCover-img"
                     >
                <h2 class="text-white" :class="!image.url ? 'no-button' : ''">
                    {{ language === 'it' ? image.it : image.en }}
                </h2>
                <button v-if="image.url" class="project-button">
                    <router-link  :to="/series/ + image.url" class="text-white text-decoration-none">
                        {{ language === 'it' ? 'Vedi Progetto' : 'See Project' }}
                    </router-link>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.seriesCoverImg {
    .card-container {
        position: relative;
        overflow: hidden;
        box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);

            .projectCover-img {
                transform: scale(1.1);
            }

            .project-button {
                background-color: transparent;
            }
        }
    }

    .projectCover-img {
        width: 100%;
        height: auto;
        display: block;
        transition: transform 0.3s ease;

    }

    h2 {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        text-shadow: 0px 8px 8px rgba(0, 0, 0, 0.5);
    }

    .no-button {
        top: 50%;
    }

    .project-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px 20px;
        background-color: transparent;
        border: 2px solid white;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease;

        &:hover {
            background-color: rgba(0, 86, 179, 0.9);
            transform: translate(-50%, -50%) scale(1.05);
        }

        a {
            color: inherit;
            text-decoration: none;
        }
    }
}

/* Animazione di ingresso per la card */
@keyframes slideInLeft {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.card-container {
    animation: slideInLeft 0.8s ease-out;
}
</style>