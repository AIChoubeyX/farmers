@@ .. @@
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
-              className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg"
+              className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl shadow-lg"
             >
               <Leaf className="w-6 h-6 text-white" />
             </motion.div>
@@ .. @@
                        <button
                          onClick={() => setSelectedLanguage(language)}
                          className={`${
-                           active ? 'bg-green-50 text-green-700' : 'text-gray-700'
+                           active ? 'bg-secondary-50 text-secondary-700' : 'text-gray-700'
                          } group flex items-center w-full px-4 py-3 text-sm transition-colors duration-150`}
                        >
@@ .. @@
                 <Menu.Button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 rounded-lg hover:bg-gray-50 transition-all duration-200">
+                <Menu.Button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-secondary-600 rounded-lg hover:bg-gray-50 transition-all duration-200">
                   <User className="w-4 h-4" />
                   <span>{user?.name}</span>
                   <ChevronDown className="w-4 h-4" />
@@ .. @@
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={handleLogin}
-                className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-green-600 hover:to-green-700"
+                className="px-6 py-2 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-secondary-600 hover:to-secondary-700"
               >
                 Login / Signup
               </motion.button>
@@ .. @@
                     onClick={() => setSelectedLanguage(language)}
                     className={`flex items-center space-x-2 px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                       selectedLanguage.code === language.code
-                        ? 'bg-green-100 text-green-700'
+                        ? 'bg-secondary-100 text-secondary-700'
                         : 'text-gray-700 hover:bg-gray-100'
                     }`}
                   >
@@ .. @@
                     setIsOpen(false);
                   }}
-                  className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
+                  className="w-full px-4 py-2 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
                 >
                   Login / Signup
                 </button>