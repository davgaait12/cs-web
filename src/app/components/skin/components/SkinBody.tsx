"use client";
import React, { useState } from "react";
import Image from "next/image";

const SkinBody = () => {
  const [activeFilter, setActiveFilter] = useState("Бүгд");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [priceFilter, setPriceFilter] = useState("Бүгд");

  const categories = [
    { name: "Бүгд", count: 20 },
    { name: "AK-47", count: 4 },
    { name: "M4A4", count: 3 },
    { name: "AWP", count: 3 },
    { name: "Glock-18", count: 2 },
    { name: "Knife", count: 4 },
    { name: "Gloves", count: 2 },
    { name: "Pistol", count: 2 },
  ];

  const priceRanges = [
    { name: "Бүгд", min: 0, max: Infinity },
    { name: "< $50", min: 0, max: 50 },
    { name: "$50 - $200", min: 50, max: 200 },
    { name: "$200 - $500", min: 200, max: 500 },
    { name: "$500+", min: 500, max: Infinity },
  ];

  const skins = [
    {
      id: 1,
      name: "AK-47 | Redline",
      weapon: "AK-47",
      rarity: "Classified",
      condition: "Field-Tested",
      price: 89.5,
      image: "/api/placeholder/400/300",
      collection: "Huntsman Collection",
    },
    {
      id: 2,
      name: "Karambit | Doppler",
      weapon: "Knife",
      rarity: "Covert",
      condition: "Factory New",
      price: 1250.0,
      image: "/api/placeholder/400/300",
      collection: "Chroma Collection",
    },
    {
      id: 3,
      name: "AWP | Dragon Lore",
      weapon: "AWP",
      rarity: "Covert",
      condition: "Minimal Wear",
      price: 4250.0,
      image: "/api/placeholder/400/300",
      collection: "Cobblestone Collection",
    },
    {
      id: 4,
      name: "M4A4 | Howl",
      weapon: "M4A4",
      rarity: "Contraband",
      condition: "Field-Tested",
      price: 3200.0,
      image: "/api/placeholder/400/300",
      collection: "Huntsman Collection",
    },
    {
      id: 5,
      name: "Glock-18 | Fade",
      weapon: "Glock-18",
      rarity: "Restricted",
      condition: "Factory New",
      price: 275.0,
      image: "/api/placeholder/400/300",
      collection: "Dust Collection",
    },
    {
      id: 6,
      name: "Sport Gloves | Pandora's Box",
      weapon: "Gloves",
      rarity: "Extraordinary",
      condition: "Field-Tested",
      price: 1850.0,
      image: "/api/placeholder/400/300",
      collection: "Glove Collection",
    },
    {
      id: 7,
      name: "AK-47 | Fire Serpent",
      weapon: "AK-47",
      rarity: "Covert",
      condition: "Minimal Wear",
      price: 2100.0,
      image: "/api/placeholder/400/300",
      collection: "Bravo Collection",
    },
    {
      id: 8,
      name: "Butterfly Knife | Tiger Tooth",
      weapon: "Knife",
      rarity: "Covert",
      condition: "Factory New",
      price: 1650.0,
      image: "/api/placeholder/400/300",
      collection: "Chroma Collection",
    },
    {
      id: 9,
      name: "AWP | Asiimov",
      weapon: "AWP",
      rarity: "Covert",
      condition: "Field-Tested",
      price: 125.0,
      image: "/api/placeholder/400/300",
      collection: "Phoenix Collection",
    },
    {
      id: 10,
      name: "M4A4 | Neo-Noir",
      weapon: "M4A4",
      rarity: "Covert",
      condition: "Factory New",
      price: 185.0,
      image: "/api/placeholder/400/300",
      collection: "Canals Collection",
    },
    {
      id: 11,
      name: "Glock-18 | Water Elemental",
      weapon: "Glock-18",
      rarity: "Restricted",
      condition: "Minimal Wear",
      price: 15.5,
      image: "/api/placeholder/400/300",
      collection: "Breakout Collection",
    },
    {
      id: 12,
      name: "Driver Gloves | King Snake",
      weapon: "Gloves",
      rarity: "Extraordinary",
      condition: "Minimal Wear",
      price: 850.0,
      image: "/api/placeholder/400/300",
      collection: "Glove Collection",
    },
    {
      id: 13,
      name: "AK-47 | Vulcan",
      weapon: "AK-47",
      rarity: "Classified",
      condition: "Factory New",
      price: 465.0,
      image: "/api/placeholder/400/300",
      collection: "Phoenix Collection",
    },
    {
      id: 14,
      name: "M4A4 | Asiimov",
      weapon: "M4A4",
      rarity: "Covert",
      condition: "Battle-Scarred",
      price: 95.0,
      image: "/api/placeholder/400/300",
      collection: "Operation Phoenix",
    },
    {
      id: 15,
      name: "AWP | Hyper Beast",
      weapon: "AWP",
      rarity: "Covert",
      condition: "Minimal Wear",
      price: 165.0,
      image: "/api/placeholder/400/300",
      collection: "Falchion Collection",
    },
    {
      id: 16,
      name: "Gut Knife | Doppler",
      weapon: "Knife",
      rarity: "Covert",
      condition: "Factory New",
      price: 285.0,
      image: "/api/placeholder/400/300",
      collection: "Chroma Collection",
    },
    {
      id: 17,
      name: "Desert Eagle | Blaze",
      weapon: "Pistol",
      rarity: "Restricted",
      condition: "Factory New",
      price: 425.0,
      image: "/api/placeholder/400/300",
      collection: "Dust Collection",
    },
    {
      id: 18,
      name: "AK-47 | Bloodsport",
      weapon: "AK-47",
      rarity: "Classified",
      condition: "Minimal Wear",
      price: 185.0,
      image: "/api/placeholder/400/300",
      collection: "Spectrum Collection",
    },
    {
      id: 19,
      name: "USP-S | Kill Confirmed",
      weapon: "Pistol",
      rarity: "Covert",
      condition: "Field-Tested",
      price: 65.0,
      image: "/api/placeholder/400/300",
      collection: "Shadow Collection",
    },
    {
      id: 20,
      name: "Talon Knife | Fade",
      weapon: "Knife",
      rarity: "Covert",
      condition: "Factory New",
      price: 1950.0,
      image: "/api/placeholder/400/300",
      collection: "Horizon Collection",
    },
  ];

  const getRarityColor = (rarity: string) => {
    const colors: { [key: string]: string } = {
      Consumer: "from-gray-400 to-gray-500",
      Industrial: "from-blue-400 to-blue-500",
      "Mil-Spec": "from-blue-500 to-blue-600",
      Restricted: "from-purple-500 to-purple-600",
      Classified: "from-pink-500 to-pink-600",
      Covert: "from-red-500 to-red-600",
      Extraordinary: "from-yellow-400 to-yellow-500",
      Contraband: "from-orange-500 to-red-600",
    };
    return colors[rarity] || "from-gray-500 to-gray-600";
  };

  const getConditionColor = (condition: string) => {
    const colors: { [key: string]: string } = {
      "Factory New": "text-green-400",
      "Minimal Wear": "text-green-300",
      "Field-Tested": "text-yellow-400",
      "Well-Worn": "text-orange-400",
      "Battle-Scarred": "text-red-400",
    };
    return colors[condition] || "text-gray-400";
  };

  const filteredSkins = skins.filter((skin) => {
    const categoryMatch =
      activeFilter === "Бүгд" || skin.weapon === activeFilter;
    const selectedRange = priceRanges.find(
      (range) => range.name === priceFilter
    );
    const priceMatch = selectedRange
      ? skin.price >= selectedRange.min && skin.price <= selectedRange.max
      : true;

    return categoryMatch && priceMatch;
  });

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 py-16">
      <div className="container mx-auto max-w-[1200px] px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent mb-6">
            CS2 Skin Collection
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Хэт үнэтэй биш skin-үүд! Гоёмсог харагдацтай болжих skin craft
            combo-нууд.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-6">
          {/* Category Filter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Зэвсгийн төрөл
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveFilter(category.name)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
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

          {/* Price Filter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Үнийн хүрээ
            </h3>
            <div className="flex flex-wrap gap-3">
              {priceRanges.map((range) => (
                <button
                  key={range.name}
                  onClick={() => setPriceFilter(range.name)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    priceFilter === range.name
                      ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg scale-105"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {range.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skins Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkins.map((skin, index) => (
            <div
              key={skin.id}
              className="bg-gradient-to-b from-slate-800 to-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-700 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Skin Image */}
              <div className="relative overflow-hidden h-56">
                <Image
                  src={skin.image}
                  alt={skin.name}
                  width={400}
                  height={224}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Rarity Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`bg-gradient-to-r ${getRarityColor(
                      skin.rarity
                    )} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}
                  >
                    {skin.rarity}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-orange-500/20 flex items-center justify-center transition-all duration-300 ${
                    hoveredCard === index ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
              </div>

              {/* Skin Info */}
              <div className="p-6">
                <div className="space-y-3">
                  {/* Skin Name */}
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                    {skin.name}
                  </h3>

                  {/* Condition */}
                  <p
                    className={`font-semibold ${getConditionColor(
                      skin.condition
                    )}`}
                  >
                    {skin.condition}
                  </p>

                  {/* Collection */}
                  <p className="text-gray-400 text-sm">{skin.collection}</p>

                  {/* Pricing */}
                  <div className="space-y-2 pt-2 border-t border-gray-600">
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-bold text-lg">
                        {formatPrice(skin.price)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkinBody;
