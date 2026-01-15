@@ .. @@
 import React, { useState } from 'react';
 import { motion } from 'framer-motion';
 import { Menu, X, Facebook, Instagram, Youtube } from 'lucide-react';
+import { useLanguage } from '../contexts/LanguageContext';

 const Header: React.FC = () => {
+  const { language, setLanguage, t } = useLanguage();
   const [isMenuOpen, setIsMenuOpen] = useState(false);

-  // Items de navigation, reliés aux ids des sections
+  // Fonction pour scroller vers une section avec offset pour le header fixe
+  const scrollToSection = (sectionId: string) => {
+    const element = document.getElementById(sectionId);
+    if (element) {
+      const headerHeight = 140; // Hauteur approximative du header
+      const elementPosition = element.offsetTop - headerHeight;
+      window.scrollTo({
+        top: elementPosition,
+        behavior: 'smooth'
+      });
+    }
+    setIsMenuOpen(false);
+  };
+
+  // Items de navigation avec traductions
   const navItems = [
-    { label: 'Accueil', href: '#home' },
-    { label: 'Products', href: '#ProductsSection' },
-    { label: 'Nouveautés', href: '#new-products' },
-    { label: 'Moments', href: '#moments' },
-    { label: 'Devenir distributeur', href: '#distributor' },
-    { label: 'Localisation', href: '#location' },
+    { label: t('nav.home'), sectionId: 'home' },
+    { label: t('nav.history'), sectionId: 'history' },
+    { label: t('nav.products'), sectionId: 'products' },
+    { label: t('nav.newProducts'), sectionId: 'new-products' },
+    { label: t('nav.moments'), sectionId: 'moments' },
+    { label: t('nav.distributor'), sectionId: 'distributor' },
+    { label: t('nav.location'), sectionId: 'location' },
   ];

   return (
@@ .. @@
           <div className="flex items-center gap-4">
-            <span className="text-sm cursor-pointer">FR</span>
-            <span className="text-sm cursor-pointer">EN</span>
+            <button
+              onClick={() => setLanguage('fr')}
+              className={`text-sm font-medium transition-colors ${
+                language === 'fr' ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
+              }`}
+            >
+              FR
+            </button>
+            <span className="text-gray-300">|</span>
+            <button
+              onClick={() => setLanguage('en')}
+              className={`text-sm font-medium transition-colors ${
+                language === 'en' ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
+              }`}
+            >
+              EN
+            </button>
             <a
-              href="#products"
+              onClick={() => scrollToSection('products')}
               className="bg-red-600 text-white px-4 py-1 text-sm font-medium hover:bg-red-700 transition"
             >
-              Boutique
+              {t('nav.shop')}
             </a>
           </div>
@@ .. @@
           <div className="hidden md:flex gap-8">
             {navItems.map((item) => (
-              <a
+              <button
                 key={item.label}
-                href={item.href}
+                onClick={() => scrollToSection(item.sectionId)}
                 className="text-sm font-medium text-gray-900 border-b-2 border-transparent hover:text-red-600 hover:border-red-600 transition"
               >
                 {item.label}
-              </a>
+              </button>
             ))}
           </div>
@@ .. @@
           >
             {navItems.map((item) => (
-              <a
+              <button
                 key={item.label}
-                href={item.href}
-                onClick={() => setIsMenuOpen(false)}
-                className="block px-6 py-4 text-gray-900 hover:bg-gray-100"
+                onClick={() => scrollToSection(item.sectionId)}
+                className="block w-full text-left px-6 py-4 text-gray-900 hover:bg-gray-100"
               >
                 {item.label}
-              </a>
+              </button>
             ))}
           </motion.div>