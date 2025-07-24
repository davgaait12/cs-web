"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // CS2-themed carousel slides
  const slides = [
    {
      id: 1,
      title: "Counter-Strike 2 шинэ боломжууд",
      subtitle: "Шинэ график, шинэ уур амьсгал",
      description:
        "Counter-Strike 2-ын хамгийн сүүлийн үеийн график болон physics-ийн хөдөлгүүрээр дэлхийн хамгийн алдартай FPS тоглоомыг шинээр мэдрээрэй.",
      image: "/api/placeholder/1200/600",
      bgColor: "from-orange-900 via-red-900 to-purple-900",
    },
    {
      id: 2,
      title: "Шинэ Map-ууд болон режимүүд",
      subtitle: "Тактик болон стратеги",
      description:
        "Шинээр шинэчлэгдсэн map-ууд болон шинэ тоглоомын режимүүдтэй танилцаж, өөрийн ур чадвараа шалгаарай. Команын хамтын ажиллагаа чухал!",
      image: "/api/placeholder/1200/600",
      bgColor: "from-blue-900 via-purple-900 to-indigo-900",
    },
    {
      id: 3,
      title: "Skin цуглуулга болон худалдаа",
      subtitle: "Өөрийн зэвсгийг тохижуул",
      description:
        "Хамгийн сайхан skin-үүдийг цуглуулж, зэвсгээ онцгой болго. Хяналттай худалдаа хийж, ашиг олоорой.",
      image: "/api/placeholder/1200/600",
      bgColor: "from-green-900 via-teal-900 to-blue-900",
    },
    {
      id: 4,
      title: "Турнир болон тэмцээнүүд",
      subtitle: "Мэргэжлийн түвшинд тоглох",
      description:
        "Дэлхийн шилдэг тоглогчидтой өрсөлдөж, турнирт оролцож, шагнал хүртээрэй. Өөрийн команд байгуулж, алдар нэр олоорой.",
      image: "/api/placeholder/1200/600",
      bgColor: "from-yellow-900 via-orange-900 to-red-900",
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gray-900">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`min-w-full h-full relative bg-gradient-to-br ${slide.bgColor}`}
          >
            {/* Background Image Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundBlendMode: "overlay",
              }}
            ></div>

            {/* Content Container */}
            <div className="container mx-auto max-w-[1200px] px-4 h-full flex items-center relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                {/* Text Content */}
                <div className="text-white space-y-6">
                  <div className="space-y-2">
                    <p className="text-orange-400 font-semibold text-lg tracking-wide uppercase">
                      {slide.subtitle}
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
                      {slide.title}
                    </h1>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                    {slide.description}
                  </p>
                </div>

                {/* Image Content */}
                <div className="relative">
                  <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={600}
                      height={320}
                      className="w-full h-80 object-cover rounded-xl shadow-2xl"
                      priority={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-80 animate-pulse"></div>
                  <div
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-60 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-60"></div>
            <div className="absolute bottom-20 right-20 w-3 h-3 bg-red-400 rounded-full animate-pulse opacity-40"></div>
            <div
              className="absolute top-40 right-10 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-50"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-20 group"
      >
        <svg
          className="w-6 h-6 transform group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-20 group"
      >
        <svg
          className="w-6 h-6 transform group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-orange-400 w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/30">
        <div
          className="h-full bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};
export default Carousel;
