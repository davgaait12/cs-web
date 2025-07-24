"use client";
import React, { useState } from "react";
import Image from "next/image";

const NewsBody = () => {
  const [activeFilter, setActiveFilter] = useState("Бүгд");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories = [
    { name: "Бүгд", count: 14 },
    { name: "Турнир", count: 6 },
    { name: "Skin", count: 3 },
    { name: "Map", count: 2 },
    { name: "Тоглогч", count: 2 },
    { name: "Баг", count: 1 },
  ];

  const newsData = [
    {
      id: 1,
      title: "Counter-Strike 2: Шинэ Major Tournament 2025",
      excerpt:
        "Дэлхийн хамгийн том CS2 турнир эхлэхэд бэлтгэл хангаж байна. $2 сая долларын шагналтай энэхүү турнирт дэлхийн шилдэг 24 баг оролцоно.",
      image: "/api/placeholder/400/250",
      date: "2025-01-20",
      category: "Турнир",
      readTime: "5 мин",
      author: "Админ",
      featured: true,
    },
    {
      id: 13,
      title: "Counter-Strike 2: Шинэ Major Tournament 2025",
      excerpt:
        "Дэлхийн хамгийн том CS2 турнир эхлэхэд бэлтгэл хангаж байна. $2 сая долларын шагналтай энэхүү турнирт дэлхийн шилдэг 24 баг оролцоно.",
      image: "/api/placeholder/400/250",
      date: "2025-01-20",
      category: "Турнир",
      readTime: "5 мин",
      author: "Админ",
      featured: true,
    },
    {
      id: 14,
      title: "Counter-Strike 2: Шинэ Major Tournament 2025",
      excerpt:
        "Дэлхийн хамгийн том CS2 турнир эхлэхэд бэлтгэл хангаж байна. $2 сая долларын шагналтай энэхүү турнирт дэлхийн шилдэг 24 баг оролцоно.",
      image: "/api/placeholder/400/250",
      date: "2025-01-20",
      category: "Турнир",
      readTime: "5 мин",
      author: "Админ",
      featured: true,
    },
    {
      id: 2,
      title: "Ancient Map: Шинэ тактикийн боломжууд",
      excerpt:
        "Ancient map-д том өөрчлөлт орж, шинэ тактикууд шаардлагатай боллоо. Map-ын геометр болон timing-үүд өөрчлөгдсөн.",
      image: "/api/placeholder/400/250",
      date: "2025-01-18",
      category: "Map",
      readTime: "3 мин",
      author: "Болд",
    },
    {
      id: 3,
      title: "Dreams & Nightmares: Шинэ коллекцын skin-үүд",
      excerpt:
        "Dreams & Nightmares коллекцоос гайхамшигтай шинэ skin-үүд гарч ирлээ. Community-ийн санал болгосон дизайнууд.",
      image: "/api/placeholder/400/250",
      date: "2025-01-16",
      category: "Skin",
      readTime: "2 мин",
      author: "Батбаяр",
    },
    {
      id: 4,
      title: "Team Vitality: Шинэ монгол тоглогчтой гэрээ",
      excerpt:
        "Европын шилдэг баг анх удаа монгол тоглогчтой гэрээ байгуулав. Энэ нь монголын CS2-ын түүхэнд шинэ хуудас нээж байна.",
      image: "/api/placeholder/400/250",
      date: "2025-01-14",
      category: "Баг",
      readTime: "4 мин",
      author: "Админ",
    },
    {
      id: 5,
      title: "S1mple: Карьерийн шинэ дээд амжилт",
      excerpt:
        "Дэлхийн хамгийн шилдэг тоглогч s1mple шинэ рекорд тогтоов. Нэг тоглоомд 50+ фраг авсан анхны тоглогч болов.",
      image: "/api/placeholder/400/250",
      date: "2025-01-12",
      category: "Тоглогч",
      readTime: "3 мин",
      author: "Болд",
    },
    {
      id: 6,
      title: "Mirage Map: Visual шинэчлэл",
      excerpt:
        "Хамгийн алдартай map болох Mirage-д visual шинэчлэл орлоо. Шинэ текстур, гэрэлтүүлэг нэмэгдсэн.",
      image: "/api/placeholder/400/250",
      date: "2025-01-10",
      category: "Map",
      readTime: "2 мин",
      author: "Батбаяр",
    },
    {
      id: 7,
      title: "AK-47 Redline: Үнийн өсөлт",
      excerpt:
        "Хамгийн алдартай skin-үүдийн нэг болох AK-47 Redline-ийн үнэ 40% өссөн. Коллекционерууд идэвхтэй худалдаж байна.",
      image: "/api/placeholder/400/250",
      date: "2025-01-08",
      category: "Skin",
      readTime: "3 мин",
      author: "Болд",
    },
    {
      id: 8,
      title: "PGL Major: Монголын баг оролцоно",
      excerpt:
        "Анх удаа монголын баг олон улсын Major турнирт оролцох эрх авлаа. Энэ нь манай улсын CS2-ын түүхэнд шинэ үе.",
      image: "/api/placeholder/400/250",
      date: "2025-01-06",
      category: "Турнир",
      readTime: "6 мин",
      author: "Админ",
    },
    {
      id: 9,
      title: "ZywOo: Шинэ MVP award",
      excerpt:
        "Францын алдарт тоглогч ZywOo дараалсан 3 дахь MVP award хүртэв. Түүний тогтвортой тоглолт гайхалтай.",
      image: "/api/placeholder/400/250",
      date: "2025-01-04",
      category: "Тоглогч",
      readTime: "4 мин",
      author: "Батбаяр",
    },
    {
      id: 10,
      title: "Knife Collection: Шинэ хутганы дизайн",
      excerpt:
        "Valve шинэ хутганы коллекц танилцуулав. Karambit, Butterfly, Bayonet-ийн шинэ өнгө, загварууд гарлаа.Valve шинэ хутганы коллекц танилцуулав. Karambit, Butterfly, Bayonet-ийн шинэ өнгө, загварууд гарлааValve шинэ хутганы коллекц танилцуулав. Karambit, Butterfly, Bayonet-ийн шинэ өнгө, загварууд гарлааValve шинэ хутганы коллекц танилцуулав. Karambit, Butterfly, Bayonet-ийн шинэ өнгө, загварууд гарлаа",
      image: "/api/placeholder/400/250",
      date: "2025-01-02",
      category: "Skin",

      author: "Болд",
    },
    {
      id: 11,
      title: "IEM Katowice 2025: Бүртгэл эхэллээ",
      excerpt:
        "Жилийн хамгийн том турнируудын нэг болох IEM Katowice 2025-ын бүртгэл эхэллээ. 32 баг өрсөлдөнө.",
      image: "/api/placeholder/400/250",
      date: "2024-12-30",
      category: "Турнир",
      readTime: "4 мин",
      author: "Админ",
    },
    {
      id: 12,
      title: "BLAST Premier: Дүгнэлт",
      excerpt:
        "2024 оны BLAST Premier-ийн дүгнэлт. Хамгийн шилдэг тоглогчид, багууд, тоглолтын статистик.",
      image: "/api/placeholder/400/250",
      date: "2024-12-28",
      category: "Турнир",
      readTime: "7 мин",
      author: "Батбаяр",
    },
  ];

  const filteredNews =
    activeFilter === "Бүгд"
      ? newsData
      : newsData.filter((news) => news.category === activeFilter);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Турнир: "from-orange-500 to-red-600",
      Skin: "from-green-500 to-teal-600",
      Map: "from-blue-500 to-purple-600",
      Тоглогч: "from-yellow-500 to-orange-600",
      Баг: "from-purple-500 to-pink-600",
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 py-16">
      <div className="container mx-auto max-w-[1200px] px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Мэдээ мэдээлэл
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Counter-Strike 2-ын хамгийн сүүлийн үеийн мэдээ, турнир, skin
            market, тоглогчдын мэдээлэл болон бусад сонирхолтой мэдээллүүд
          </p>
        </div>

        {/* Filter Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveFilter(category.name)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === category.name
                    ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg scale-105"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <span>{category.name}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    activeFilter === category.name
                      ? "bg-white/20"
                      : "bg-orange-500 text-white"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured News (First item if "Бүгд" is selected) */}
        {activeFilter === "Бүгд" && filteredNews.length > 0 && (
          <div className="mb-16"></div>
        )}

        {/* News Grid */}
        <div className="space-y-12">
          {(activeFilter === "Бүгд" ? filteredNews.slice(1) : filteredNews).map(
            (item, index) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-slate-800 to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-700 group"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Large Hero Image */}
                <div className="relative overflow-hidden h-[400px] md:h-[700px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={700}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span
                      className={`bg-gradient-to-r ${getCategoryColor(
                        item.category
                      )} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}
                    >
                      {item.category}
                    </span>
                  </div>

                  <div
                    className={`absolute inset-0 bg-orange-500/10 flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === index ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>

                {/* Content Below Image */}
                <div className="p-8">
                  <div className="space-y-6">
                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {item.excerpt}
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
                          {item.author}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Load More Button */}
        {filteredNews.length > 0 && (
          <div className="text-center mt-12">
            <button className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Илүү ихийг үзэх
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
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsBody;
