@@ .. @@
 import React, { useRef, useEffect } from 'react';
 import { motion } from 'framer-motion';
 import { useInView } from 'react-intersection-observer';
+import { useLanguage } from '../contexts/LanguageContext';

 /* =========================
@@ .. @@
 const AutoPlayVideo: React.FC<AutoPlayVideoProps> = ({ src }) => {
   const videoRef = useRef<HTMLVideoElement | null>(null);

   useEffect(() => {
     const video = videoRef.current;
     if (!video) return;

-    video.muted = true;
-    video.loop = true;
-    video.playsInline = true;
-    video.preload = 'auto';
+    const setupVideo = async () => {
+      try {
+        video.muted = true;
+        video.loop = true;
+        video.playsInline = true;
+        video.preload = 'metadata';
+        video.controls = false;
+        
+        // Attendre que les métadonnées soient chargées
+        await new Promise((resolve) => {
+          if (video.readyState >= 1) {
+            resolve(true);
+          } else {
+            video.addEventListener('loadedmetadata', () => resolve(true), { once: true });
+          }
+        });

-    video.play().catch(() => {});
+        // Essayer de lancer la vidéo
+        await video.play();
+      } catch (error) {
+        console.log('Autoplay failed, video will be available with user interaction');
+        // Ajouter des contrôles si l'autoplay échoue
+        video.controls = true;
+      }
+    };
+
+    setupVideo();
   }, []);

   return (
     <video
       ref={videoRef}
       src={src}
       muted
       loop
       playsInline
-      preload="auto"
-      className="w-full h-96 object-cover rounded-lg shadow-lg"
+      preload="metadata"
+      className="w-full h-96 object-cover rounded-lg shadow-lg bg-gray-200"
+      poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280'%3EChargement...%3C/text%3E%3C/svg%3E"
     />
   );
 };
@@ .. @@
 const MomentsSection: React.FC = () => {
+  const { t } = useLanguage();
   const [ref, inView] = useInView({
@@ .. @@
   const images: ImageMoment[] = [
     {
       id: 1,
-      titleFr: 'À la maison',
-      titleEn: 'At home',
+      titleFr: t('moments.home'),
+      titleEn: t('moments.home'),
       image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-10%20at%2018.17.38%20(2).jpeg',
     },
     {
       id: 2,
-      titleFr: 'Au café',
-      titleEn: 'At the coffee shop',
+      titleFr: t('moments.cafe'),
+      titleEn: t('moments.cafe'),
       image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-10%20at%2018.17.40%20(1).jpeg',
     },
     {
       id: 3,
-      titleFr: 'Au travail',
-      titleEn: 'At work',
+      titleFr: t('moments.work'),
+      titleEn: t('moments.work'),
       image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-10%20at%2018.17.39%20(1).jpeg',
     },
     {
       id: 4,
-      titleFr: 'Moments de partage',
-      titleEn: 'Shared moments',
+      titleFr: t('moments.sharing'),
+      titleEn: t('moments.sharing'),
       image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-10%20at%2018.17.38.jpeg',
     },
     {
       id: 5,
-      titleFr: 'Moments de partage',
-      titleEn: 'Shared moments',
+      titleFr: t('moments.sharing'),
+      titleEn: t('moments.sharing'),
       image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-10%20at%2018.17.38%20(1).jpeg',
     },
     {
       id: 6,
-      titleFr: 'Moments de partage',
-      titleEn: 'Shared moments',
+      titleFr: t('moments.sharing'),
+      titleEn: t('moments.sharing'),
       image: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Image%202026-01-10%20at%2018.17.39.jpeg',
     },
   ];
@@ .. @@
   const videos: VideoMoment[] = [
     {
       id: 7,
-      titleFr: 'L'art du café',
-      titleEn: 'The art of coffee',
+      titleFr: t('moments.art'),
+      titleEn: t('moments.art'),
       videoUrl: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Video%202026-01-13%20at%2017.27.45.mp4',
     },
     {
       id: 8,
-      titleFr: 'Savoir-faire FAMICO',
-      titleEn: 'FAMICO craftsmanship',
+      titleFr: t('moments.craftsmanship'),
+      titleEn: t('moments.craftsmanship'),
       videoUrl: 'https://ik.imagekit.io/wvlb7dccz/WhatsApp%20Video%202026-01-13%20at%2017.27.45.mp4?updatedAt=1768344579401',
     },
   ];
@@ .. @@
           className="text-center mb-14"
         >
           <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
-            Moments FAMICO
+            {t('moments.title')}
           </h2>
           <p className="text-gray-600 max-w-4xl mx-auto text-lg">
-            Chaque tasse de café FAMICO accompagne vos instants du quotidien.
-            <br />
-            <span className="italic">
-              Every cup of FAMICO coffee enhances your everyday moments.
-            </span>
+            {t('moments.description')}
           </p>
         </motion.div>
@@ .. @@
               <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                 <h3 className="text-lg font-semibold">{item.titleFr}</h3>
-                <p className="text-sm opacity-90">{item.titleEn}</p>
               </div>
             </motion.div>
@@ .. @@
               <div className="text-center mt-4">
                 <h3 className="text-lg font-semibold text-gray-800">
                   {video.titleFr}
                 </h3>
-                <p className="text-sm text-gray-500">
-                  {video.titleEn}
-                </p>
               </div>
             </div>