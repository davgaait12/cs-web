"use client";
import React from "react";
import Image from "next/image";

const AboutusBody = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Батбаяр",
      role: "Гүйцетгэх захирал & Контент менежер",
      bio: "Counter-Strike тоглоомыг 8 жилийн турш тоглож ирсэн туршлагатай тоглогч. CS2 community-г хөгжүүлэх, шинэ тоглогчдод туслах зорилготой.",
      image: "/api/placeholder/300/300",
      specialties: ["Tактик & Стратеги", "Map талдлага", "Багийн удирдлага"],
      social: {
        youtube: "https://youtube.com/@batbayar_cs2",
        instagram: "https://instagram.com/batbayar_gaming",
        facebook: "https://facebook.com/batbayar.cs2",
        gmail: "batbayar@cs2hub.mn",
      },
      achievements: [
        "Монголын шилдэг 10 тоглогч",
        "5000+ тоглоомын туршлага",
        "ESL турнирт оролцсон",
      ],
    },
    {
      id: 2,
      name: "Болд",
      role: "Техникийн захирал & Skin Market мэргэжилтэн",
      bio: "Вэб хөгжүүлэлт болон CS2 skin market-ийн мэргэжилтэн. Skin-ийн үнэ, trend-үүдийг шинжлэх, худалдааны зөвлөгөө өгдөг.",
      image: "/api/placeholder/300/300",
      specialties: [
        "Skin Market талдлага",
        "Вэб хөгжүүлэлт",
        "Техникийн дэмжлэг",
      ],
      social: {
        youtube: "https://youtube.com/@bold_skins",
        instagram: "https://instagram.com/bold_cs2market",
        facebook: "https://facebook.com/bold.skintrader",
        gmail: "bold@cs2hub.mn",
      },
      achievements: [
        "10000+ skin худалдсан",
        "Market prediction 85% зөв",
        "Community 50k+ дагагч",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900/20 via-red-900/20 to-purple-900/20">
        <div className="container mx-auto max-w-[1200px] px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Бидний тухай
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Бид Counter-Strike 2-ын Монголын хамгийн том online сүлжээ юм. Манай
            зорилго бол CS2 community-г хөгжүүлэх, тоглогчдод туслах, мэдээлэл
            хуваалцах явдал юм.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-slate-800 to-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Бидний эрхэм зорилго
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                Монголын CS2 community-г дэлхийн түвшинд хүргэх, тоглогчдын ур
                чадварыг дээшлүүлэх, спортын сэтгэлгээ төлөвшүүлэх зорилготой
                ажиллаж байна.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Бидний алсын хараа
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                Монгол улсыг дэлхийн CS2 спортын газрын зураг дээр тэмдэглэгдэх,
                олон улсын турнирт тогтмол оролцдог улс болгох юм.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
              Манай баг
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              CS2-д дурлаж, community-г хөгжүүлэхээр тууштай ажиллаж буй манай
              багийн гишүүдтэй танилц
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="bg-gradient-to-br from-slate-800 to-gray-800 rounded-2xl p-8 border border-gray-700 group hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Profile Image */}
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-32 h-32 rounded-full mx-auto border-4 border-gradient-to-r from-orange-400 to-red-500 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/20 to-red-500/20 group-hover:from-orange-400/40 group-hover:to-red-500/40 transition-all duration-500"></div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-orange-400 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-300 leading-relaxed">{member.bio}</p>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Мэргэжил:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 px-3 py-1 rounded-full text-sm border border-orange-500/30"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Амжилт:</h4>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 text-sm flex items-center"
                      >
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-white font-semibold mb-3">
                    Холбоо барих:
                  </h4>
                  <div className="flex space-x-3">
                    <a
                      href={member.social.youtube}
                      className="bg-red-600 hover:bg-red-500 p-3 rounded-lg transition-all duration-300 group/social"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5 text-white group-hover/social:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                    <a
                      href={member.social.instagram}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 p-3 rounded-lg transition-all duration-300 group/social"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5 text-white group-hover/social:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href={member.social.facebook}
                      className="bg-blue-600 hover:bg-blue-500 p-3 rounded-lg transition-all duration-300 group/social"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5 text-white group-hover/social:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href={`mailto:${member.social.gmail}`}
                      className="bg-gray-600 hover:bg-gray-500 p-3 rounded-lg transition-all duration-300 group/social"
                    >
                      <svg
                        className="w-5 h-5 text-white group-hover/social:scale-110 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutusBody;
