<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            currentImageIndex: 0, // Indice dell'immagine corrente
            intervalId: null, // ID dell'intervallo per il carosello
            alivaraText: [
                {
                    it: 'Alivara, ossia l\'albero di Ulivo in siciliano, racchiude l\'essenza di Franco. Come l\'ulivo, simbolo di fede, resilienza e speranza, la sua vita è un intreccio di radici profonde e forza interiore. Nel silenzio della vecchiaia, le sfide della vita sembrano spesso insormontabili: la malattia, la solitudine e il peso del tempo che incombe. Eppure, nessun cammino viene affrontato davvero da soli. Franco è un uomo anziano che ha attraversato il dolore, la malattia e il peso del tempo con una resilienza incrollabile, sorretta dalla sua fede profonda in Cristo. Rimasto vedovo nel 1988, Franco ha affrontato la perdita della moglie con forza e gratitudine, mantenendo uno spirito positivo e un legame indissolubile con la sua fede. Negli ultimi anni, le difficoltà legate all\'età avanzata e alla salute precaria hanno trasformato ogni giornata in una sfida. Tuttavia, la presenza amorevole di sua figlia Maria, che dedica le sue giornate interamente a prendersi cura di lui, è una testimonianza viva di amore e sacrificio. Il loro rapporto intreccia passato e presente, mostrando come l\'affetto familiare possa colmare il vuoto lasciato dalla solitudine. I caregiver donano tempo, amore e forza senza chiedere nulla in cambio, ma il loro valore rimane spesso invisibile, sottovalutato, eppure indispensabile per la società. Il progetto esplora temi universali come la vulnerabilità dell\'anzianità, il peso del tempo che scorre, la potenza dell\'amore familiare e la resilienza dello spirito umano quando radicato in una fede profonda. Un viaggio visivo che invita a riflettere sull\'importanza di chi resta accanto nei momenti più difficili, sulla bellezza della fede che dà forza, sulla resilienza che trova radici nell\'amore e sugli anziani, spesso dimenticati, privando la società di un patrimonio umano e culturale che meriterebbe rispetto e ascolto.',
                    en: 'Alivara, the olive tree in Sicilian, encapsulates Franco\'s essence. Like the olive tree, a symbol of faith, resilience and hope, his life is an interweaving of deep roots and inner strength. In the silence of old age, life\'s challenges often seem insurmountable: illness, loneliness and the weight of time looming. And yet, no path is really tackled alone. Franco is an old man who has gone through pain, illness and the weight of time with an unshakeable resilience, supported by his deep faith in Christ. Widowed in 1988, Franco faced the loss of his wife with strength and gratitude, maintaining a positive spirit and an unbreakable bond with his faith. In recent years, the difficulties of old age and poor health have turned every day into a challenge. However, the loving presence of his daughter Maria, who dedicates her days entirely to caring for him, is a living testimony of love and sacrifice. Their relationship weaves past and present, showing how family affection can fill the void left by loneliness. Caregivers give time, love and strength without asking anything in return, but their value often remains invisible, underestimated, yet indispensable to society. The project explores universal themes such as the vulnerability of old age, the weight of time passing, the power of family love and the resilience of the human spirit when rooted in deep faith. A visual journey that invites us to reflect on the importance of those who stay by our side in the most difficult moments, on the beauty of faith that gives strength, on the resilience that is rooted in love, and on the elderly, who are often forgotten, depriving society of a human and cultural heritage that deserves respect and attention.'
                }
            ],
            alivaraImgs: [
                {
                    src: '/img/fotoalivara/alivara1.jpg',
                    it: 'La camera di letto di Franco',
                    en: 'Franco\'s bedroom'
                },
                {
                    src: '/img/fotoalivara/alivara2.jpg',
                    it: 'Tavolo da cucina',
                    en: 'Kitchen table'
                },
                {
                    src: '/img/fotoalivara/alivara3.jpg',
                    it: 'La preghiera mattutina di Franco e Maria',
                    en: 'Franco and Maria\'s morning prayer'
                },
                {
                    src: '/img/fotoalivara/alivara4.jpg',
                    it: 'Maria controlla la pressione sanguigna di Franco al mattino presto',
                    en: 'Maria checks Franco\'s blood pressure early in the morning'
                },
                {
                    src: '/img/fotoalivara/alivara5.jpg',
                    it: 'Maria controlla la pressione arteriosa di Franco dopo un improvviso calo',
                    en: 'Maria checks Franco\'s blood pressure after a sudden drop'
                },
                {
                    src: '/img/fotoalivara/alivara6.jpg',
                    it: 'Franco sistema il letto',
                    en: 'Franco making his bed'
                },
                {
                    src: '/img/fotoalivara/alivara7.jpg',
                    it: 'Franco cammina in corridoio',
                    en: 'Franco walks down the hallway'
                },
                {
                    src: '/img/fotoalivara/alivara8.jpg',
                    it: 'Candeline di compleanno',
                    en: 'Birthday candles'
                },
                {
                    src: '/img/fotoalivara/alivara9.jpg',
                    it: 'Ricordi di un passato lontano',
                    en: 'Memories of a distant past'
                },
                {
                    src: '/img/fotoalivara/alivara10.jpg',
                    it: 'Franco che guarda una sua foto con la moglie',
                    en: 'Franco looking at a photo of him and his wife'
                },
                {
                    src: '/img/fotoalivara/alivara11.jpg',
                    it: 'Franco all\'ombra degli alberi',
                    en: 'Franco in the shade of the trees'
                },
            ]
        }
    },
    components: {
    },
    computed: {
        // Ottiene la lingua corrente dallo store Vuex
        ...mapGetters(['currentLanguage']),
        language() {
            return this.currentLanguage;
        }
    },
    mounted() {
        this.startCarousel(); // Avvia il carosello all'avvio del componente
        window.addEventListener('blur', this.stopCarousel); // Mette in pausa il carosello quando la finestra perde il focus
        window.addEventListener('focus', this.startCarousel); // Riavvia il carosello quando la finestra riacquista il focus
    },
    beforeDestroy() {
        this.stopCarousel(); // Ferma il carosello prima di distruggere il componente
        window.removeEventListener('blur', this.stopCarousel); // Rimuove l'ascoltatore per l'evento blur
        window.removeEventListener('focus', this.startCarousel); // Rimuove l'ascoltatore per l'evento focus
    },
    methods: {
        // Funzione per avviare il carosello e cambiare immagine ogni 4 secondi
        startCarousel() {
            this.stopCarousel();
            this.intervalId = setInterval(this.nextImage, 4000);
        },
        // Funzione per fermare il carosello
        stopCarousel() {
            if (this.intervalId) {
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
        },
        // Funzione per andare all'immagine successiva e far ripartire il timer del carosello al cambio
        nextImage() {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.alivaraImgs.length;
            this.startCarousel();
        },
        // Funzione per andare all'immagine precedente e far ripartire il timer del carosello al cambio
        prevImage() {
            this.currentImageIndex = (this.currentImageIndex - 1 + this.alivaraImgs.length) % this.alivaraImgs.length;
            this.startCarousel();
        },
        // Funzione per cambiare l'immagine corrente e far ripartire il timer del carosello al cambio
        setImage(index) {
            this.currentImageIndex = index;
            this.startCarousel();
        }
    },
}
</script>

<template>
    <div class="alivara-container pb-2">
        <div class="row mt-4">
            <!-- Carosello -->
            <div class="col-12 col-md-9 carousel-container">
                <div class="carousel">
                    <transition-group name="fade" tag="div" class="images-container">
                        <div v-for="(img, index) in alivaraImgs" 
                            :key="img.name" 
                            v-show="index === currentImageIndex"
                            class="carousel-image">
                            <img :src="img.src" :alt="img.name" class="img-fluid" @mouseover="stopCarousel" @mouseleave="startCarousel">
                            <div class="image-overlay">
                                <p class="image-caption">{{ language === 'it' ? img.it : img.en }}</p>
                            </div>
                        </div>
                    </transition-group>
                    
                    <div class="carousel-controls">
                        <button @click="prevImage" class="carousel-control prev">
                            <span>❮</span>
                        </button>
                        <button @click="nextImage" class="carousel-control next">
                            <span>❯</span>
                        </button>
                    </div>
                    
                    <div class="carousel-indicators mx-auto">
                        <span v-for="(_, index) in alivaraImgs" 
                              :key="index" 
                              :class="{ active: index === currentImageIndex }"
                              @click="setImage(index)">
                        </span>
                    </div>
                </div>
            </div>
            
            <!-- Testo scrollabile -->
            <div class="col-12 col-md-3 text-container">
                <div class="scrollable-text">
                    <h1 class="mb-4 text-center alivara-title">
                        Alivara
                    </h1>
                    <p v-for="(alivara, index) in alivaraText" :key="index" class="alivara-text">
                        {{ language === 'it' ? alivara.it : alivara.en }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .alivara-container {
        padding-top: 80px;
        max-width: 1900px;
        margin: 0 auto;
        overflow: hidden;
        
        .alivara-title {
            font-size: 2.5rem;
            font-weight: 300;
            opacity: 0;
            animation: fadeIn 1.5s ease-in-out forwards;
        }
        
        .carousel-container {
            position: relative;
            height: calc(100vh - 210px);
            min-height: 500px;
            opacity: 0;
            animation: slideInLeft 1s ease-out 0.5s forwards;
            
            .carousel {
                position: relative;
                height: 100%;
                overflow: hidden;
                border-radius: 8px;
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
                
                .images-container {
                    height: 100%;
                    width: 100%;
                    position: relative;
                }
                
                .carousel-image {
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    
                    img {
                        height: 100%;
                        width: 100%;
                        object-fit: contain;
                        transition: transform 6s ease;
                        
                        &:hover {
                            transform: scale(1.05);
                        }
                    }
                    
                    .image-overlay {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
                        padding: 20px;
                        color: white;
                        opacity: 0;
                        transform: translateY(20px);
                        transition: all 0.4s ease;
                    }
                    
                    &:hover .image-overlay {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .carousel-controls {
                    position: absolute;
                    top: 50%;
                    width: 100%;
                    transform: translateY(-50%);
                    display: flex;
                    justify-content: space-between;
                    
                    .carousel-control {
                        background: rgba(255, 255, 255, 0.548);
                        border: none;
                        border-radius: 50%;
                        color: rgb(0, 0, 0);
                        width: 40px;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        margin: 0 10px;
                        backdrop-filter: blur(3px);
                        transition: all 0.3s ease;
                        
                        &:hover {
                            background: rgba(177, 177, 177, 0.664);
                            transform: scale(1.1);
                        }
                        
                        span {
                            font-size: 1.5rem;
                        }
                    }
                }
                
                .carousel-indicators {
                    position: absolute;
                    bottom: 20px;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                    
                    span {
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        background-color: rgba(255, 255, 255, 0.5);
                        cursor: pointer;
                        transition: all 0.3s ease;
                        
                        &.active {
                            background-color: white;
                            transform: scale(1.2);
                        }
                        
                        &:hover {
                            background-color: rgba(255, 255, 255, 0.8);
                        }
                    }
                }
            }
        }
        
        .text-container {
            height: calc(100vh - 210px);
            min-height: 500px;
            opacity: 0;
            animation: slideInRight 1s ease-out 1s forwards;
            
            .scrollable-text {
                height: 100%;
                overflow-y: auto;
                padding: 20px;
                border-left: 1px solid #e0e0e0;
                transition: all 0.3s ease;
                
                &::-webkit-scrollbar {
                    width: 6px;
                }
                
                &::-webkit-scrollbar-track {
                    background: #f5f5f5;
                    border-radius: 10px;
                }
                
                &::-webkit-scrollbar-thumb {
                    background: #ccc;
                    border-radius: 10px;
                    
                    &:hover {
                        background: #aaa;
                    }
                }
                
                .alivara-text {
                    text-align: justify;
                    line-height: 1.7;
                    font-size: 0.95rem;
                    margin-bottom: 20px;
                    transition: all 0.3s ease;
                    
                    &:first-letter {
                        font-size: 1.5rem;
                        font-weight: 500;
                    }
                    
                    &:hover {
                        color: #333;
                    }
                }
            }
        }
    }
    
    /* Animazioni */
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideInLeft {
        from { 
            opacity: 0;
            transform: translateX(-50px);
        }
        to { 
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInRight {
        from { 
            opacity: 0;
            transform: translateX(50px);
        }
        to { 
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    /* Transizione tra le immagini */
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
        transform: scale(0.95);
    }
    
    /* Responsive */
    @media (max-width: 768px) {
        .alivara-container {
            .carousel-container, .text-container {
                height: auto;
                min-height: auto;
            }
            
            .carousel-container {
                margin-bottom: 30px;
                
                .carousel {
                    height: 400px;
                }
            }
            
            .text-container {
                .scrollable-text {
                    max-height: 400px;
                    border-left: none;
                    border-top: 1px solid #e0e0e0;
                    padding-top: 20px;
                }
            }
        }
    }
</style>