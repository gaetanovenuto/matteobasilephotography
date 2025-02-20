<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            alivaraText: [
                {
                    it: 'Alivara, ossia l’albero di Ulivo in siciliano, racchiude l’essenza di Franco. Come l’ulivo, simbolo di fede, resilienza e speranza, la sua vita è un intreccio di radici profonde e forza interiore. Nel silenzio della vecchiaia, le sfide della vita sembrano spesso insormontabili: la malattia, la solitudine e il peso del tempo che incombe. Eppure, nessun cammino viene affrontato davvero da soli. Franco è un uomo anziano che ha attraversato il dolore, la malattia e il peso del tempo con una resilienza incrollabile, sorretta dalla sua fede profonda in Cristo. Rimasto vedovo nel 1988, Franco ha affrontato la perdita della moglie con forza e gratitudine, mantenendo uno spirito positivo e un legame indissolubile con la sua fede. Negli ultimi anni, le difficoltà legate all’età avanzata e alla salute precaria hanno trasformato ogni giornata in una sfida. Tuttavia, la presenza amorevole di sua figlia Maria, che dedica le sue giornate interamente a prendersi cura di lui, è una testimonianza viva di amore e sacrificio. Il loro rapporto intreccia passato e presente, mostrando come l\'affetto familiare possa colmare il vuoto lasciato dalla solitudine. I caregiver donano tempo, amore e forza senza chiedere nulla in cambio, ma il loro valore rimane spesso invisibile, sottovalutato, eppure indispensabile per la società. Il progetto esplora temi universali come la vulnerabilità dell’anzianità, il peso del tempo che scorre, la potenza dell’amore familiare e la resilienza dello spirito umano quando radicato in una fede profonda. Un viaggio visivo che invita a riflettere sull’importanza di chi resta accanto nei momenti più difficili, sulla bellezza della fede che dà forza, sulla resilienza che trova radici nell’amore e sugli anziani, spesso dimenticati, privando la società di un patrimonio umano e culturale che meriterebbe rispetto e ascolto.',
                    en: 'Alivara, the olive tree in Sicilian, encapsulates Franco\'s essence. Like the olive tree, a symbol of faith, resilience and hope, his life is an interweaving of deep roots and inner strength. In the silence of old age, life\'s challenges often seem insurmountable: illness, loneliness and the weight of time looming. And yet, no path is really tackled alone. Franco is an old man who has gone through pain, illness and the weight of time with an unshakeable resilience, supported by his deep faith in Christ. Widowed in 1988, Franco faced the loss of his wife with strength and gratitude, maintaining a positive spirit and an unbreakable bond with his faith. In recent years, the difficulties of old age and poor health have turned every day into a challenge. However, the loving presence of his daughter Maria, who dedicates her days entirely to caring for him, is a living testimony of love and sacrifice. Their relationship weaves past and present, showing how family affection can fill the void left by loneliness. Caregivers give time, love and strength without asking anything in return, but their value often remains invisible, underestimated, yet indispensable to society. The project explores universal themes such as the vulnerability of old age, the weight of time passing, the power of family love and the resilience of the human spirit when rooted in deep faith. A visual journey that invites us to reflect on the importance of those who stay by our side in the most difficult moments, on the beauty of faith that gives strength, on the resilience that is rooted in love, and on the elderly, who are often forgotten, depriving society of a human and cultural heritage that deserves respect and attention.'
                }
            ],
            alivaraImgs: [
                '/img/fotoalivara/Alivara1.jpg',
                '/img/fotoalivara/Alivara2.jpg',
                '/img/fotoalivara/Alivara3.jpg',
                '/img/fotoalivara/Alivara4.jpg',
                '/img/fotoalivara/Alivara5.jpg',
                '/img/fotoalivara/Alivara6.jpg',
                '/img/fotoalivara/Alivara7.jpg',
                '/img/fotoalivara/Alivara8.jpg',
                '/img/fotoalivara/Alivara9.jpg',
                '/img/fotoalivara/Alivara10.jpg',
                '/img/fotoalivara/Alivara11.jpg',
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
    <div class="container">
        <h1 class="mt-2 text-center">
            Alivara
        </h1>
        <p v-for="(alivara, index) in alivaraText" :key="index" class="alivara-text">
            {{ language === 'it' ? alivara.it : alivara.en }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        padding-top: 80px;
        max-width: 1000px;

        .alivara-text {
            text-align: justify;
        }
    }
</style>