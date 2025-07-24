"use client";
import React, { useState } from "react";
import Image from "next/image";

const ProductBody = () => {
  const [activeFilter, setActiveFilter] = useState("Бүгд");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories = [
    { name: "Бүгд", count: 24 },
    { name: "Mouse", count: 6 },
    { name: "Keyboard", count: 5 },
    { name: "Headset", count: 4 },
    { name: "Mouse Pad", count: 4 },
    { name: "Monitor", count: 3 },
    { name: "Chair", count: 2 },
  ];

  const products = [
    {
      id: 1,
      name: "Logitech G Pro X Superlight",
      category: "Mouse",
      price: 299000,
      originalPrice: 349000,
      rating: 4.9,
      reviews: 2847,
      image: "/api/placeholder/400/300",
      inStock: true,
      isNew: true,
      features: ["25,600 DPI", "Wireless", "63g хөнгөн", "Pro Gaming"],
      brand: "Logitech G",
    },
    {
      id: 2,
      name: "SteelSeries Arctis Pro Wireless",
      category: "Headset",
      price: 589000,
      originalPrice: 689000,
      rating: 4.8,
      reviews: 1523,
      image: "/api/placeholder/400/300",
      inStock: true,
      isNew: false,
      features: ["Hi-Res Audio", "Wireless", "40 цаг battery", "Pro Grade"],
      brand: "SteelSeries",
    },
    {
      id: 3,
      name: "Razer Huntsman V3 Pro",
      category: "Keyboard",
      price: 459000,
      originalPrice: null,
      rating: 4.7,
      reviews: 892,
      image: "/api/placeholder/400/300",
      inStock: true,
      isNew: true,
      features: ["Optical Switch", "8000Hz Polling", "RGB", "Tournament Ready"],
      brand: "Razer",
    },
    {
      id: 4,
      name: "SteelSeries QcK Heavy XXL",
      category: "Mouse Pad",
      price: 89000,
      originalPrice: 109000,
      rating: 4.6,
      reviews: 3241,
      image: "/api/placeholder/400/300",
      inStock: true,
      isNew: false,
      features: ["90x40cm", "6mm зузаан", "Anti-slip", "Pro Gaming"],
      brand: "SteelSeries",
    },
    {
      id: 5,
      name: "ASUS ROG Swift PG259QN",
      category: "Monitor",
      price: 1299000,
      originalPrice: 1499000,
      rating: 4.9,
      reviews: 567,
      image: "/api/placeholder/400/300",
      inStock: false,
      isNew: false,
      features: ["360Hz", "24.5 inch", "1ms", "G-SYNC"],
      brand: "ASUS ROG",
    },
    {
      id: 6,
      name: "Razer DeathAdder V3 Pro",
      category: "Mouse",
      price: 389000,
      originalPrice: 429000,
      rating: 4.8,
      reviews: 1876,
      image: "/api/placeholder/400/300",
      inStock: true,
      isNew: false,
      features: ["30,000 DPI", "Wireless", "90 цаг battery", "Ergonomic"],
      brand: "Razer",
    },
    {
      id: 7,
      name: "Logitech G915 TKL",
      category: "Keyboard",
      price: 549000,
      originalPrice: null,
      rating: 4.7,
      reviews: 1245,
      image: "/api/placeholder/400/300",
      inStock: true,
      isNew: false,
      features: ["Wireless", "Low Profile", "RGB", "40 цаг battery"],
      brand: "Logitech G",
    },
    {
      id: 8,
      name: "HyperX Cloud Alpha S",
      category: "Headset",
      price: 259000,
      originalPrice: 299000,
      rating: 4.6,
      reviews: 2156,
      image: "/api/placeholder/400/300",
      inStock: true,
      isNew: false,
      features: [
        "7.1 Surround",
        "Dual Chamber",
        "Detachable Mic",
        "Comfortable",
      ],
      brand: "HyperX",
    },
    {
      id: 9,
      name: "Secretlab Titan Evo 2022",
      category: "Chair",
      price: 1899000,
      originalPrice: null,
      rating: 4.9,
      reviews: 892,
      image: "/api/placeholder/400/300",
      inStock: true,
      isNew: true,
      features: [
        "Ergonomic",
        "Premium Materials",
        "4D Armrests",
        "12 жилийн warranty",
      ],
      brand: "Secretlab",
    },
    {
      id: 10,
      name: "Corsair MM300 Extended",
      category: "Mouse Pad",
      price: 69000,
      originalPrice: 79000,
      rating: 4.5,
      reviews: 4523,
      image: "/api/placeholder/400/300",
      inStock: true,
      isNew: false,
      features: ["93x30cm", "3mm зузаан", "Anti-fray", "High Performance"],
      brand: "Corsair",
    },
    {
      id: 11,
      name: "Finalmouse Starlight-12",
      category: "Mouse",
      price: 449000,
      originalPrice: null,
      rating: 4.8,
      reviews: 1034,
      image: "/api/placeholder/400/300",
      inStock: false,
      isNew: true,
      features: ["47g хөнгөн", "Magnesium Body", "8000Hz", "Limited Edition"],
      brand: "Finalmouse",
    },
    {
      id: 12,
      name: "ASUS ROG Strix Scope RX",
      category: "Keyboard",
      price: 329000,
      originalPrice: 369000,
      rating: 4.6,
      reviews: 687,
      image: "/api/placeholder/400/300",
      inStock: true,
      isNew: false,
      features: ["Red Switch", "RGB", "Aluminum Frame", "Tournament Grade"],
      brand: "ASUS ROG",
    },
  ];

  const filteredProducts =
    activeFilter === "Бүгд"
      ? products
      : products.filter((product) => product.category === activeFilter);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Mouse: "from-blue-500 to-cyan-600",
      Keyboard: "from-purple-500 to-pink-600",
      Headset: "from-green-500 to-teal-600",
      "Mouse Pad": "from-orange-500 to-red-600",
      Monitor: "from-indigo-500 to-purple-600",
      Chair: "from-gray-500 to-slate-600",
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("mn-MN").format(price) + "₮";
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="w-4 h-4 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
          />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 py-16">
      <div className="container mx-auto max-w-[1200px] px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Gaming Equipment Store
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Counter-Strike 2 тоглоход шаардлагатай мэргэжлийн тоног төхөөрөмж.
            Gaming mouse, keyboard, headset болон бусад equipment-ууд
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

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-gradient-to-b from-slate-800 to-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-700 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-2"></div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`bg-gradient-to-r ${getCategoryColor(
                      product.category
                    )} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                  >
                    {product.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-orange-500/20 flex items-center justify-center transition-all duration-300 ${
                    hoveredCard === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3"></div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="space-y-4">
                  {/* Brand */}
                  <p className="text-orange-400 text-sm font-semibold">
                    {product.brand}
                  </p>

                  {/* Product Name */}
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Rating and Reviews */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-yellow-400 font-semibold text-sm">
                      {product.rating}
                    </span>
                    <span className="text-gray-400 text-sm">
                      ({product.reviews} үнэлгээ)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 pt-2">
                    <span className="text-2xl font-bold text-orange-400">
                      {formatPrice(product.price)}
                    </span>
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

export default ProductBody;
