<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            isMenuOpen: false,
            activeItems: {
                portfolio: false,
                progetti: false,
                serie: false
            },
            language: 'it', // Imposta la lingua predefinita a italiano
            submenuTimers: {} // Oggetto per memorizzare i timer dei sottomenu
        };
    },
    methods: {
        ...mapActions(['changeLanguage']),
        toggleLanguage() {
            const currentLanguage = !this.language;
            this.changeLanguage(currentLanguage);
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            if (this.isMenuOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        },
        toggleDropdown(item) {
            this.activeItems[item] = !this.activeItems[item];
        },
        openSubmenu(item) {
            // Annulla il timer di chiusura se esiste
            if (this.submenuTimers[item]) {
                clearTimeout(this.submenuTimers[item]);
                delete this.submenuTimers[item];
            }
            // Apri il sottomenu
            this.activeItems[item] = true;
        },
        closeSubmenu(item) {
            // Imposta un timer per chiudere il sottomenu dopo 300ms
            this.submenuTimers[item] = setTimeout(() => {
                this.activeItems[item] = false;
                delete this.submenuTimers[item];
            }, 300); // Ritardo di 300ms
        }
    },
    computed: {
        ...mapGetters(['currentLanguage']),
        language() {
            return this.currentLanguage;
        }
    },
    beforeDestroy() {
        document.body.style.overflow = '';
        // Annulla tutti i timer quando il componente viene distrutto
        Object.values(this.submenuTimers).forEach(timer => clearTimeout(timer));
    }
};
</script>

<template>
    <header class="site-header d-flex justify-content-between">
        <div class="socials">
            <a href="https://www.instagram.com/matteobasile.photo/" class="social-link">
                <i class="fab fa-instagram fa-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/matteo-basile-17b8a7229/" class="social-link">
                <i class="fab fa-linkedin fa-xl"></i>
            </a>
            <a href="https://www.tiktok.com/@mattebasi?_t=ZN-8tWNJGk8hR0&_r=1" class="social-link">
                <i class="fa-brands fa-tiktok fa-xl"></i>
            </a>
            <!-- Bandierina per cambiare lingua -->
            <div class="language-switcher d-flex justify-content-between align-items-center">
                <img 
                    :src="language === 'it' ? '/img/icons/italy.png' : '/img/icons/united-kingdom.png'" 
                    alt="Cambia lingua" 
                    class="language-flag d-none mx-2" 
                    @click="toggleLanguage"
                    :title="language === 'it' ? 'Change language' : 'Cambia lingua'"
                />
                <span class="language-tooltip d-none d-lg-inline-block">
                    <i class="fa-solid fa-arrow-left"></i>
                    <p class="d-inline-block ms-1 my-0">{{ language === 'it' ? 'Change language' : 'Cambia lingua' }}</p>
                </span>
            </div>
            
        </div>

        <div class="desktop-nav">
            <nav class="main-nav">
                <ul class="main-menu">
                    <li class="menu-item">
                        <router-link to="/" class="menu-link">
                            {{ language === 'it' ? 'Home' : 'Home' }}
                        </router-link>
                    </li>
                    <li class="menu-item has-submenu" 
                        @mouseenter="openSubmenu('portfolio')" 
                        @mouseleave="closeSubmenu('portfolio')">
                        <a href="#" class="menu-link">
                            {{ language === 'it' ? 'Portfolio' : 'Portfolio' }}
                        </a>
                        <ul class="submenu" v-if="activeItems.portfolio">
                            <li class="submenu-item has-submenu"
                                @mouseenter="openSubmenu('progetti')"
                                @mouseleave="closeSubmenu('progetti')">
                                <router-link to="/projects" class="submenu-link">
                                    {{ language === 'it' ? 'Progetti' : 'Projects' }}
                                </router-link>
                                <ul class="submenu submenu-right" v-if="activeItems.progetti">
                                    <li class="submenu-item">
                                        <router-link to="/projects/alivara" class="submenu-link">
                                            {{ language === 'it' ? 'Alivara' : 'Alivara' }}
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="submenu-item has-submenu"
                                @mouseenter="openSubmenu('serie')"
                                @mouseleave="closeSubmenu('serie')">
                                <router-link to="/series" class="submenu-link">
                                    {{ language === 'it' ? 'Serie' : 'Series' }}
                                </router-link>
                                <ul class="submenu submenu-right" v-if="activeItems.serie">
                                    <li class="submenu-item">
                                        <router-link to="/series/marocco" class="submenu-link">
                                            {{ language === 'it' ? 'Marocco' : 'Morocco' }}
                                        </router-link>
                                    </li>
                                    <li class="submenu-item">
                                        <router-link to="/series/uganda" class="submenu-link">
                                            {{ language === 'it' ? 'Uganda' : 'Uganda' }}
                                        </router-link>
                                    </li>
                                    <li class="submenu-item">
                                        <router-link to="/series/self-portraits" class="submenu-link">
                                            {{ language === 'it' ? 'Autoritratti' : 'Self Portraits' }}
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item">
                        <a href="/#about" class="menu-link">
                            {{ language === 'it' ? 'Chi sono' : 'About' }}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="menu-toggle d-block" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div class="logo">
            <img src="/img/MatteoBasileLogoNoBG.png" alt="Matteo Basile" title="Matteo Basile Photography" />
        </div>

        <!-- Offcanvas Menu per Mobile -->
        <div class="offcanvas-menu" :class="{ 'is-open': isMenuOpen }">
            <div class="offcanvas-container">
                <nav class="mobile-nav">
                    <ul class="mobile-menu">
                        <li class="mobile-menu-item">
                            <router-link to="/" @click="toggleMenu" class="mobile-menu-link">
                                {{ language === 'it' ? 'Home' : 'Home' }}
                            </router-link>
                        </li>
                        <li class="mobile-menu-item">
                            <div class="mobile-menu-header" @click="toggleDropdown('portfolio')">
                                <span>
                                    {{ language === 'it' ? 'Portfolio' : 'Portfolio' }}
                                </span>
                                <i class="fas" :class="activeItems.portfolio ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                            </div>
                            <ul class="mobile-submenu" v-if="activeItems.portfolio">
                                <li class="mobile-submenu-item">
                                    <div class="mobile-menu-header" @click="toggleDropdown('progetti')">
                                        <span>
                                            {{ language === 'it' ? 'Progetti' : 'Projects' }}
                                        </span>
                                        <i class="fas" :class="activeItems.progetti ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                                    </div>
                                    <ul class="mobile-submenu" v-if="activeItems.progetti">
                                        <li class="mobile-submenu-item">
                                            <router-link to="/projects/alivara" @click="toggleMenu" class="mobile-submenu-link">
                                                {{ language === 'it' ? 'Alivara' : 'Alivara' }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="mobile-submenu-item">
                                    <div class="mobile-menu-header" @click="toggleDropdown('serie')">
                                        <span>
                                            {{ language === 'it' ? 'Serie' : 'Series' }}
                                        </span>
                                        <i class="fas" :class="activeItems.serie ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                                    </div>
                                    <ul class="mobile-submenu" v-if="activeItems.serie">
                                        <li class="mobile-submenu-item">
                                            <router-link to="/series/marocco" @click="toggleMenu" class="mobile-submenu-link">
                                                {{ language === 'it' ? 'Marocco' : 'Morocco' }}
                                            </router-link>
                                        </li>
                                        <li class="mobile-submenu-item">
                                            <router-link to="/series/uganda" @click="toggleMenu" class="mobile-submenu-link">
                                                {{ language === 'it' ? 'Uganda' : 'Uganda' }}
                                            </router-link>
                                        </li>
                                        <li class="mobile-submenu-item">
                                            <router-link to="/series/self-portraits" @click="toggleMenu" class="mobile-submenu-link">
                                                {{ language === 'it' ? 'Autoritratti' : 'Self Portraits' }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="mobile-menu-item">
                            <a href="/#about" @click="toggleMenu" class="mobile-menu-link">{{ language === 'it' ? 'About' : 'About' }}</a>
                        </li>
                    </ul>
                </nav>
                
                <div class="mobile-socials">
                    <a href="https://www.instagram.com/matteobasile.photo/" class="mobile-social-link">
                        <i class="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/matteo-basile-17b8a7229/" class="mobile-social-link">
                        <i class="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="https://www.tiktok.com/@mattebasi?_t=ZN-8tWNJGk8hR0&_r=1" class="mobile-social-link">
                        <i class="fa-brands fa-tiktok fa-2x"></i>
                    </a>
                    <div class="mobile-language-switcher d-flex justify-content-between align-items-center">
                        <img 
                            :src="language === 'it' ? '/img/icons/italy.png' : '/img/icons/united-kingdom.png'" 
                            alt="Cambia lingua" 
                            class="language-flag d-md-none mx-2" 
                            @click="toggleLanguage"
                            :title="language === 'it' ? 'Change language' : 'Cambia lingua'"
                        />
                        <span class="mobile-language-tooltip d-lg-none">
                            <i class="fa-solid fa-arrow-left"></i>
                            <p class="d-inline-block ms-1 my-0">{{ language === 'it' ? 'Change language' : 'Cambia lingua' }}</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>

.site-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    background-color: rgba(255, 255, 255, 0.829);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.233);
    position: fixed;
    z-index: 9999;
    width: 100vw;
    height: 80px;
    
    .desktop-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        margin-left: 32px;
    }
    
    .socials {
        display: flex;
        gap: 18px;
        margin-left: 32px;
        position: relative;

        .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #222;
            transition: all 0.3s ease;
            text-decoration: none;
            position: relative;

            @media screen and (max-width: 768px) {
                display: none;
            }
            
            &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: rgba(0, 0, 0, 0.05);
                transform: scale(0);
                transition: transform 0.3s ease;
            }
            
            &:hover {
                color: #000;
                transform: translateY(-2px);
                
                &::before {
                    transform: scale(1.5);
                }
            }
        }
        
        .language-switcher {
            position: absolute;
            right: 0; 
            top: 50%;
            left: 110%;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            gap: 8px;

        .language-tooltip {
            white-space: nowrap;
            opacity: 0.8;
            
            * {
                display: inline-block;
                animation: slideLeft 2s infinite linear;
            }
        }
    }
    }
    
    .main-nav {
        height: 100%;
        display: flex;
        align-items: center;
        
        
        .main-menu {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
            gap: 32px;
            
            .menu-item {
                position: relative;
                
                &.has-submenu {
                    position: relative;
                    
                    &::after {
                        content: "▾";
                        font-size: 12px;
                        margin-left: 6px;
                        position: absolute;
                        right: -16px;
                        top: 50%;
                        transform: translateY(-50%);
                        transition: transform 0.3s ease;
                    }
                    
                    &:hover::after {
                        transform: translateY(-50%) rotate(180deg);
                    }
                }
                
                .menu-link {
                    text-decoration: none;
                    color: #333;
                    font-size: 16px;
                    font-weight: 500;
                    padding: 8px 0;
                    position: relative;
                    transition: color 0.3s ease;
                    
                    &::before, &::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        height: 2px;
                        width: 0;
                        background-color: #333;
                        transition: width 0.3s ease;
                    }
                    
                    &::before {
                        left: 50%;
                    }
                    
                    &::after {
                        right: 50%;
                    }
                    
                    &:hover {
                        color: #000;
                        
                        &::before, &::after {
                            width: 50%;
                        }
                    }
                }
                
                .submenu {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    background: white;
                    list-style: none;
                    padding: 12px 0;
                    margin: 8px 0 0;
                    min-width: 200px;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
                    border-radius: 8px;
                    z-index: 100;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(10px);
                    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    transition-delay: 1s;
                    
                    &::before {
                        content: '';
                        position: absolute;
                        top: -8px;
                        left: 20px;
                        width: 16px;
                        height: 16px;
                        background: white;
                        transform: rotate(45deg);
                        box-shadow: -2px -2px 4px rgba(0, 0, 0, 0.05);
                    }
                    
                    &.submenu-right {
                        left: 100%;
                        top: 0;
                        margin: 0 0 0 8px;
                        
                        &::before {
                            top: 16px;
                            left: -8px;
                        }
                    }
                    
                    .submenu-item {
                        position: relative;
                        
                        &.has-submenu {
                            &::after {
                                content: "▸";
                                position: absolute;
                                right: 12px;
                                top: 50%;
                                transform: translateY(-50%);
                                font-size: 12px;
                                transition: transform 0.3s ease;
                            }
                            
                            &:hover::after {
                                transform: translateY(-50%) translateX(3px);
                            }
                        }
                        
                        .submenu-link {
                            display: block;
                            padding: 10px 16px;
                            color: #333;
                            text-decoration: none;
                            font-size: 14px;
                            transition: all 0.2s ease;
                            position: relative;
                            z-index: 1;
                            
                            &::before {
                                content: '';
                                position: absolute;
                                left: 0;
                                top: 0;
                                width: 3px;
                                height: 100%;
                                background-color: #333;
                                transform: scaleY(0);
                                transition: transform 0.2s ease;
                                z-index: -1;
                            }
                            
                            &:hover {
                                color: #000;
                                padding-left: 24px;
                                background-color: rgba(0, 0, 0, 0.03);
                                
                                &::before {
                                    transform: scaleY(1);
                                }
                            }
                        }
                    }
                }
                
                &:hover > .submenu {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                    transition-delay: 0s;
                }
                
                .submenu-item:hover > .submenu {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                    transition-delay: 0s;
                }
            }
        }
    }
    
    .logo {
        img {
            height: 48px;
            width: auto;
            transition: transform 0.3s ease;
            
            &:hover {
                transform: scale(1.05);
            }
        }
    }
    
    .menu-toggle {
        display: none;
        width: 30px;
        height: 24px;
        position: relative;
        cursor: pointer;
        transition: all 0.3s ease;

        
        span {
            display: block;
            position: absolute;
            height: 3px;
            width: 100%;
            background: #333;
            border-radius: 3px;
            opacity: 0;
            left: 0;
            transform: rotate(0deg);
            transition: all 0.3s ease;

            @media screen and (max-width: 768px) {
                z-index: 10000;
                opacity: 1;
            }
            
            &:nth-child(1) {
                top: 0px;
            }
            
            &:nth-child(2) {
                top: 10px;
            }
            
            &:nth-child(3) {
                top: 20px;
            }
        }
        
        &.is-active {
            span {
                &:nth-child(1) {
                    top: 10px;
                    transform: rotate(135deg);
                }
                
                &:nth-child(2) {
                    opacity: 0;
                    left: -60px;
                }
                
                &:nth-child(3) {
                    top: 10px;
                    transform: rotate(-135deg);
                }
            }
        }
    }
    
    .offcanvas-menu {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.98);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
        transform: translateX(100%);
        
        &.is-open {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
        }
        
        .offcanvas-container {
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
        }
        
        .mobile-nav {
            margin-bottom: 48px;
            
            .mobile-menu {
                list-style: none;
                padding: 0;
                margin: 0;
                
                .mobile-menu-item {
                    margin-bottom: 24px;
                    
                    .mobile-menu-link {
                        display: block;
                        font-size: 24px;
                        font-weight: 500;
                        color: #222;
                        text-decoration: none;
                        padding: 8px 0;
                        transition: all 0.3s ease;
                        
                        &:hover {
                            color: #000;
                            transform: translateX(8px);
                        }
                    }
                    
                    .mobile-menu-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-size: 24px;
                        font-weight: 500;
                        color: #222;
                        padding: 8px 0;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        
                        &:hover {
                            color: #000;
                        }
                        
                        i {
                            transition: transform 0.3s ease;
                        }
                    }
                }
            }
            
            .mobile-submenu {
                list-style: none;
                padding: 0 0 0 16px;
                margin: 8px 0 16px;
                border-left: 2px solid #eee;
                
                .mobile-submenu-item {
                    margin-bottom: 8px;
                    
                    .mobile-submenu-link {
                        display: block;
                        font-size: 18px;
                        color: #666;
                        text-decoration: none;
                        padding: 8px 0;
                        transition: all 0.3s ease;
                        
                        &:hover {
                            color: #000;
                            transform: translateX(8px);
                        }
                    }
                    
                    .mobile-menu-header {
                        font-size: 18px;
                        color: #666;
                    }
                }
            }
        }
        
        .mobile-socials {
            display: flex;
            justify-content: center;
            gap: 32px;
            
            .mobile-social-link {
                color: #222;
                transition: all 0.3s ease;
                
                &:hover {
                    color: #000;
                    transform: translateY(-4px) scale(1.1);
                }
            }

            .mobile-language-switcher {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 8px;
                opacity: .8;

                

                .mobile-language-tooltip {
                    animation: slideLeft 2s infinite linear;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    @media screen and (max-width: 576px) {
                        font-size: 10px;
                    }
                }
            }
        }
    }
}

.language-flag {
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-left: 10px;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }

    @media screen and (min-width: 770px) {
        display: inline-block !important;
    }
}

// Media query per dispositivi mobili
@media (max-width: 768px) {
    .site-header {
        padding: 16px;
        justify-content: space-between;
        
        .logo {
            order: -1;
        }
        
        .desktop-nav {
            display: none;
        }
        
        .menu-toggle {
            display: block;
        }
    }
}

@keyframes slideLeft {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(20px);
    }
    100% {
        transform: translateX(0);
    }
}
</style>