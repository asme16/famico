@@ .. @@
 import React from 'react';
 import { motion } from 'framer-motion';
 import { useInView } from 'react-intersection-observer';
+import { useLanguage } from '../contexts/LanguageContext';

 const DistributorFormSection = () => {
+  const { t } = useLanguage();
   const [ref, inView] = useInView({
@@ .. @@
   };

   return (
-    <section className="py-20 bg-gray-50" ref={ref}>
+    <section id="distributor" className="py-20 bg-gray-50" ref={ref}>
       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

@@ .. @@
           className="text-center mb-12"
         >
           <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
-            Devenir distributeur FAMICO
+            {t('distributor.title')}
           </h2>
           <p className="text-gray-600 text-lg max-w-3xl mx-auto">
-            Rejoignez le réseau FAMICO et proposez un café de qualité à vos clients.  
-            <br />
-            <span className="italic">
-              Become a FAMICO distributor and grow your business with premium coffee.
-            </span>
+            {t('distributor.description')}
           </p>
         </motion.div>
@@ .. @@
           {/* Company */}
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">
-              Nom de l'entreprise *
+              {t('distributor.company')} *
             </label>
             <input
@@ .. @@
           {/* Name */}
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">
-              Nom & Prénom *
+              {t('distributor.name')} *
             </label>
             <input
@@ .. @@
           {/* Email */}
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">
-              Email *
+              {t('distributor.email')} *
             </label>
             <input
@@ .. @@
           {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
-              Téléphone *
+              {t('distributor.phone')} *
             </label>
             <input
@@ .. @@
           {/* Location */}
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">
-              Pays / Ville *
+              {t('distributor.location')} *
             </label>
             <input
@@ .. @@
           {/* Activity */}
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">
-              Type d'activité *
+              {t('distributor.activity')} *
             </label>
             <select
@@ .. @@
             >
-              <option value="">Sélectionner</option>
-              <option>Café / Coffee shop</option>
-              <option>Hôtel / Restaurant</option>
-              <option>Bureau / Entreprise</option>
-              <option>Revendeur / Distributeur</option>
-              <option>Autre</option>
+              <option value="">{t('distributor.activitySelect')}</option>
+              <option>{t('distributor.activityCafe')}</option>
+              <option>{t('distributor.activityHotel')}</option>
+              <option>{t('distributor.activityOffice')}</option>
+              <option>{t('distributor.activityReseller')}</option>
+              <option>{t('distributor.activityOther')}</option>
             </select>
           </div>
@@ .. @@
           {/* Message */}
           <div className="md:col-span-2">
             <label className="block text-sm font-medium text-gray-700 mb-1">
-              Message
+              {t('distributor.message')}
             </label>
             <textarea
               rows="4"
               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-red-600 focus:border-red-600"
-              placeholder="Parlez-nous de votre projet..."
+              placeholder={t('distributor.messagePlaceholder')}
             ></textarea>
           </div>
@@ .. @@
               type="submit"
               className="bg-red-600 text-white px-10 py-3 font-medium rounded-md hover:bg-red-700 transition-all duration-300"
             >
-              Envoyer la demande
+              {t('distributor.submit')}
             </motion.button>
+            
+            <p className="text-sm text-gray-500 mt-4">
+              Contact: <a href="mailto:contact@famico-coffee.com" className="text-red-600 hover:underline">contact@famico-coffee.com</a>
+            </p>
           </div>
         </motion.form>