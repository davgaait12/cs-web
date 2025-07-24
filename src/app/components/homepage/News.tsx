"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const News = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900">
      <div className="container mx-auto max-w-[1200px] px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Сүүлийн үеийн мэдээ
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
          </div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Counter-Strike 2-ын хамгийн сүүлийн үеийн мэдээ, шинэчлэл болон
            турнирийн мэдээллийг эндээс авах боломжтой
          </p>
        </div>

        {/* Main News Article */}
        <div className="bg-gradient-to-br from-slate-800 to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-700 group mb-8">
          {/* Large Hero Image */}
          <div className="relative overflow-hidden h-[400px] md:h-[700px]">
            <Image
              src="/api/placeholder/1200/400"
              alt="Counter-Strike 2 Major Tournament"
              width={1200}
              height={700}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Date */}
            <div className="absolute top-6 right-6">
              <span className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium">
                2025-01-20
              </span>
            </div>
          </div>

          {/* Content Below Image */}
          <div className="p-8">
            <div className="space-y-6">
              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                Counter-Strike 2: Шинэ Major Tournament 2025
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed">
                2025 оны хамгийн том Counter-Strike 2 турнир болох Major
                Championship-д дэлхийн өнцөг булан бүрээс шилдэг багууд цугларч
                байна. Турнир нь 3 долоо хоног үргэлжлэх бөгөөд шагналын сан нь
                2 сая доллар байх юм. Дэлхийн 24 шилдэг баг өрсөлдөх энэхүү
                турнир CS2-ын түүхэн дэх хамгийн том үйл явдал болно.
              </p>

              {/* Meta Info and Button */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-600">
                <div className="flex items-center space-x-6 text-gray-400">
                  <span className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Админ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second News Article */}
        <div className="bg-gradient-to-br from-slate-800 to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-700 group mb-8">
          {/* Large Hero Image */}
          <div className="relative overflow-hidden h-[400px] md:h-[700px]">
            <Image
              src="/api/placeholder/1200/400"
              alt="Шинэ Map Updates"
              width={1200}
              height={700}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Date */}
            <div className="absolute top-6 right-6">
              <span className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium">
                2025-01-18
              </span>
            </div>
          </div>

          {/* Content Below Image */}
          <div className="p-8">
            <div className="space-y-6">
              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                Ancient Map: Шинэ тактикийн боломжууд
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed">
                Ancient map-д том өөрчлөлт орж, шинэ тактикууд шаардлагатай
                боллоо. Map-ын геометр болон timing-үүд өөрчлөгдсөний улмаас
                багууд шинэ стратеги боловсруулах шаардлагатай болжээ. Энэхүү
                өөрчлөлт нь тоглоомын динамикийг бүрэн өөрчлөх юм.
              </p>

              {/* Meta Info and Button */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-600">
                <div className="flex items-center space-x-6 text-gray-400">
                  <span className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Админ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third News Article */}
        <div className="bg-gradient-to-br from-slate-800 to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-700 group mb-8">
          {/* Large Hero Image */}
          <div className="relative overflow-hidden h-[400px] md:h-[700px]">
            <Image
              src="/api/placeholder/1200/400"
              alt="Skin Market News"
              width={1200}
              height={700}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Date */}
            <div className="absolute top-6 right-6">
              <span className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium">
                2025-01-16
              </span>
            </div>
          </div>

          {/* Content Below Image */}
          <div className="p-8">
            <div className="space-y-6">
              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 leading-tight">
                Dreams & Nightmares: Шинэ коллекцын skin-үүд
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed">
                Dreams & Nightmares коллекцоос гайхамшигтай шинэ skin-үүд гарч
                ирлээ. Энэ удаагийн коллекц нь community-ийн санал болгосон
                дизайнуудаас бүтээгдсэн бөгөөд өвөрмөц загвар, өнгөний хослолоор
                онцлог юм. Зах зээл дээр эдгээр skin-үүдийн үнэ хурдан өсч
                байна. Dreams & Nightmares коллекцоос гайхамшигтай шинэ skin-үүд
                гарч ирлээ. Энэ удаагийн коллекц нь community-ийн санал болгосон
                дизайнуудаас бүтээгдсэн бөгөөд өвөрмөц загвар, өнгөний хослолоор
                онцлог юм. Зах зээл дээр эдгээр skin-үүдийн үнэ хурдан өсч
                байна.
              </p>

              {/* Meta Info and Button */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-600">
                <div className="flex items-center space-x-6 text-gray-400">
                  <span className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Админ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* View All News Button */}
        <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Бүх мэдээг үзэх
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
