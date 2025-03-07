<script>
import { mapGetters }  from 'vuex';
export default {
    data() {
        return {
            
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
        
    }
}
</script>

<template>
    <section class="about d-flex align-items-center" id="about">
        <div class="container">
            <div class="row m-0 p-0 justify-content-between align-items-center">
                <div class="col-lg-4 col-12 mb-4 mb-md-0 image-container">
                    <img src="../../../public/img/fotoaboutme/MatteoPrincipalPhoto.JPG" alt="Matteo Basile al lavoro" class="feature-image">
                </div>
                <div class="col-lg-4 col-12">
                    <div class="section-title mt-2">
                        <h2 class="fw-bold"> {{ language === 'it' ? 'L\'artista dietro la lente.' : 'The artist behind the lens.' }} </h2>
                        <div class="title-underline"></div>
                    </div>
                    <div class="about-text" :lang="language">
                        <p>
                            {{ language === 'it' ? 'Sono un giovane fotografo italiano, animato da curiosità e passione. La fotografia è il mio modo di capire e di confrontarmi con il mondo, un\'esplorazione continua di dettagli, emozioni e storie non raccontate. Da acuto osservatore, sono attratto dalle sottili sfumature che spesso passano inosservate, catturando i momenti così come sono senza imporre una narrazione fissa. Il mio approccio è radicato nel decostruire la realtà, lasciando che le immagini parlino da sole e invitando gli spettatori a interpretarle a modo loro.' : 'I am a young photographer from Italy, driven by curiosity and passion. Photography is my way of understanding and engaging with the world—an ongoing exploration of details, emotions, and untold stories. As an acute observer, I am drawn to the subtle nuances that often go unnoticed, capturing moments as they are without imposing a fixed narrative. My approach is rooted in deconstructing reality, allowing images to speak for themselves and inviting viewers to interpret them in their own way.'  }}
                        </p>
                        <p>
                            {{ language === 'it' ? 'Per me la fotografia è un\'esperienza personale e condivisa. Cerco i riflessi di me stesso nel mondo che mi circonda, usando il mio obiettivo per tradurre emozioni e prospettive in narrazioni visive. Ogni soggetto che fotografo porta con sé la propria essenza e il mio obiettivo è preservare questa autenticità, favorendo una connessione più profonda tra l\'immagine e l\'osservatore. ' : 'For me, photography is both a personal and shared experience. I look for reflections of myself in the world around me, using my lens to translate emotions and perspectives into visual narratives. Every subject I photograph carries its own essence, and my goal is to preserve that authenticity, fostering a deeper connection between the image and the observer.' }}
                        </p>
                        <p>
                            {{ language === 'it' ? 'Credo nel potere della fotografia di creare introspezione e dialogo. Non cerco di imporre un significato, ma piuttosto di offrire uno spazio in cui le immagini possano risuonare in modo diverso con ogni persona, incoraggiando un impegno unico e personale con la storia che raccontano.' : 'I believe in the power of photography to create introspection and dialogue. I don’t seek to dictate meaning but rather to offer a space where images can resonate differently with each person, encouraging a unique and personal engagement with the story they tell.' }}
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 col-12 image-container">
                    <img src="../../../public/img/fotoaboutme/MatteoHalfBody.JPG" alt="Matteo Basile" class="profile-image">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.about {
    margin: 60px 0;
    overflow: hidden;
    height: 100%;
    min-height: 100vh;
    
    .container {
        max-width: 1600px;

        .row {
            .image-container {
                position: relative;
                overflow: hidden;
                
                img {
                    width: 100%;
                    object-fit: cover;
                    border-radius: 12px;
                    transition: transform 0.8s ease;
                    
                    &:hover {
                        transform: scale(1.03);
                    }
                }
                
                .profile-image {
                    height: 420px;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
                }
                
                .feature-image {
                    height: 500px;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
                }
            }
            
            .section-title {
                position: relative;
                margin-bottom: 28px;
                
                h2 {
                    font-size: 32px;
                    margin-bottom: 14px;
                    position: relative;
                    display: inline-block;
                }
                
                .title-underline {
                    width: 60px;
                    height: 3px;
                    background-color: #000;
                    margin-top: 6px;
                }

            }
            
            .about-text {
                p {
                    font-size: 16px;
                    line-height: 1.7;
                    margin-bottom: 16px;
                    text-align: justify;
                    color: #333;
                    hyphens: auto;
                    -webkit-hyphens: auto;
                    -ms-hyphens: auto;
                }
                
                p:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
}

@media (max-width: 991px) {
    .about {
        .container {
            .row {
                .image-container {
                    .profile-image, .feature-image {
                        height: 350px;
                    }
                }
                
                .section-title {
                    h2 {
                        font-size: 28px;
                    }
                }
            }
        }
    }
}

@media (max-width: 767px) {
    .about {
        margin: 40px 0;
        height: auto;
        padding: 40px 0;
        
        .container {
            .row {
                .image-container {
                    .profile-image, .feature-image {
                        height: auto;
                        aspect-ratio: 3/4;
                        max-height: 450px;
                        margin: 0 auto;
                        display: block;
                    }
                }
                
                .about-text {
                    p {
                        font-size: 15px;
                    }
                }
            }
        }
    }
}
</style>