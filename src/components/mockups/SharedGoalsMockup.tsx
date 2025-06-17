
import React from 'react';

const SharedGoalsMockup = () => {
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
        <div className="px-6 py-8 bg-gradient-to-br from-cream-50 to-blush-50">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-warmGray-800 mb-1">Tujuan Bersama</h3>
            <p className="text-sm text-warmGray-600">Kamu & Sarah</p>
          </div>
          
          {/* Goal cards */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-warmGray-100">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-warmGray-800 text-sm">Workout Together</h4>
                <span className="text-xs bg-blush-100 text-blush-700 px-2 py-1 rounded-full">75%</span>
              </div>
              <div className="w-full bg-warmGray-200 rounded-full h-2 mb-2">
                <div className="bg-blush-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-xs text-warmGray-600">15/20 sessions completed</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-warmGray-100">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-warmGray-800 text-sm">Save for Vacation</h4>
                <span className="text-xs bg-sage-100 text-sage-700 px-2 py-1 rounded-full">60%</span>
              </div>
              <div className="w-full bg-warmGray-200 rounded-full h-2 mb-2">
                <div className="bg-sage-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="text-xs text-warmGray-600">Rp 12.000.000 / Rp 20.000.000</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-warmGray-100">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-warmGray-800 text-sm">Read 12 Books</h4>
                <span className="text-xs bg-cream-100 text-cream-700 px-2 py-1 rounded-full">33%</span>
              </div>
              <div className="w-full bg-warmGray-200 rounded-full h-2 mb-2">
                <div className="bg-cream-500 h-2 rounded-full" style={{ width: '33%' }}></div>
              </div>
              <p className="text-xs text-warmGray-600">4/12 books completed</p>
            </div>
          </div>
          
          {/* Add new goal button */}
          <button className="w-full mt-6 bg-blush-500 text-white py-3 rounded-xl font-semibold text-sm hover:bg-blush-600 transition-colors">
            + Tambah Tujuan Baru
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharedGoalsMockup;
