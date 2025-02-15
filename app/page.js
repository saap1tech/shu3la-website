"use client";

import React, { useRef, useEffect } from "react";
import {
  FaBook,
  FaBrain,
  FaHeart,
  FaDesktop,
  FaWindows,
  FaApple,
} from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

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

  const container = useRef(null);
  const landingRef = useRef(null);
  const featuresRef = useRef(null);
  const downloadRef = useRef(null);

  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000 });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div ref={container} className="bg-white text-gray-900 overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-[#ECF4FF] text-[#0064E0] sticky top-0 z-50 shadow-lg">
        <div className="flex items-center text-2xl font-bold">
          <img
            src="/logo.png"
            alt="شعلة Logo"
            className="w-28 mr-2"
            aria-label="شعلة Logo"
          />
        </div>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#downloadLinks"
              className="hover:text-[#FF8B04] transition-all"
              aria-label="تحميل البرنامج"
            >
              حمل البرنامج
            </a>
          </li>
        </ul>
      </nav>

      {/* Landing Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#0064E0] via-[#0082FC] to-[#FF8B04] text-white relative overflow-hidden">
        <motion.div
          ref={landingRef}
          className="text-center z-10 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="animated-text bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F1C526]">
              شعلة - بداية التنوير
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            أول برنامج جزائري مخصص لطلاب البكالوريا، مدعوم بتقنيات الذكاء
            الاصطناعي. نحن هنا لمساعدتك على تجاوز تحديات البكالوريا بثقة
            وطمأنينة.
          </p>
          <a
            href="#downloadLinks"
            className="bg-[#FF8B04] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#FF8B04] transition-all duration-300"
            aria-label="ابدأ رحلة النجاح الآن"
          >
            ابدأ رحلة النجاح الآن
          </a>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0064E0] opacity-50"></div>
      </section>

      {/* Psychological Features Section */}
      <section className="py-16 bg-[#ECF4FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#0064E0]">
            لماذا شعلة؟ لأننا نفهمك
          </h2>
          <div
            ref={featuresRef}
            className="grid md:grid-cols-3 gap-8"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {psychologicalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <feature.icon
                  className={`h-16 w-16 mx-auto ${feature.color} mb-4`}
                  aria-hidden="true"
                />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="downloadLinks" className="py-16 text-center bg-[#ECF4FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-[#0064E0]">
            (النسخة التجريبية) حمّل شعلة الآن
          </h2>
          <div
            ref={downloadRef}
            className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <motion.a
              href="/download/شعلة.exe"
              className="bg-white border-2 border-[#0064E0] text-[#0064E0] px-10 py-6 rounded-lg shadow-lg hover:bg-[#0064E0] hover:text-white transition-all duration-300 flex items-center justify-center space-x-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              aria-label="تحميل للويندوز"
            >
              <FaWindows className="h-8 w-8" />
              <span className="text-lg font-semibold">تحميل للويندوز</span>
            </motion.a>

            <motion.a
              href="/download/شعلة_macos.dmg"
              className="bg-white border-2 border-[#FF8B04] text-[#FF8B04] px-10 py-6 rounded-lg shadow-lg hover:bg-[#FF8B04] hover:text-white transition-all duration-300 flex items-center justify-center space-x-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              aria-label="تحميل للماك"
            >
              <FaApple className="h-8 w-8" />
              <span className="text-lg font-semibold">تحميل للماك</span>
            </motion.a>
          </div>
          <p className="mt-8 text-gray-600 max-w-2xl mx-auto">
            شعلة متوفر حصريًا على أجهزة الحاسوب الشخصية لتوفير تجربة تعلم مثالية
            لطلاب البكالوريا
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
              <p className="text-sm">بداية التنوير</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">أهدافنا</h4>
              <ul className="space-y-2">
                <li>
                  <p className="hover:text-[#FF8B04] transition">
                    التعليم الذكي
                  </p>
                </li>
                <li>
                  <p className="hover:text-[#FF8B04] transition">
                    الدعم الأكاديمي المستمر
                  </p>
                </li>
                <li>
                  <p className="hover:text-[#FF8B04] transition">
                    الاعتماد على النفس
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
              <p className="text-sm mb-2">
                البريد الإلكتروني: shu3la.project@gmail.com
              </p>
            </div>
          </div>
          <div className="border-t border-[#0064E0] mt-8 pt-4 text-center">
            <p className="text-sm">{new Date().getFullYear()} شعلة</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
