import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-slate-900 to-black border-t border-gray-800">
      <div className="container mx-auto max-w-[1200px] px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              {/* Logo Icon */}
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-xl">C</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">2</span>
                </div>
              </div>

              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent leading-none">
                  Counter-Strike
                </span>
                <span className="text-sm text-orange-300 leading-none">
                  Gaming Hub
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Counter-Strike 2-ын хамгийн сүүлийн үеийн мэдээ, skin market,
              турнирийн мэдээлэл болон gaming community-тэй холбогдох бүх
              зүйлийг эндээс олоорой.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-600 p-3 rounded-lg transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-purple-600 p-3 rounded-lg transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-red-600 p-3 rounded-lg transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Хурдан холбоос</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Нүүр хуудас
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Бидний тухай
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Мэдээ мэдээлэл
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Бараа
                </Link>
              </li>
            </ul>
          </div>

          {/* Gaming Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Тоглоом</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/skin"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Skin Market
                </Link>
              </li>
              <li>
                <Link
                  href="/map"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Map Guide
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Турнирууд
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Багийн мэдээлэл
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Холбоо барих</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0"
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
                <div>
                  <p className="text-gray-400 text-sm">И-мэйл</p>
                  <a
                    href="mailto:info@cs2hub.mn"
                    className="text-white hover:text-orange-400 transition-colors duration-300"
                  >
                    info@cs2hub.mn
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <p className="text-gray-400 text-sm">Утас</p>
                  <a
                    href="tel:+97611223344"
                    className="text-white hover:text-orange-400 transition-colors duration-300"
                  >
                    +976 1122-3344
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="text-gray-400 text-sm">Хаяг</p>
                  <p className="text-white">
                    Улаанбаатар хот
                    <br />
                    Монгол Улс
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <p>
                &copy; 2025 Counter-Strike Gaming Hub. Бүх эрх хуулиар
                хамгаалагдсан.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
              >
                Нууцлалын бодлого
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
              >
                Үйлчилгээний нөхцөл
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
              >
                Cookie бодлого
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
