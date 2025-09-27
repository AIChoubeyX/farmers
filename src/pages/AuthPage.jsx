@@ .. @@
   return (
-    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center py-12 px-4 relative overflow-hidden">
+    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50 flex items-center justify-center py-12 px-4 relative overflow-hidden">
       {/* Animated Background Elements */}
       <div className="absolute inset-0 overflow-hidden">
@@ .. @@
           transition={{ 
             duration: 20, 
             repeat: Infinity, 
             ease: "linear" 
           }}
-          className="absolute -top-40 -right-40 w-80 h-80 bg-green-200/20 rounded-full blur-3xl"
+          className="absolute -top-40 -right-40 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl"
         />
         <motion.div
@@ .. @@
           transition={{ 
             duration: 25, 
             repeat: Infinity, 
             ease: "linear" 
           }}
-          className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-200/20 rounded-full blur-2xl"
+          className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-200/20 rounded-full blur-2xl"
         />
       </div>
 
@@ .. @@
               animate={{ scale: 1 }}
               transition={{ duration: 0.5, delay: 0.2 }}
-              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl shadow-lg mb-4 mx-auto"
+              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-3xl shadow-lg mb-4 mx-auto"
             >
               <Leaf className="w-10 h-10 text-white" />
             </motion.div>
             <h1 className="text-3xl font-bold text-gray-800 mb-2">
-              Welcome to <span className="text-green-600">Kissan</span>
+              Welcome to <span className="text-secondary-600">Kissan</span>
             </h1>
             <p className="text-gray-600">
@@ .. @@
               className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                 isLogin
-                  ? 'bg-white text-green-600 shadow-md'
+                  ? 'bg-white text-secondary-600 shadow-md'
                   : 'text-gray-600 hover:text-gray-800'
               }`}
             >
@@ .. @@
               className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                 !isLogin
-                  ? 'bg-white text-green-600 shadow-md'
+                  ? 'bg-white text-secondary-600 shadow-md'
                   : 'text-gray-600 hover:text-gray-800'
               }`}
             >
@@ .. @@
                       placeholder="Full Name"
                       value={formData.name}
                       onChange={handleInputChange}
-                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
+                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                     />
                     {errors.name && (
@@ .. @@
                 placeholder="Email Address"
                 value={formData.email}
                 onChange={handleInputChange}
-                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
+                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
               />
               {errors.email && (
@@ .. @@
                       placeholder="Phone Number"
                       value={formData.phone}
                       onChange={handleInputChange}
-                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
+                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                     />
                     {errors.phone && (
@@ .. @@
                 placeholder="Password"
                 value={formData.password}
                 onChange={handleInputChange}
-                className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
+                className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
               />
               <button
@@ .. @@
                       placeholder="Confirm Password"
                       value={formData.confirmPassword}
                       onChange={handleInputChange}
-                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
+                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                     />
                     {errors.confirmPassword && (
@@ .. @@
               <div className="flex justify-end">
                 <button
                   type="button"
-                  className="text-green-600 hover:text-green-700 font-medium transition-colors"
+                  className="text-secondary-600 hover:text-secondary-700 font-medium transition-colors"
                 >
                   Forgot Password?
@@ .. @@
               type="submit"
               disabled={isLoading}
-              className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
+              className="w-full py-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-secondary-600 hover:to-secondary-700 disabled:opacity-50 disabled:cursor-not-allowed"
             >
               {isLoading ? (
@@ .. @@
               <button
                 onClick={() => setIsLogin(!isLogin)}
-                className="text-green-600 hover:text-green-700 font-semibold transition-colors"
+                className="text-secondary-600 hover:text-secondary-700 font-semibold transition-colors"
               >
                 {isLogin ? 'Sign Up' : 'Sign In'}
               </button>