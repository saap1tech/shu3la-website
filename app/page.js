"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaBrain, FaHeart, FaDesktop, FaWindows, FaApple } from "react-icons/fa";

export default function Home() {
  const psychologicalFeatures = [
    {
      icon: FaBrain,
      title: "مرافق تعليمي ذكي",
      description: "نفهم قلقك ونخفف توتر البكالوريا بذكاء اصطناعي مخصص",
      color: "text-[#0064E0]",
    },
    {
      icon: FaHeart,
      title: "الدعم النفسي والأكاديمي",
      description: "نمد لك يد العون والتشجيع في أصعب مراحل رحلتك التعليمية",
      color: "text-[#FF8B04]",
    },
    {
      icon: FaBook,
      title: "التعلم المخصص",
      description: "خوارزميات ذكية تتكيف مع أسلوبك الفريد في التعلم",
      color: "text-[#00C853]",
    },
  ];

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center p-6 bg-[#ECF4FF] text-[#0064E0] sticky top-0 z-50 shadow-md"
      >
        <div className="flex items-center text-2xl font-bold">
          <img
            src="/logo.png"
            alt="شعلة Logo"
            className="w-28 mr-2"
          />
        </div>
        <ul className="flex space-x-6">
          {["الصفحة الرئيسية", "عن البرنامج", "تواصل معنا"].map(
            (item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`/${
                    item === "الصفحة الرئيسية" ? "" : item.replace(" ", "-")
                  }`}
                  className="hover:text-[#FF8B04] transition"
                >
                  {item}
                </a>
              </motion.li>
            )
          )}
        </ul>
      </motion.nav>

      {/* Landing Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#0064E0] via-[#0082FC] to-[#FF8B04] text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F1C526]">
            شعلة - بداية التنوير
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            أول برنامج جزائري مخصص لطلاب البكالوريا، مدعوم بتقنيات الذكاء
            الاصطناعي. نحن هنا لمساعدتك على تجاوز تحديات البكالوريا بثقة
            وطمأنينة.
          </p>
          <motion.a
            href="/subscribe"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF8B04] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#FF8B04] transition-all duration-300"
          >
            ابدأ رحلة النجاح الآن
          </motion.a>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0064E0] opacity-50"></div>
      </section>

      {/* Psychological Features Section */}
      <section className="py-16 bg-[#ECF4FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#0064E0]">
            لماذا شعلة؟ لأننا نفهمك
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {psychologicalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <feature.icon
                  className={`h-16 w-16 mx-auto ${feature.color} mb-4`}
                />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center bg-[#ECF4FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-[#0064E0]">(النسخة التجريبية) حمّل شعلة الآن</h2>
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Windows Download */}
            <motion.a
              href="/download/شعلة.exe"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-[#0064E0] text-[#0064E0] px-10 py-6 rounded-lg shadow-lg hover:bg-[#0064E0] hover:text-white transition-all duration-300 flex items-center justify-center space-x-4"
            >
              <FaWindows className="h-8 w-8" />
              <span className="text-lg font-semibold">تحميل للويندوز</span>
            </motion.a>

            {/* Mac Download */}
            <motion.a
              href="/download/شعلة_macos.dmg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-[#FF8B04] text-[#FF8B04] px-10 py-6 rounded-lg shadow-lg hover:bg-[#FF8B04] hover:text-white transition-all duration-300 flex items-center justify-center space-x-4"
            >
              <FaApple className="h-8 w-8" />
              <span className="text-lg font-semibold">تحميل للماك</span>
            </motion.a>
          </div>
          <p className="mt-8 text-gray-600 max-w-2xl mx-auto">
            شعلة متوفر حصريًا على أجهزة الحاسوب الشخصية لتوفير تجربة تعلم مثالية لطلاب البكالوريا
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0064E0] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold">شعلة</h3>
              </div>
              <p className="text-sm">
بداية التنوير
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:text-[#FF8B04] transition">
                    الرئيسية
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-[#FF8B04] transition">
                    عن البرنامج
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-[#FF8B04] transition"
                  >
                    اتصل بنا
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
              <p className="text-sm mb-2">
                البريد الإلكتروني: support@shu3la.com
              </p>
              <p className="text-sm">الهاتف: +213 550 123 456</p>
            </div>
          </div>
          <div className="border-t border-[#0064E0] mt-8 pt-4 text-center">
            <p className="text-sm">
              &copy; 2024 شعلة. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
