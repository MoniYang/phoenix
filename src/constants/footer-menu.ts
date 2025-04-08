export type FooterItem = {
    icon: string;
    text: string;
    onclick: () => void;
    selected?: boolean;
    promo?: boolean;
  };
  
export const footerItems: FooterItem[] = [
{ icon: 'menu', text: 'Menu', onclick: () => sideMenuOpen() },
{ icon: 'home', text: 'Home', onclick: () => homeEvent(), selected: true },
{ icon: 'promo', text: 'Promo', onclick: () => promoEvent(), promo: true },
{ icon: 'wallet', text: 'Wallet', onclick: () => walletEvent() },
{ icon: 'profile', text: 'Profile', onclick: () => profileEvent() },
];