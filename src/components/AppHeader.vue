<script>
export default {
    data() {
        return {
            isMenuOpen: false,
            activeItems: {
                portfolio: false,
                progetti: false,
                serie: false
            }
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            // Blocca lo scroll del body quando il menu è aperto
            if (this.isMenuOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        },
        toggleDropdown(item) {
            this.activeItems[item] = !this.activeItems[item];
        }
    },
    beforeDestroy() {
        // Ripristina lo scroll quando il componente viene distrutto
        document.body.style.overflow = '';
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
        </div>

        <div class="desktop-nav">
            <nav class="main-nav">
                <ul class="main-menu">
                    <li class="menu-item">
                        <a href="#" class="menu-link">Home</a>
                    </li>
                    <li class="menu-item has-submenu" 
                        @mouseenter="activeItems.portfolio = true" 
                        @mouseleave="activeItems.portfolio = false">
                        <a href="#" class="menu-link">Portfolio</a>
                        <ul class="submenu" v-if="activeItems.portfolio">
                            <li class="submenu-item has-submenu"
                                @mouseenter="activeItems.progetti = true"
                                @mouseleave="activeItems.progetti = false">
                                <a href="#" class="submenu-link">Progetti</a>
                                <ul class="submenu submenu-right" v-if="activeItems.progetti">
                                    <li class="submenu-item">
                                        <a href="#" class="submenu-link">Alivara</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="submenu-item has-submenu"
                                @mouseenter="activeItems.serie = true"
                                @mouseleave="activeItems.serie = false">
                                <a href="#" class="submenu-link">Serie</a>
                                <ul class="submenu submenu-right" v-if="activeItems.serie">
                                    <li class="submenu-item">
                                        <a href="#" class="submenu-link">Marocco</a>
                                    </li>
                                    <li class="submenu-item">
                                        <a href="#" class="submenu-link">Uganda</a>
                                    </li>
                                    <li class="submenu-item">
                                        <a href="#" class="submenu-link">Autoritratti</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item">
                        <a href="#" class="menu-link">About</a>
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
            <img src="/img/MatteoBasileLogo.png" alt="Matteo Basile" title="Matteo Basile Photography" />
        </div>

        <!-- Offcanvas Menu per Mobile -->
        <div class="offcanvas-menu" :class="{ 'is-open': isMenuOpen }">
            <div class="offcanvas-container">
                <nav class="mobile-nav">
                    <ul class="mobile-menu">
                        <li class="mobile-menu-item">
                            <a href="#" class="mobile-menu-link">Home</a>
                        </li>
                        <li class="mobile-menu-item">
                            <div class="mobile-menu-header" @click="toggleDropdown('portfolio')">
                                <span>Portfolio</span>
                                <i class="fas" :class="activeItems.portfolio ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                            </div>
                            <ul class="mobile-submenu" v-if="activeItems.portfolio">
                                <li class="mobile-submenu-item">
                                    <div class="mobile-menu-header" @click="toggleDropdown('progetti')">
                                        <span>Progetti</span>
                                        <i class="fas" :class="activeItems.progetti ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                                    </div>
                                    <ul class="mobile-submenu" v-if="activeItems.progetti">
                                        <li class="mobile-submenu-item">
                                            <a href="#" class="mobile-submenu-link">Alivara</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="mobile-submenu-item">
                                    <div class="mobile-menu-header" @click="toggleDropdown('serie')">
                                        <span>Serie</span>
                                        <i class="fas" :class="activeItems.serie ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                                    </div>
                                    <ul class="mobile-submenu" v-if="activeItems.serie">
                                        <li class="mobile-submenu-item">
                                            <a href="#" class="mobile-submenu-link">Marocco</a>
                                        </li>
                                        <li class="mobile-submenu-item">
                                            <a href="#" class="mobile-submenu-link">Uganda</a>
                                        </li>
                                        <li class="mobile-submenu-item">
                                            <a href="#" class="mobile-submenu-link">Autoritratti</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="mobile-menu-item">
                            <a href="#" class="mobile-menu-link">About</a>
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
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    position: relative;
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
                }
                
                .submenu-item:hover > .submenu {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
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
        }
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
</style>