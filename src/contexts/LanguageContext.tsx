import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.products': 'Produits',
    'nav.newProducts': 'Nouveautés',
    'nav.moments': 'Moments',
    'nav.distributor': 'Devenir distributeur',
    'nav.location': 'Localisation',
    'nav.history': 'Notre Histoire',
    'nav.shop': 'Boutique',

    // Hero
    'hero.title': 'CAFÉ',
    'hero.subtitle': "L'Excellence du Café Algérien",
    'hero.description': 'Depuis 1973, nous torréfions avec passion un café authentique, intense et raffiné pour les amateurs de vrai goût.',
    'hero.discover': 'Découvrir nos produits',
    'hero.ourHistory': 'Notre histoire',

    // Products
    'products.title': 'BOUTIQUE FAMICO',
    'products.description': 'Découvrez la sélection de cafés FAMICO, soigneusement torréfiés pour offrir une qualité et un goût exceptionnels. Commandez facilement en ligne et recevez votre café directement chez vous.',
    'products.button': 'ACCÉDER À LA BOUTIQUE',

    // New Products
    'newProducts.title': 'DÉCOUVREZ LE NOUVEAU PRODUIT FAMICO',
    'newProducts.discover': 'Découvrez nos dernières innovations',

    // Moments
    'moments.title': 'Moments FAMICO',
    'moments.description': 'Chaque tasse de café FAMICO accompagne vos instants du quotidien.',
    'moments.home': 'À la maison',
    'moments.cafe': 'Au café',
    'moments.work': 'Au travail',
    'moments.sharing': 'Moments de partage',
    'moments.art': "L'art du café",
    'moments.craftsmanship': 'Savoir-faire FAMICO',

    // History
    'history.title': 'Notre Histoire',
    'history.subtitle': 'Plus de 50 ans de passion pour le café',
    'history.intro': 'Depuis 1973, FAMICO incarne l\'excellence du café algérien.',
    'history.paragraph1': "Fondée à Alger, notre entreprise familiale s'est donnée pour mission de torréfier et distribuer un café d'exception, respectueux des traditions tout en embrassant l'innovation.",
    'history.paragraph2': "Au fil des décennies, FAMICO est devenue une référence incontournable dans l'industrie du café en Algérie et au-delà. Notre engagement envers la qualité, notre savoir-faire artisanal et notre passion pour chaque grain de café nous ont permis de créer des mélanges uniques qui ravissent les palais les plus exigeants.",
    'history.paragraph3': "Aujourd'hui, FAMICO continue d'innover tout en préservant l'héritage qui fait notre fierté : offrir à nos clients une expérience café authentique et mémorable.",
    'history.values': 'Nos Valeurs',
    'history.quality': 'Qualité Premium',
    'history.qualityDesc': 'Sélection rigoureuse des meilleurs grains',
    'history.tradition': 'Tradition',
    'history.traditionDesc': '50 ans de savoir-faire artisanal',
    'history.innovation': 'Innovation',
    'history.innovationDesc': 'Techniques modernes de torréfaction',

    // Distributor Form
    'distributor.title': 'Devenir distributeur FAMICO',
    'distributor.description': 'Rejoignez le réseau FAMICO et proposez un café de qualité à vos clients.',
    'distributor.company': "Nom de l'entreprise",
    'distributor.name': 'Nom & Prénom',
    'distributor.email': 'Email',
    'distributor.phone': 'Téléphone',
    'distributor.location': 'Pays / Ville',
    'distributor.activity': "Type d'activité",
    'distributor.activitySelect': 'Sélectionner',
    'distributor.activityCafe': 'Café / Coffee shop',
    'distributor.activityHotel': 'Hôtel / Restaurant',
    'distributor.activityOffice': 'Bureau / Entreprise',
    'distributor.activityReseller': 'Revendeur / Distributeur',
    'distributor.activityOther': 'Autre',
    'distributor.message': 'Message',
    'distributor.messagePlaceholder': 'Parlez-nous de votre projet...',
    'distributor.submit': 'Envoyer la demande',

    // Location
    'location.title': 'FAMICO Factory',
    'location.description': 'Retrouvez notre site de production et nos bureaux.',
    'location.clickToOpen': 'Cliquez pour ouvrir dans Google Maps',

    // Footer
    'footer.companyInfo': 'FAMICO GROUP',
    'footer.address': 'EURL FAMICO - ZONE INDUSTRIELLE N02 OULED MENDIL-DOUIRA -ALGER',
    'footer.fax': 'Fax 021400102',
    'footer.navigation': 'Navigation',
    'footer.information': 'Information',
    'footer.contact': 'Contact',
    'footer.privacy': 'Politique de confidentialité',
    'footer.cookies': 'Politique des cookies',
    'footer.terms': 'Conditions d\'utilisation',
    'footer.sustainability': 'Développement durable',
    'footer.payment': 'Moyens de paiement',
    'footer.follow': 'Suivez-nous',
    'footer.copyright': '© 2024 Segafredo famico Group. Tous droits réservés.',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.newProducts': 'New Products',
    'nav.moments': 'Moments',
    'nav.distributor': 'Become a Distributor',
    'nav.location': 'Location',
    'nav.history': 'Our History',
    'nav.shop': 'Shop',

    // Hero
    'hero.title': 'COFFEE',
    'hero.subtitle': 'Excellence of Algerian Coffee',
    'hero.description': 'Since 1973, we have been passionately roasting authentic, intense and refined coffee for true taste lovers.',
    'hero.discover': 'Discover our products',
    'hero.ourHistory': 'Our history',

    // Products
    'products.title': 'FAMICO SHOP',
    'products.description': 'Discover the selection of FAMICO coffees, carefully roasted to offer exceptional quality and taste. Order easily online and receive your coffee directly at home.',
    'products.button': 'VISIT THE SHOP',

    // New Products
    'newProducts.title': 'DISCOVER THE NEW FAMICO PRODUCT',
    'newProducts.discover': 'Discover Our Latest Innovations',

    // Moments
    'moments.title': 'FAMICO Moments',
    'moments.description': 'Every cup of FAMICO coffee enhances your everyday moments.',
    'moments.home': 'At home',
    'moments.cafe': 'At the coffee shop',
    'moments.work': 'At work',
    'moments.sharing': 'Shared moments',
    'moments.art': 'The art of coffee',
    'moments.craftsmanship': 'FAMICO craftsmanship',

    // History
    'history.title': 'Our History',
    'history.subtitle': 'Over 50 years of passion for coffee',
    'history.intro': 'Since 1973, FAMICO embodies the excellence of Algerian coffee.',
    'history.paragraph1': 'Founded in Algiers, our family business has made it its mission to roast and distribute exceptional coffee, respectful of traditions while embracing innovation.',
    'history.paragraph2': 'Over the decades, FAMICO has become an essential reference in the coffee industry in Algeria and beyond. Our commitment to quality, our artisanal know-how and our passion for every coffee bean have enabled us to create unique blends that delight the most demanding palates.',
    'history.paragraph3': 'Today, FAMICO continues to innovate while preserving the heritage that makes us proud: offering our customers an authentic and memorable coffee experience.',
    'history.values': 'Our Values',
    'history.quality': 'Premium Quality',
    'history.qualityDesc': 'Rigorous selection of the best beans',
    'history.tradition': 'Tradition',
    'history.traditionDesc': '50 years of artisanal know-how',
    'history.innovation': 'Innovation',
    'history.innovationDesc': 'Modern roasting techniques',

    // Distributor Form
    'distributor.title': 'Become a FAMICO Distributor',
    'distributor.description': 'Join the FAMICO network and grow your business with premium coffee.',
    'distributor.company': 'Company Name',
    'distributor.name': 'Full Name',
    'distributor.email': 'Email',
    'distributor.phone': 'Phone',
    'distributor.location': 'Country / City',
    'distributor.activity': 'Business Type',
    'distributor.activitySelect': 'Select',
    'distributor.activityCafe': 'Café / Coffee shop',
    'distributor.activityHotel': 'Hotel / Restaurant',
    'distributor.activityOffice': 'Office / Company',
    'distributor.activityReseller': 'Reseller / Distributor',
    'distributor.activityOther': 'Other',
    'distributor.message': 'Message',
    'distributor.messagePlaceholder': 'Tell us about your project...',
    'distributor.submit': 'Send Request',

    // Location
    'location.title': 'FAMICO Factory',
    'location.description': 'Find our production site and offices.',
    'location.clickToOpen': 'Click to open in Google Maps',

    // Footer
    'footer.companyInfo': 'FAMICO GROUP',
    'footer.address': 'EURL FAMICO - ZONE INDUSTRIELLE N02 OULED MENDIL-DOUIRA -ALGER',
    'footer.fax': 'Fax 021400102',
    'footer.navigation': 'Navigation',
    'footer.information': 'Information',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
    'footer.terms': 'Terms of Service',
    'footer.sustainability': 'Sustainability',
    'footer.payment': 'Payment Methods',
    'footer.follow': 'Follow Us',
    'footer.copyright': '© 2024 Segafredo famico Group. All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};