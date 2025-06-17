
import React from 'react';

const ComingSoonGraphic = () => {
  return (
    <div className="relative max-w-md mx-auto">
      <div className="bg-gradient-to-br from-blush-100 to-sage-100 rounded-3xl p-8 shadow-2xl border border-warmGray-200">
        <div className="text-center space-y-6">
          {/* Controllers illustration */}
          <div className="flex justify-center space-x-4">
            <div className="relative">
              <div className="w-20 h-16 bg-blush-400 rounded-2xl shadow-lg transform rotate-12 opacity-80">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-xs">🎮</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-20 h-16 bg-sage-400 rounded-2xl shadow-lg transform -rotate-12 opacity-80">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-1 -left-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-xs">🎯</span>
              </div>
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blush-300 to-sage-300 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <h3 className="relative text-3xl font-bold text-gradient">COMING SOON</h3>
          </div>
          
          {/* Features preview */}
          <div className="space-y-3 text-left">
            <div className="flex items-center space-x-3 p-3 bg-white bg-opacity-60 rounded-xl">
              <div className="w-3 h-3 bg-blush-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-warmGray-800">Interactive Couple Challenges</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white bg-opacity-60 rounded-xl">
              <div className="w-3 h-3 bg-sage-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-warmGray-800">Personality Discovery Quizzes</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white bg-opacity-60 rounded-xl">
              <div className="w-3 h-3 bg-warmGray-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-warmGray-800">Fun Date Night Games</span>
            </div>
          </div>
          
          {/* Progress indicator */}
          <div className="pt-4">
            <div className="flex justify-center space-x-2 mb-2">
              <span className="text-xs text-warmGray-600">Development Progress</span>
            </div>
            <div className="w-full bg-warmGray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blush-500 to-sage-500 h-2 rounded-full animate-pulse" style={{ width: '65%' }}></div>
            </div>
            <div className="text-center mt-2">
              <span className="text-xs text-warmGray-600">65% Complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonGraphic;
