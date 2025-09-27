@@ .. @@
   return (
   )
-    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-8">
+    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50 py-8">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
@@ .. @@
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
-                className={`px-6 py-3 bg-gradient-to-r ${feature.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
+                className={`px-6 py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
               >
                 Explore Feature
               </motion.button>
@@ .. @@
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             <div className="text-center">
-              <div className="text-3xl font-bold text-sky-600 mb-2">28°C</div>
+              <div className="text-3xl font-bold text-primary-600 mb-2">28°C</div>
               <div className="text-gray-600">Current Temperature</div>
             </div>
             <div className="text-center">
-              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
+              <div className="text-3xl font-bold text-secondary-600 mb-2">85%</div>
               <div className="text-gray-600">Soil Moisture</div>
             </div>
             <div className="text-center">
-              <div className="text-3xl font-bold text-orange-600 mb-2">₹2,850</div>
+              <div className="text-3xl font-bold text-accent-600 mb-2">₹2,850</div>
               <div className="text-gray-600">Rice Price</div>
             </div>
             <div className="text-center">
-              <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
+              <div className="text-3xl font-bold text-primary-700 mb-2">12</div>
               <div className="text-gray-600">Active Alerts</div>
             </div>
           </div>