
import React from 'react';
import { 
  Stethoscope, 
  Users, 
  Compass, 
  FileCheck, 
  Mail, 
  ShieldCheck,
  MapPin,
  Clock,
  Coffee,
  Sun,
  Moon,
  Plane,
  CreditCard,
  Ticket
} from 'lucide-react';
import { Benefit, DaySchedule, Pricing } from './types';

export const THEME_COLOR = "#e68a2e";

export const BENEFITS: Benefit[] = [
  {
    title: "全英文医学环境",
    description: "在英国大学与医院系统中，从真实临床场景学习观察，全方位提升医学术语应用能力。",
    icon: "Stethoscope"
  },
  {
    title: "一对一/小组式带教",
    description: "根据学生年龄与背景匹配医生，提供定向观察机会，确保实习内容的专业深度与针对性。",
    icon: "Users"
  },
  {
    title: "沉浸式医学体验",
    description: "参与临床观察、基础体格检查示教、病例讨论与反思记录，深入了解英国医疗体系运作。",
    icon: "Compass"
  },
  {
    title: "结构化学习成果",
    description: "完成院方提供的评估、反思日志、观察报告与小论文，系统化梳理实习所得。",
    icon: "FileCheck"
  },
  {
    title: "医院出具推荐信",
    description: "医院出具的推荐信对未来医务工作者来说将非常宝贵。这封推荐信可用于通过UCAS或类似入学系统申请的任何医学院，以帮助学生进入海外的理想医学院。",
    icon: "Mail"
  },
  {
    title: "安全保障",
    description: "我们将安排1-2名导师在学生实习服务期间为学生提供全方位支持，确保实习过程安全无忧。",
    icon: "ShieldCheck"
  }
];

export const SCHEDULES: DaySchedule[] = [
  {
    day: 1,
    title: "抵达与入住（仅限住宿学生）",
    items: [
      { time: "14:30 起", activity: "抵达宿舍", details: ["学生抵达伦敦大学校园 (UCL)", "前往前台办理入住手续，领取房卡、WiFi 信息、门禁卡"] },
      { time: "18:00 - 19:30", activity: "晚餐（自理）", details: ["可选择校园食堂或周边餐厅"] },
      { time: "19:30 起", activity: "自由活动时间", details: ["适应环境、休息、学习"] }
    ]
  },
  {
    day: 2,
    title: "入职培训与基础医学示教",
    items: [
      { time: "07:30 - 08:30", activity: "早餐 (住宿生)", details: ["在学校食堂用餐"] },
      { time: "09:00 - 10:30", activity: "接待处集合与开营说明", details: ["工作人员介绍项目安排、校园安全须知、小组规则、导师团队介绍"] },
      { time: "10:30 - 13:00", activity: "医生带教入科培训", details: ["医生见习礼仪", "医患沟通基础", "血压、心率等生命体征解释", "医生见习观察要点"] },
      { time: "14:00 - 17:00", activity: "下午随访学习", details: ["学习静脉穿刺流程示范（观察）", "血压测量练习（对5位患者）", "撰写关于血压和心率的论文", "进行论文答辩"] }
    ]
  },
  {
    day: 3,
    title: "生命体征 / 基础检查实训示例",
    items: [
      { time: "09:00 - 13:00", activity: "上午随诊观察", details: ["医生问诊示范", "基础体格检查讲解", "观察学生测 BMI、体温、呼吸频率等", "医生点评与纠错"] },
      { time: "14:00 - 17:00", activity: "下午实习及跟随医生观摩学习", details: ["呼吸系统病例观察", "血氧监测练习，对5位患者进行BMI练习（呼吸频率+血氧饱和度测量）", "完成学习任务：生命体征变化小论文", "医生面谈与答疑"] }
    ]
  },
  {
    day: 4,
    title: "医学文献阅读与病例讨论日",
    items: [
      { time: "09:00 - 13:00", activity: "上午观察 + 文献学习", details: ["阅读一篇与当天病例相关的英文医学文章", "学习如何批判性阅读 (Critical Thinking)", "医生指导学生完成书面摘要"] },
      { time: "14:00 - 17:00", activity: "病例分析练习", details: ["过往真实病例示例分享", "诊疗流程讲解", "小组讨论：鉴别诊断思路", "完成一篇反思性文章"] }
    ]
  },
  {
    day: 5,
    title: "观摩学习 (NHS 专题)",
    items: [
      { time: "09:00 - 13:00", activity: "英国医学体系讲座", details: ["学生阅读一篇与文章相关的论文，并以批判性的方式向医生汇报", "尿检和血检，超声检查-观察", "每天至少观察3次诊疗"] },
      { time: "14:00 - 17:00", activity: "下午跟随医生见习", details: ["医生答疑交流", "关于尿液分析的论文", "论文答辩"] }
    ]
  },
  {
    day: 6,
    title: "医疗系统专题学习 + 考勤审核",
    items: [
      { time: "09:00 - 13:00", activity: "英国医学体系讲座", details: ["英国医学教育路径", "初级保健与医院协作", "NHS 医疗服务体系", "医生培训适应性测试（示例）", "DOPS（操作观察指标）介绍"] },
      { time: "14:00 - 17:00", activity: "下午跟随医生见习与实习评估", details: ["医生答疑交流", "考勤评估", "实习手册记录", "发放完成证明与推荐信（适用完成一周+学生）"] }
    ]
  },
  {
    day: 7,
    title: "周末离营（住宿学生）",
    items: [
      { time: "09:00 - 11:00", activity: "退房 / 自由活动时间", details: ["如需送机可提前预约"] },
      { time: "14:00 - 17:00", activity: "社交活动", details: [] },
      { time: "18:00 起", activity: "晚餐", details: [] },
      { time: "19:30 起", activity: "自由活动", details: [] }
    ]
  }
];

export const PRICING_LIST: Pricing[] = [
  { duration: "1 周", price: "39800 rmb" },
  { duration: "2 周", price: "79600 rmb" }
];

export const IconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
  FileCheck: <FileCheck className="w-6 h-6" />,
  Mail: <Mail className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  MapPin: <MapPin className="w-4 h-4" />,
  Clock: <Clock className="w-4 h-4" />,
  Coffee: <Coffee className="w-4 h-4" />,
  Sun: <Sun className="w-4 h-4" />,
  Moon: <Moon className="w-4 h-4" />,
  Plane: <Plane className="w-4 h-4" />,
  CreditCard: <CreditCard className="w-4 h-4" />,
  Ticket: <Ticket className="w-4 h-4" />
};
