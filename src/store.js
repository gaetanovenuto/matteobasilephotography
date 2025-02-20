import { createStore } from 'vuex';

// Crea lo store Vuex
export default createStore({
  state: {
    language: 'it' // Lingua predefinita
  },
  mutations: {
    // Mutazione per aggiornare la lingua
    setLanguage(state, language) {
      state.language = language;
    }
  },
  actions: {
    // Azione per cambiare la lingua
    changeLanguage({ commit }, language) {
        const newLanguage = this.state.language === 'it' ? 'en' : 'it';
        commit('setLanguage', newLanguage);
    }
  },
  getters: {
    // Getter per ottenere la lingua corrente
    currentLanguage: (state) => state.language
  }
});