<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            
        };
    },
    methods: {
    },
    computed: {
        ...mapGetters(['currentLanguage']),
        language() {
            return this.currentLanguage;
        }
    }
};
</script>

<template>
    <footer>
        <div class="container text-center mb-0 p-0">
            <p class="mb-0">
                © 2025 Matteo Basile Photography | {{ language === 'it' ? 'Tutti i diritti riservati' : 'All Rights Reserved' }}
            </p>
            <p>
                {{ language === 'it' ? 'Creato da' : 'Created by' }} <a href="https://www.gvenutodevelopment.com" class="text-decoration-none text-black text-decoration-underline">gvenutodevelopment</a>.
            </p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: #f9f9f9;
    padding: 20px 0;
}
</style>