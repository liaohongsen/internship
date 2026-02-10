
import React, { useState } from 'react';
import scheduleImage from './images/1.png';
import accommodationImage from './images/2.png';
import { 
  BENEFITS, 
  SCHEDULES, 
  PRICING_LIST, 
  IconMap 
} from './constants';
import { Home, Info, ChevronDown, ChevronUp } from 'lucide-react';

const App: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [showDBSDetails, setShowDBSDetails] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800 pb-0 overflow-x-hidden font-sans">
      {/* 1. Header Branding - Compact height */}
      <header className="bg-white px-5 py-3 flex flex-col items-center border-b border-gray-50/50">
        <span className="text-[#e68a2e] font-black text-3xl leading-none tracking-tight uppercase">YUSHI</span>
        <span className="text-gray-400 text-xs font-black tracking-[0.2em] leading-none mt-1">MEDICAL</span>
      </header>

      {/* 2. Brand Hero - Shortened significantly to save space */}
      <section className="px-0 pt-0 pb-1">
        <div className="bg-[#f09c48] rounded-b-[2rem] p-6 pt-8 pb-10 text-center shadow-lg shadow-orange-900/10">
          <h1 className="text-white text-[42px] font-black tracking-tight leading-tight">医学影子实习</h1>
        </div>
      </section>

      {/* Intro Text Section - Reduced py and internal p */}
      <section className="px-4 py-3 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-7 bg-[#f09c48] rounded-full"></div>
          <h2 className="text-xl font-black text-gray-900 tracking-tight">项目导言</h2>
        </div>
        <div className="bg-gray-50/50 rounded-2xl p-4 border border-gray-100 shadow-sm border-l-[6px] border-l-[#f09c48]">
          <p className="text-base font-medium text-gray-600 leading-snug">
            深入英国医疗体系与顶尖医学学术殿堂，开启医学从业者之旅。本影子实习旨在让学生通过真实医学环境体验，获得宝贵的申请背景与职业认知。项目不仅涵盖临床观察，还包括医疗系统及医学知识讲解。
          </p>
        </div>
      </section>

      {/* Benefits Section - Tighter grid and card padding */}
      <section className="px-4 py-2 space-y-3">
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-7 bg-[#f09c48] rounded-full"></div>
          <h2 className="text-xl font-black text-gray-900 tracking-tight">项目核心收获</h2>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-3 border border-gray-50 shadow-sm flex items-start space-x-4">
              <div className="p-2 bg-orange-50 rounded-xl text-[#f09c48] shrink-0">
                {IconMap[benefit.icon]}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base mb-0.5">{benefit.title}</h3>
                <p className="text-sm text-gray-500 leading-snug mt-1">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule Section - Reduced padding and tighter content hierarchy */}
      <section className="px-4 py-4 space-y-3">
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-7 bg-[#f09c48] rounded-full"></div>
          <h2 className="text-xl font-black text-gray-900 tracking-tight">项目详尽日程示例</h2>
        </div>
        
        <div className="bg-orange-50/40 p-3 rounded-2xl border border-orange-100/50">
          <p className="text-sm text-[#9a6a42] leading-snug font-bold">
            以下为 1–2 周医学实习的典型流程，根据学生背景会做难度调整。实习将以小组或一对一的形式进行，学生将与医生进行一对一的互动。实习安排将根据每位学生的年龄、知识、经验进行个性化定制。
          </p>
        </div>

          <div className="flex">
            <div className="rounded-2xl overflow-hidden border border-orange-100/50 bg-white w-full max-w-[520px]">
              <img
                src={scheduleImage}
                alt="项目示意图"
                className="w-full h-40 sm:h-44 md:h-48 object-cover"
              />
            </div>
          </div>

        {/* Day Selector - Tighter py */}
        <div className="flex overflow-x-auto space-x-2 no-scrollbar py-1 mb-1">
          {SCHEDULES.map((s) => (
            <button
              key={s.day}
              onClick={() => setActiveDay(s.day)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-xl text-sm font-black transition-all ${
                activeDay === s.day 
                  ? 'bg-[#f09c48] text-white shadow-lg' 
                  : 'bg-white text-gray-400 border border-gray-100'
              }`}
            >
              Day {s.day}
            </button>
          ))}
        </div>

        {/* Day Content Card - Reduced p and marker spacing */}
        <div className="bg-white rounded-[1.5rem] p-4 border border-gray-50 shadow-sm">
          <h3 className="text-base font-black text-[#f09c48] mb-2 pb-2 border-b border-orange-50">
            {SCHEDULES[activeDay - 1].title}
          </h3>
          <div className="space-y-3 relative">
            <div className="absolute left-[6px] top-1.5 bottom-1.5 w-[1.5px] bg-gray-100"></div>
            {SCHEDULES[activeDay - 1].items.map((item, idx) => (
              <div key={idx} className="relative pl-6 mt-2">
                <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-white border-2 border-[#f09c48]"></div>
                <p className="text-[#f09c48] font-black text-xs mb-0 uppercase leading-none">{item.time}</p>
                <p className="font-bold text-base text-gray-800 mt-1">{item.activity}</p>
                {item.details && item.details.length > 0 && (
                  <ul className="mt-1 space-y-0">
                    {item.details.map((d, i) => (
                      <li key={i} className="text-sm text-gray-400 leading-snug">• {d}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing, Accommodation & Other Fees Section - Tighter section py */}
      <section className="px-4 py-6 bg-gray-50/30 space-y-4">
        {/* Pricing - Tighter gap and card p */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-7 bg-[#f09c48] rounded-full"></div>
            {/* <h2 className="text-xl font-black text-gray-900 tracking-tight">医学实习费用+住宿</h2> */}
            <h2 className="text-xl font-black text-gray-900 tracking-tight">医学实习住宿</h2>
          </div>
          {/* <div className="grid grid-cols-2 gap-2">
            {PRICING_LIST.map((p, idx) => (
              <div key={idx} className="bg-white p-3 rounded-2xl border border-orange-50 shadow-sm text-center">
                <p className="text-xs text-gray-400 font-black mb-0.5">{p.duration}</p>
                <p className="text-xl font-black text-[#f09c48] mt-1">{p.price}</p>
              </div>
            ))}
          </div>
          <div className="p-4 bg-[#f09c48]/5 rounded-xl border border-[#f09c48]/10">
            <p className="text-sm font-black text-[#f09c48] flex items-center">
              <Info className="w-4 h-4 mr-2 shrink-0" />
              PS: 如果希望观摩手术，可升级套餐 +1w rmb/周
            </p>
          </div> */}
        </div>

        {/* Accommodation - Reduced p */}
        <div className="space-y-3">
          {/* <div className="flex items-center space-x-2">
            <Home className="w-6 h-6 text-[#f09c48]" />
            <h3 className="text-lg font-black text-gray-900 tracking-tight">住宿环境</h3>
          </div> */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-600 font-bold leading-snug">
              住宿地点位于伦敦大学校园内。我们通常安排UCL花园宿舍或其他伦敦大学学院间学生宿舍，地理位置优越，安全舒适。
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm">
            <img
              src={accommodationImage}
              alt="住宿环境展示"
              className="w-[1121px] h-[376px] object-cover max-w-full"
            />
          </div>
        </div>

        {/* Other Fees - Reduced dividers and internal spaces */}
        {/* <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-7 bg-[#f09c48] rounded-full"></div>
            <h2 className="text-xl font-black text-gray-900 tracking-tight">其他费用预计</h2>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm space-y-2">
            {[
              { label: "1. 餐费和交通费", detail: "预计30-50 ￡/天", isExpandable: false },
              { label: "2. 签证费用", detail: "127 ￡", isExpandable: false },
              { label: "3. 机票费用", detail: "400-700 ￡ 往返", isExpandable: false },
              { label: "4. DBS 检查", detail: "80 ￡", isExpandable: true }
            ].map((fee, idx) => (
              <div key={idx} className="flex flex-col border-b border-gray-50 last:border-0 pb-2 last:pb-0">
                <div 
                  className={`flex justify-between items-center ${fee.isExpandable ? 'cursor-pointer select-none' : ''}`}
                  onClick={() => fee.isExpandable && setShowDBSDetails(!showDBSDetails)}
                >
                  <div className="flex items-center">
                    <span className="font-bold text-sm text-gray-400">{fee.label}</span>
                    {fee.isExpandable && (
                      <span className="ml-2 text-[#f09c48]">
                        {showDBSDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    )}
                  </div>
                  <span className="font-black text-sm text-gray-800 text-right ml-4">{fee.detail}</span>
                </div>
                {fee.isExpandable && showDBSDetails && (
                  <div className="mt-1.5 p-3 bg-orange-50/50 rounded-xl border border-orange-100/30">
                    <p className="text-[11px] text-gray-500 leading-snug font-medium">
                      主要用于确认一个人是否有 犯罪记录、性犯罪记录、虐待记录等，以确保他适合从事医疗、教育、儿童/弱势群体相关的工作或实习
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div> */}
      </section>

      {/* 3. Ending Section - Significantly shortened footer */}
      <footer className="mt-4 bg-[#FFE8CC]/60 pt-4 pb-6 px-4 text-center rounded-t-[3rem] border-t border-orange-100/50 shadow-sm">
        <div className="max-w-md mx-auto space-y-1.5">
          <h2 className="text-2xl font-black text-[#e68a2e] tracking-tight mb-1">YUSHI (博睿医智)</h2>
          <div className="space-y-0.5 text-[#9a6a42] font-black text-sm opacity-90">
            <p>以医学与心理学为核心</p>
            <p>提供覆盖学术成长与职业发展的全程支持</p>
          </div>
          
          <div className="w-full h-[1.5px] bg-[#e68a2e]/20 my-3"></div>
          
          <div className="flex items-start justify-between text-left">
            <div className="space-y-2 mt-2">
              <h3 className="text-[#e68a2e] font-black text-xs uppercase tracking-widest">联系我们</h3>
              <div className="space-y-1 text-[#9a6a42] font-black text-sm tracking-tight">
                <p>+86 13162611127 (中国)</p>
                <p>+44 07419735373 (英国)</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-1.5 mt-2">
              <h3 className="text-[#e68a2e] font-black text-xs uppercase tracking-widest">官方微信</h3>
              <div className="w-14 h-14 bg-white rounded-xl overflow-hidden shadow-sm border border-orange-100 flex items-center justify-center p-1.5">
                <img
                  src="/images/wechatqr.jpg"
                  alt="QR Code"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          
          <div className="pt-3">
            <p className="text-[11px] text-[#9a6a42]/50 font-black tracking-widest uppercase">
              © 2026 YUSHI MEDICAL EDUCATION
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
