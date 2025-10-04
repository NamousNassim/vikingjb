"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, BookOpen, X } from "lucide-react";
import { MenuItem } from "../ui/MenuCard";
import { MenuCategory, loadMenuData } from "@/lib/menuData";
import Image from "next/image";

interface MenuSectionProps {
  className?: string;
}

export function MenuSection({ className }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load menu data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const categories = await loadMenuData();
        setMenuCategories(categories);
      } catch (err) {
        console.error('Error loading menu data:', err);
        setError('Failed to load menu data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const selectedCategoryData = menuCategories.find(cat => cat.id === selectedCategory);
  const itemsPerPage = 4;
  const totalPages = selectedCategoryData ? Math.ceil(selectedCategoryData.items.length / itemsPerPage) : 0;

  const getCurrentPageItems = () => {
    if (!selectedCategoryData) return [];
    const startIndex = currentPage * itemsPerPage;
    return selectedCategoryData.items.slice(startIndex, startIndex + itemsPerPage);
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const openCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(0);
  };

  const closeBook = () => {
    setSelectedCategory(null);
    setCurrentPage(0);
  };

  // Loading state
  if (loading) {
    return (
      <section id="menu" className={`py-16 md:py-24 bg-gradient-to-br from-red-50 via-white to-red-50 ${className || ''}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Loading our Viking feast...</p>
            <p className="text-gray-500 text-sm mt-2">Preparing the ancient recipes...</p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error || menuCategories.length === 0) {
    return (
      <section id="menu" className={`py-16 md:py-24 bg-gradient-to-br from-red-50 via-white to-red-50 ${className || ''}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <BookOpen className="w-16 h-16 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Menu Currently Unavailable</h3>
            <p className="text-gray-600 mb-4">We're having trouble loading our Viking feast. Please try refreshing the page.</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
            >
              Reload Menu
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className={`py-16 md:py-24 bg-gradient-to-br from-red-50 via-white to-red-50 ${className || ''}`}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <BookOpen className="w-8 h-8 md:w-12 md:h-12 text-red-600" />
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800">
              <span className="runic-text bg-gradient-to-r from-red-600 via-red-800 to-red-600 bg-clip-text text-transparent">
                ᛗᛖᚾᚢ
              </span>
            </h2>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">Our Viking Feast</h3>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
        </div>

        {/* Book Interface */}
        {!selectedCategory ? (
          /* Table of Contents */
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border-4 border-red-100 overflow-hidden book-shadow">
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">Table of Contents</h3>
                <p className="text-red-100 text-center">Choose your culinary adventure</p>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {menuCategories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => openCategory(category.id)}
                        className="group p-6 rounded-xl border-2 border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-white to-red-50"
                      >
                        <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-800 mb-2 text-lg">{category.title}</h4>
                        <p className={`runic-text text-${category.color}-600 text-sm mb-2`}>{category.runicTitle}</p>
                        <p className="text-gray-600 text-sm">{category.items.length} items</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Category Book Pages */
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border-4 border-red-100 overflow-hidden book-shadow min-h-[600px]">
              {/* Book Header */}
              <div className={`bg-gradient-to-r ${selectedCategoryData?.gradient} p-4 md:p-6 relative`}>
                <button
                  onClick={closeBook}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                
                <div className="flex items-center gap-4">
                  {selectedCategoryData && (
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <selectedCategoryData.icon className="w-8 h-8 text-white" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedCategoryData?.title}</h3>
                    <p className="runic-text text-white/80 text-lg">{selectedCategoryData?.runicTitle}</p>
                  </div>
                </div>
              </div>

              {/* Book Content */}
              <div className="p-6 md:p-8">
                {/* Page Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 min-h-[400px]">
                  {getCurrentPageItems().map((item, index) => (
                    <div key={index} className="group bg-gradient-to-br from-red-50 to-white rounded-xl p-4 border-2 border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300">
                      <div className="flex gap-4">
                        <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden border-2 border-red-200 flex-shrink-0">
                          <Image
                            src={item.img}
                            alt={item.name}
                            width={112}
                            height={112}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-gray-800 text-lg leading-tight">{item.name}</h4>
                            <span className={`font-bold text-lg text-${selectedCategoryData?.color}-600 ml-2 flex-shrink-0`}>
                              {item.price}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Page Navigation */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-4">
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 0}
                      className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <div className="flex gap-2">
                      {Array.from({ length: totalPages }, (_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            i === currentPage ? 'bg-red-600' : 'bg-gray-300 hover:bg-red-400'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <button
                      onClick={nextPage}
                      disabled={currentPage === totalPages - 1}
                      className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
                
                <div className="text-center mt-4">
                  <p className="text-gray-500">Page {currentPage + 1} of {totalPages}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .book-shadow {
          box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04),
            inset 0 0 0 1px rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </section>
  );
}