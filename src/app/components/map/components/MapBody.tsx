"use client";
import React from "react";
import Image from "next/image";

const MapBody = () => {
  const maps = [
    {
      id: 1,
      name: "Mirage",
      category: "Active Duty",
      description:
        "Дэлхийн хамгийн алдартай CS2 map. Марокко дахь хуучин хотыг дүрсэлсэн энэхүү газарзүй нь тэнцвэртэй тактикийн боломжууд санал болгодог. Mid control болон site execute-үүд маш чухал.",
      image: "/api/placeholder/800/500",
      layout: "3 Lane (A Site, Mid, B Site)",
      difficulty: "Дунд зэрэг",
      playStyle: "Тактикийн тэнцвэр",
      keyPoints: [
        "Connector control",
        "Mid пэк",
        "Palace тактик",
        "Jungle буталт",
      ],
      smokeVideoId: "AGK4D8W6w2Y", // Real Mirage smoke tutorial
      tips: [
        "Mid-ийг эхэндээ авах нь чухал",
        "A site execute хийхэд palace smoke заавал хэрэгтэй",
        "B site retake хийхэд хамтын ажиллагаа шаардагдана",
        "Connector-аас rotation хурдан хийх боломжтой",
      ],
    },
    {
      id: 2,
      name: "Dust2",
      category: "Active Duty",
      description:
        "Counter-Strike-ын хамгийн iconic map. Ойлгоход хялбар, гэвч эзэмшихэд хүндхэн. Long range зэвсгийн тоглолт чухал байдаг. Beginner-ууд эхлэхэд тохиромжтой.",
      image: "/api/placeholder/800/500",
      layout: "2 Site (Long/Short)",
      difficulty: "Хялбар",
      playStyle: "Aim-based тоглолт",
      keyPoints: [
        "Long control",
        "Short boost",
        "Cat control",
        "B tunnels clear",
      ],
      smokeVideoId: "8vMcCLe8SWo", // Real Dust2 smoke tutorial
      tips: [
        "Long-аас AWP тоглох нь давуу тал өгнө",
        "Short boost-аар тагнуул авах боломжтой",
        "B tunnels-аас гэнэтийн довтолгоо хийж болно",
        "Mid doors timing-г сайн мэдэх хэрэгтэй",
      ],
    },
    {
      id: 3,
      name: "Inferno",
      category: "Active Duty",
      description:
        "Итали дахь хуучин хотын гудамжаар дүрслэгдсэн. Олон angle, хямд гарц, төвөгтэй геометртэй. Team coordination маш чухал. Close range тулаан ихтэй.",
      image: "/api/placeholder/800/500",
      layout: "Complex Multi-level",
      difficulty: "Хүнд",
      playStyle: "Team coordination",
      keyPoints: [
        "Banana control",
        "Apartments clear",
        "Balcony англ",
        "Pit позиц",
      ],
      smokeVideoId: "0b6fNBKdHyU", // Real Inferno smoke tutorial
      tips: [
        "Banana control авах нь B site-ийн гол түлхүүр",
        "Apartments-аас A site руу орох замыг судлах хэрэгтэй",
        "Molotov/HE граната их ашиглагддаг",
        "Balcony болон pit-ийн angle-уудыг анхаарах",
      ],
    },
    {
      id: 4,
      name: "Cache",
      category: "Active Duty",
      description:
        "Цөмийн станц дахь хуучин склад. Гурван lane-тай тодорхой бүтэцтэй. Тактикийн олон янзын боломжууд санал болгодог. Mid control чухал үүрэг гүйцэтгэдэг.",
      image: "/api/placeholder/800/500",
      layout: "3 Lane (A Main, Mid, B Main)",
      difficulty: "Дунд зэрэг",
      playStyle: "Tactical diversity",
      keyPoints: [
        "Mid control",
        "Squeaky door",
        "Truck angle",
        "Heaven position",
      ],
      smokeVideoId: "THCJEc4Vg_o", // Real Cache smoke tutorial
      tips: [
        "Mid control авснаар хоёр site руу эргэлт хийх боломжтой",
        "Squeaky door-оор A site руу гэнэтийн довтолгоо",
        "B site-д truck бол чухал cover позиц",
        "Heaven-аас A site-ийг бүрэн харах боломжтай",
      ],
    },
    {
      id: 5,
      name: "Overpass",
      category: "Active Duty",
      description:
        "Гэрман дахь хуучин гүүрний дор байрладаг. Vertical gameplay ихтэй, олон давхар бүтэцтэй. Water control болон connector маш чухал элементүүд.",
      image: "/api/placeholder/800/500",
      layout: "Vertical Multi-level",
      difficulty: "Хүнд",
      playStyle: "Vertical control",
      keyPoints: [
        "Water control",
        "Monster position",
        "Heaven angle",
        "Connector route",
      ],
      smokeVideoId: "PAUIb18eN8k", // Real Overpass smoke tutorial
      tips: [
        "Water-ийг авснаар B site руу давуу тал олж авна",
        "Monster позицоос A site-ийг хянах боломжтой",
        "Connector ашиглан хурдан rotation хийх",
        "Boost spot-ууд ихтэй, хамтарч тоглох хэрэгтэй",
      ],
    },
    {
      id: 6,
      name: "Vertigo",
      category: "Active Duty",
      description:
        "Өндөр барилгын дээд давхарт байрладаг. Хоёр site хоорондын зайнаар тэмдэглэгддэг. CT-д давуу талтай гэж тооцогддог. Ramp control чухал.",
      image: "/api/placeholder/800/500",
      layout: "2 Separated Sites",
      difficulty: "Дунд зэрэг",
      playStyle: "Site isolation",
      keyPoints: ["Ramp control", "Mid boost", "A site execute", "B site hold"],
      smokeVideoId: "tUbTLN9HZqc", // Real Vertigo smoke tutorial
      tips: [
        "Ramp-аар A site руу орох гол зам",
        "Mid boost-аар мэдээлэл цуглуулах боломжтой",
        "Site хоорондын эргэлт удаан байдаг",
        "Height advantage-г ашиглах нь чухал",
      ],
    },
    {
      id: 7,
      name: "Ancient",
      category: "Active Duty",
      description:
        "Ацтекийн хуучин дурсгалт газрыг дүрсэлсэн. Шинэ нэмэгдсэн map бөгөөд олон янзын тактикийн боломжууд санал болгодог. Mid control маш чухал.",
      image: "/api/placeholder/800/500",
      layout: "3 Zone Control",
      difficulty: "Дунд зэрэг",
      playStyle: "Zone control",
      keyPoints: [
        "Mid control",
        "Donut rotation",
        "A site execute",
        "B site retake",
      ],
      smokeVideoId: "sP8_JKxkQv4", // Real Ancient smoke tutorial
      tips: [
        "Mid-ийг авснаар хоёр site руу pressure өгөх боломжтой",
        "Donut area ашиглан rotation хийх",
        "A site-д олон angle байдаг",
        "B site retake хийхэд coordination шаардагдана",
      ],
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    const colors: { [key: string]: string } = {
      Хялбар: "text-green-400",
      "Дунд зэрэг": "text-yellow-400",
      Хүнд: "text-red-400",
    };
    return colors[difficulty] || "text-gray-400";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 py-16">
      <div className="container mx-auto max-w-[1200px] px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent mb-6">
            CS2 Map Guide
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Counter-Strike 2-ын бүх map-уудын дэлгэрэнгүй танилцуулга. Тактик,
            smoke tutorial болон pro tip-үүдтэй
          </p>
        </div>

        {/* Maps Grid */}
        <div className="space-y-16">
          {maps.map((map) => (
            <div
              key={map.id}
              className="bg-gradient-to-br from-slate-800 to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-700 group"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Map Image */}
                <div className="relative overflow-hidden h-96 lg:h-auto">
                  <Image
                    src={map.image}
                    alt={map.name}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Map Name Overlay */}
                  <div className="absolute bottom-6 left-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                      {map.name}
                    </h2>
                    <p className="text-orange-400 text-lg font-semibold mt-2">
                      {map.category}
                    </p>
                  </div>

                  {/* Difficulty Badge */}
                  <div className="absolute top-6 right-6">
                    <span
                      className={`bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg font-semibold ${getDifficultyColor(
                        map.difficulty
                      )}`}
                    >
                      {map.difficulty}
                    </span>
                  </div>
                </div>

                {/* Map Info */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {map.description}
                    </p>

                    {/* Map Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="text-orange-400 font-semibold">Layout:</p>
                        <p className="text-gray-300">{map.layout}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-orange-400 font-semibold">
                          Play Style:
                        </p>
                        <p className="text-gray-300">{map.playStyle}</p>
                      </div>
                    </div>

                    {/* Key Points */}
                    <div>
                      <p className="text-orange-400 font-semibold mb-3">
                        Гол цэгүүд:
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {map.keyPoints.map((point, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm"
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extended Content */}
              <div className="border-t border-gray-600">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Smoke Tutorial Video */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <svg
                        className="w-6 h-6 mr-2 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      Smoke Tutorial
                    </h3>
                    <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${map.smokeVideoId}`}
                        title={`${map.name} Smoke Tutorial`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>

                  {/* Pro Tips */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <svg
                        className="w-6 h-6 mr-2 text-yellow-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                      Pro Tips
                    </h3>
                    <div className="space-y-4">
                      {map.tips.map((tip, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-3 p-3 bg-gray-700/50 rounded-lg"
                        >
                          <span className="bg-orange-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {tip}
                          </p>
                        </div>
                      ))}
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

export default MapBody;
