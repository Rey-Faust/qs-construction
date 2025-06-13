'use client';
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 sm:px-6 lg:px-8">
      <header className="text-center py-12">
        <h1 className="text-4xl font-extrabold mb-2">QS Construction</h1>
        <h2 className="text-xl text-gray-500 mb-4">侨水建筑</h2>
        <p className="max-w-2xl mx-auto text-lg">
          专注于高品质建筑施工与工程管理，为您打造理想空间。
        </p>
      </header>

      <section className="py-16 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-10">我们的服务</h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-bold mb-2">建筑施工总承包</h4>
            <p>从项目规划、施工管理到竣工交付，提供一站式建筑解决方案。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-bold mb-2">装修与改造</h4>
            <p>商业空间、办公楼、住宅装修改造，精益求精，注重细节。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-bold mb-2">工程管理咨询</h4>
            <p>项目成本控制、进度管理、质量监督，为项目顺利保驾护航。</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h3 className="text-3xl font-semibold text-center mb-10">关于我们</h3>
        <div className="max-w-4xl mx-auto text-center text-lg">
          <p>
            QS Construction 侨水建筑，秉承“品质第一，服务至上”的理念，拥有多年建筑行业经验，致力于为客户提供高效、专业、可靠的建筑服务。
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-10">联系我们</h3>
        <div className="max-w-3xl mx-auto text-lg space-y-6">
          <div className="flex items-center gap-3"><Phone className="w-5 h-5" /> +60 1234 5678</div>
          <div className="flex items-center gap-3"><Mail className="w-5 h-5" /> contact@qsconstruction.com</div>
          <div className="flex items-center gap-3"><MapPin className="w-5 h-5" /> 吉隆坡, 马来西亚</div>
          <div className="text-center mt-8">
            <a href="mailto:contact@qsconstruction.com" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">发送邮件咨询</a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-500 text-sm">
        © 2025 QS Construction 侨水建筑. 版权所有.
      </footer>
    </div>
  );
}