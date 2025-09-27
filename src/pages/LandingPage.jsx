@@ .. @@
 function LandingPage() {
   const { login } = useAuth();
 }
 
   const handleGetStarted = () => {
     navigate('/auth');
   };
 
   return (
   )
-    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
+    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
+      {/* Background Video */}
+      <div className="absolute inset-0 z-0">
+        <video
+          autoPlay
+          muted
+          loop
+          playsInline
+          className="w-full h-full object-cover opacity-20"
+        >
+          <source
+            src="https://videos.pexels.com/video-files/6894205/6894205-uhd_2560_1440_25fps.mp4"
+            type="video/mp4"
+          />
+          <source
+            src="https://videos.pexels.com/video-files/6894205/6894205-hd_1920_1080_25fps.mp4"
+            type="video/mp4"
+          />
+        </video>
+        {/* Video Overlay */}
+        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80"></div>
+      </div>
+
       {/* Animated Background Elements */}
       <div className="absolute inset-0 overflow-hidden">
         <motion.div
@@ -1,7 +1,7 @@
           transition={{ 
             duration: 20, 
             repeat: Infinity, 
             ease: "linear" 
           }}
-          className="absolute -top-40 -right-40 w-80 h-80 bg-green-200/30 rounded-full blur-3xl"
+          className="absolute -top-40 -right-40 w-80 h-80 bg-secondary-200/30 rounded-full blur-3xl"
         />
         <motion.div
@@ .. @@
           transition={{ 
             duration: 25, 
             repeat: Infinity, 
             ease: "linear" 
           }}
-          className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
+          className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"
         />
         <motion.div
@@ .. @@
           transition={{ 
             duration: 8, 
             repeat: Infinity, 
             ease: "easeInOut" 
           }}
-          className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-200/20 rounded-full blur-2xl"
+          className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent-200/20 rounded-full blur-2xl"
         />
       </div>
 
@@ .. @@
               initial={{ scale: 0, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.5, ease: 'easeOut' }}
-              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl shadow-2xl mb-8 mx-auto"
+              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-3xl shadow-2xl mb-8 mx-auto"
             >
               <Leaf className="w-12 h-12 text-white" />
             </motion.div>
@@ .. @@
               className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
             >
               <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
+              <span className="bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent">
                 Kissan
               </span>
             </motion.h1>
@@ .. @@
                   whileHover={{ x: 5 }}
                   transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                 >
                   <ArrowRight className="w-5 h-5" />
                 </motion.div>
-                  className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:from-green-600 hover:to-green-700"
+                  className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:from-secondary-600 hover:to-secondary-700"
                 >
                   <span>Get Started</span>
                   <motion.div
@@ .. @@
               <motion.button
                 whileHover={{ scale: 1.05, y: -2 }}
                 whileTap={{ scale: 0.95 }}
-                className="px-8 py-4 bg-white text-green-600 font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-200 hover:border-green-300"
+                className="px-8 py-4 bg-white text-secondary-600 font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-secondary-200 hover:border-secondary-300"
               >
                 Learn More
               </motion.button>
@@ .. @@
                   whileHover={{ scale: 1.1, rotate: 5 }}
                   transition={{ type: 'spring', stiffness: 400, damping: 10 }}
-                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl shadow-lg mb-6 group-hover:shadow-xl transition-shadow duration-300"
+                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-2xl shadow-lg mb-6 group-hover:shadow-xl transition-shadow duration-300"
                 >
                   <feature.icon className="w-8 h-8 text-white" />
                 </motion.div>
-                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
+                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-secondary-600 transition-colors duration-300">
                   {feature.title}
                 </h3>
                 <p className="text-gray-600 leading-relaxed">
@@ .. @@
         viewport={{ once: true }}
-        className="relative z-10 py-20 bg-gradient-to-r from-green-500 to-blue-600"
+        className="relative z-10 py-20 bg-gradient-to-r from-secondary-500 to-primary-600"
       >
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
@@ .. @@
             >
               <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
-              <div className="text-xl text-green-100">Active Farmers</div>
+              <div className="text-xl text-secondary-100">Active Farmers</div>
             </motion.div>
             <motion.div
@@ .. @@
             >
               <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
-              <div className="text-xl text-green-100">Accuracy Rate</div>
+              <div className="text-xl text-secondary-100">Accuracy Rate</div>
             </motion.div>
             <motion.div
@@ .. @@
             >
               <div className="text-4xl md:text-5xl font-bold mb-2">50%</div>
-              <div className="text-xl text-green-100">Yield Increase</div>
+              <div className="text-xl text-secondary-100">Yield Increase</div>
             </motion.div>
           </div>
         </div>