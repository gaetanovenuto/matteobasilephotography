<script>
import { mapGetters

 } from 'vuex';
export default {
    data() {
        return {
            form: {
                nome: '',
                cognome: '',
                email: '',
                messaggio: ''
            },
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
        resetForm() {
            this.form = {
                nome: '',
                cognome: '',
                email: '',
                messaggio: ''
            };
        }
    }
}
</script>

<template>
    <section class="contact-form">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-10">
                    <div class="form-header text-center mb-4">
                        <h2 class="form-title">{{ language === 'it' ? 'Contattami' : 'Contact me' }}</h2>
                        <div class="title-divider mx-auto"></div>
                        <p class="form-subtitle">{{ language === 'it' ? 'Hai una domanda o vuoi lavorare insieme? Scrivimi un messaggio.' : 'Do you have a question or do you want a collaboration?' }}</p>
                    </div>
                    
                    <div v-if="successMessage" class="alert alert-success fade-in">
                        {{ successMessage }}
                    </div>
                    
                    <form class="contact-form-inner" action="https://formspree.io/f/mzzdoeqb" method="POST">
                        
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <div class="form-group">
                                    <label for="nome">{{ language === 'it' ? 'Nome' : 'First Name' }}</label>
                                    <input 
                                        type="text" 
                                        id="nome" 
                                        name="nome"
                                        v-model="form.nome" 
                                        class="form-control" 
                                        :placeholder="language === 'it' ? 'Inserisci il tuo nome' : 'Insert your first name'" 
                                        required
                                    >
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="form-group">
                                    <label for="cognome">{{ language === 'it' ? 'Cognome' : 'Last Name' }}</label>
                                    <input 
                                        type="text" 
                                        id="cognome"
                                        name="cognome" 
                                        v-model="form.cognome" 
                                        class="form-control" 
                                        :placeholder="language === 'it' ? 'Inserisci il tuo cognome' : 'Insert your last name'" 
                                        required
                                    >
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group mb-3">
                            <label for="email">Email</label>
                            <input 
                                type="email" 
                                id="email"
                                name="email" 
                                v-model="form.email" 
                                class="form-control" 
                                :placeholder="language === 'it' ? 'Inserisci la tua mail' : 'Insert your email'" 
                                required
                            >
                        </div>
                        
                        <div class="form-group mb-4">
                            <label for="messaggio">{{ language === 'it' ? 'Messaggio' : 'Message' }}</label>
                            <textarea 
                                id="messaggio"
                                name="messaggio" 
                                v-model="form.messaggio" 
                                class="form-control" 
                                rows="6" 
                                :placeholder="language === 'it' ? 'Inserisci il tuo messaggio' : 'Insert your message'" 
                                required
                            ></textarea>
                        </div>
                        
                        <div class="form-submit text-center">
                            <button 
                                type="submit" 
                                class="submit-button" 
                            >
                                <span>{{ language === 'it' ? 'Invia messaggio' : 'Send message' }}</span>
                            </button>
                        </div>
                        
                        <div class="form-disclaimer mt-3 text-center">
                            <small>
                                {{ language === 'it' ? 'I tuoi dati saranno trattati in conformità con la normativa sulla privacy.' : 'Your data will be processed in accordance with the privacy policy.' }}
                            </small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.contact-form {
    padding: 60px 0;
    background-color: #f9f9f9;
    
    .form-header {
        .form-title {
            font-size: 32px;
            font-weight: 600;
            margin-bottom: 12px;
        }
        
        .title-divider {
            height: 3px;
            width: 60px;
            background-color: #000;
            margin-bottom: 16px;
        }
        
        .form-subtitle {
            color: #555;
            font-size: 16px;
        }
    }
    
    .contact-form-inner {
        background-color: #fff;
        border-radius: 12px;
        padding: 32px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        
        .form-group {
            margin-bottom: 20px;
            
            label {
                font-weight: 500;
                margin-bottom: 8px;
                display: block;
                color: #333;
            }
            
            .form-control {
                height: auto;
                padding: 12px 16px;
                border: 1px solid #ddd;
                border-radius: 8px;
                font-size: 15px;
                transition: all 0.3s ease;
                
                &:focus {
                    border-color: #666;
                    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
                    outline: none;
                }
                
                &::placeholder {
                    color: #aaa;
                }
            }
            
            textarea.form-control {
                resize: vertical;
                min-height: 120px;
            }
        }
        
        .submit-button {
            background-color: #000;
            color: #fff;
            border: none;
            padding: 12px 32px;
            font-size: 16px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 500;
            
            &:hover {
                background-color: #333;
                transform: translateY(-2px);
            }
            
            &:disabled {
                background-color: #999;
                cursor: not-allowed;
                transform: none;
            }
        }
        
        .form-disclaimer {
            color: #777;
        }
    }
    
    .alert {
        padding: 16px;
        border-radius: 8px;
        margin-bottom: 24px;
        
        &.alert-success {
            background-color: rgba(25, 135, 84, 0.1);
            border: 1px solid rgba(25, 135, 84, 0.2);
            color: #198754;
        }
        
        &.alert-danger {
            background-color: rgba(220, 53, 69, 0.1);
            border: 1px solid rgba(220, 53, 69, 0.2);
            color: #dc3545;
        }
    }
    
    .fade-in {
        animation: fadeIn 0.5s;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
}

@media (max-width: 767px) {
    .contact-form {
        padding: 40px 0;
        
        .form-header {
            .form-title {
                font-size: 28px;
            }
        }
        
        .contact-form-inner {
            padding: 24px;
            
            .submit-button {
                width: 100%;
                padding: 12px 20px;
            }
        }
    }
}
</style>