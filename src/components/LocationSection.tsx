@@ .. @@
 import React from 'react';
 import { motion } from 'framer-motion';
+import { useLanguage } from '../contexts/LanguageContext';
+import { MapPin, ExternalLink } from 'lucide-react';

 const LocationSection: React.FC = () => {
-  // Lien direct vers Google Maps
-  const googleMapsLink = "https://www.google.com/maps/place/Famico+Factory";
+  const { t } = useLanguage();
+  
+  // Coordonnées approximatives pour la zone industrielle d'Ouled Mendil, Douira, Alger
+  const googleMapsLink = "https://www.google.com/maps/search/ZONE+INDUSTRIELLE+OULED+MENDIL+DOUIRA+ALGER/@36.6892,3.1447,15z";
+  
+  const openGoogleMaps = () => {
+    window.open(googleMapsLink, '_blank', 'noopener,noreferrer');
+  };

   return (
@@ .. @@
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
-            FAMICO Factory
+            {t('location.title')}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
-            Retrouvez notre site de production et nos bureaux.
-            <br />
-            <span className="italic">
-              Find our production site and offices.
-            </span>
+            {t('location.description')}
          </p>
        </motion.div>

-        {/* MAP CLICKABLE */}
+        {/* ADRESSE ET CARTE */}
+        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
+          
+          {/* Informations de contact */}
+          <motion.div
+            initial={{ opacity: 0, x: -40 }}
+            whileInView={{ opacity: 1, x: 0 }}
+            viewport={{ once: true }}
+            transition={{ duration: 0.8 }}
+            className="bg-white p-8 rounded-xl shadow-lg"
+          >
+            <div className="flex items-center mb-6">
+              <MapPin className="w-6 h-6 text-red-600 mr-3" />
+              <h3 className="text-xl font-semibold text-gray-800">FAMICO Factory</h3>
+            </div>
+            
+            <div className="space-y-4 text-gray-600">
+              <p className="font-medium">{t('footer.companyInfo')}</p>
+              <p>{t('footer.address')}</p>
+              <p>{t('footer.fax')}</p>
+              <div className="space-y-2">
+                <p>Email: <a href="mailto:contact@famico-coffee.com" className="text-red-600 hover:underline">contact@famico-coffee.com</a></p>
+                <p>Commercial: <a href="mailto:commercial@famico-coffee.com" className="text-red-600 hover:underline">commercial@famico-coffee.com</a></p>
+              </div>
+            </div>
+            
+            <motion.button
+              whileHover={{ scale: 1.05 }}
+              whileTap={{ scale: 0.95 }}
+              onClick={openGoogleMaps}
+              className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-all duration-300 flex items-center"
+            >
+              <ExternalLink className="w-4 h-4 mr-2" />
+              {t('location.clickToOpen')}
+            </motion.button>
+          </motion.div>

-        <motion.div
-          initial={{ opacity: 0, y: 40 }}
-          whileInView={{ opacity: 1, y: 0 }}
-          viewport={{ once: true }}
-          transition={{ duration: 0.8 }}
-          className="w-full h-[450px] rounded-xl overflow-hidden shadow-xl"
-        >
-          <a
-            href={googleMapsLink}
-            target="_blank"
-            rel="noopener noreferrer"
-            className="block w-full h-full"
+          {/* Carte interactive */}
+          <motion.div
+            initial={{ opacity: 0, x: 40 }}
+            whileInView={{ opacity: 1, x: 0 }}
+            viewport={{ once: true }}
+            transition={{ duration: 0.8 }}
+            className="relative"
           >
-            <iframe
-              title="FAMICO Factory Location"
-              src="https://maps.app.goo.gl/DXBLaQZZpXiVRyn79"
-              className="w-full h-full border-0 pointer-events-none"
-              loading="lazy"
-              referrerPolicy="no-referrer-when-downgrade"
-            ></iframe>
-          </a>
-        </motion.div>
+            <div 
+              onClick={openGoogleMaps}
+              className="relative w-full h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-xl cursor-pointer group"
+            >
+              {/* Image de carte statique ou placeholder */}
+              <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
+                <div className="text-center">
+                  <MapPin className="w-16 h-16 text-red-600 mx-auto mb-4" />
+                  <h4 className="text-xl font-semibold text-gray-800 mb-2">FAMICO Factory</h4>
+                  <p className="text-gray-600 mb-4">Zone Industrielle Ouled Mendil<br />Douira, Alger</p>
+                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg inline-flex items-center group-hover:bg-red-700 transition-colors">
+                    <ExternalLink className="w-4 h-4 mr-2" />
+                    {t('location.clickToOpen')}
+                  </div>
+                </div>
+              </div>
+              
+              {/* Overlay au hover */}
+              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
+            </div>
+          </motion.div>
+        </div>

       </div>