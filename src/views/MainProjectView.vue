<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            projectCoverImg: [
                {
                    src: '/img/fotoalivara/alivara3.jpg',
                    alt: 'Alivara',
                    url: 'alivara'
                },
                {
                    src: '/img/WorkInProgress.jpg',
                    alt: 'Work in Progress',
                }
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
    <div class="projectCoverImg row m-0 pt-5 d-flex justify-content-between flex-wrap">
        <div v-for="(image, index) in projectCoverImg" 
             :key="index" 
             class="col-12 col-md-6 mt-5 px-2">
            <div class="card-container">
                <img 
                    :src="image.src" 
                    :alt="image.alt" 
                    class="img-fluid projectCover-img"
                >
                <h2 class="text-white" :class="{ 'no-button': !image.url, 'work-in-progress': !image.url }">
                    {{ image.alt }}
                </h2>
                <button v-if="image.url" class="project-button">
                    <router-link :to="/projects/ + image.url" class="text-white text-decoration-none">
                        {{ language === 'it' ? 'Vedi Progetto' : 'See Project' }}
                    </router-link>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.projectCoverImg {
    height: calc(100vh - 100px);

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
        font-size: 2rem;
        word-wrap: break-word;
        text-align: center;
        width: 90%; 
        
        @media screen and (max-width: 576px) {
            font-size: 1.5rem; 
            width: 80%; 
        }
    }

    .no-button {
        top: 50%;
    }

    .work-in-progress {
        @media screen and (max-width: 576px) {
            top: 50%; 
            transform: translate(-50%, -50%);
            padding: 0 15px;
        }
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

        @media screen and (max-width: 576px) {
            padding: 3px 10px;
        }

        &:hover {
            background-color: rgba(0, 86, 179, 0.9);
            transform: translate(-50%, -50%) scale(1.05);
        }

        a {
            color: inherit;
            text-decoration: none;

            @media screen and (max-width: 576px) {
                font-size: 1rem;
            }
        }
    }
}

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