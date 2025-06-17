
import React from 'react';

const MemoryJarMockup = () => {
  return (
    <div className="relative max-w-sm mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-warmGray-200">
        {/* Phone frame */}
        <div className="bg-warmGray-900 h-2 w-full"></div>
        
        {/* Status bar */}
        <div className="bg-white px-6 py-3 flex justify-between items-center text-xs text-warmGray-600">
          <span>9:41</span>
          <div className="flex space-x-1">
            <div className="w-4 h-2 bg-warmGray-300 rounded-sm"></div>
            <div className="w-4 h-2 bg-warmGray-300 rounded-sm"></div>
            <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
          </div>
        </div>
        
        {/* App content */}
        <div className="px-6 py-8 bg-gradient-to-br from-sage-50 to-cream-50">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-warmGray-800 mb-1">Memory Jar</h3>
            <p className="text-sm text-warmGray-600">Kenangan Bersama</p>
          </div>
          
          {/* Memory cards */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-warmGray-100">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-blush-200 rounded-lg flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-sm text-warmGray-800 mb-1">First date di café kecil itu ❤️</p>
                  <p className="text-xs text-warmGray-500">2 hari yang lalu</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-warmGray-100">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-sage-200 rounded-lg flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-sm text-warmGray-800 mb-1">Spontan road trip ke Bandung!</p>
                  <p className="text-xs text-warmGray-500">1 minggu yang lalu</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-warmGray-100">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-cream-200 rounded-lg flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-sm text-warmGray-800 mb-1">Masak berdua untuk pertama kali 👨‍🍳</p>
                  <p className="text-xs text-warmGray-500">2 minggu yang lalu</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-warmGray-100">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-blush-200 rounded-lg flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-sm text-warmGray-800 mb-1">Anniversary ke-1 di restoran favorit</p>
                  <p className="text-xs text-warmGray-500">1 bulan yang lalu</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Add memory button */}
          <button className="w-full mt-6 bg-sage-500 text-white py-3 rounded-xl font-semibold text-sm hover:bg-sage-600 transition-colors">
            + Tambah Kenangan
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemoryJarMockup;
