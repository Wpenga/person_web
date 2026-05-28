import Image from 'next/image';
import { Github, CheckCircle } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: 'JY1560串口屏网络状态显示系统',
    description: '基于淘晶驰串口屏的网络状态与电量显示系统，实现路由器网络模式、电量、充电状态的实时监控与显示。',
    image: '/esp32_monitor_preview.png',
    tags: ['Python', 'Serial', 'Embedded'],
    githubUrl: 'https://github.com/Wpenga/JY1560_TJC_2inch/tree/main',
    features: [
      '网络模式实时显示',
      '电量百分比监控',
      '充电状态检测',
      '自定义串口帧协议',
    ],
  },
  {
    title: 'S327 ESP32-S3 温湿度采集与显示',
    description: '基于ESP32-S3的多节点温湿度采集系统，通过RS485总线获取传感器数据并实时更新到串口屏显示。',
    image: '/esp32_monitor_preview.png',
    tags: ['ESP32', 'RS485', 'Modbus'],
    githubUrl: 'https://github.com/Wpenga/S318_Signal_Code_template/tree/S327-003',
    features: [
      'RS485 Modbus-RTU协议',
      'FreeRTOS任务调度',
      '多传感器节点管理',
      '串口屏数据更新',
    ],
  },
  {
    title: 'STM32多功能控制器',
    description: '集成按键、LED、ADC摇杆的STM32控制器，支持USB HID Joystick模式对接Mission Planner软件。',
    image: '/ai_schedule_app_preview.png',
    tags: ['STM32', 'USB HID', 'Joystick'],
    githubUrl: 'https://github.com/Wpenga',
    features: [
      'USB HID Joystick实现',
      'ADC摇杆校准算法',
      '自定义串口指令系统',
      '蜂鸣器与LED控制',
    ],
  },
  // {
  //   title: 'ESP32 多串口数据监控系统',
  //   description: '基于 FreeRTOS 的高并发监控系统。支持多任务并行处理电池监测与网络状态，实现高效 JSON 解析与数据转发。',
  //   image: '/esp32_monitor_preview.png',
  //   tags: ['C++', 'FreeRTOS', 'Embedded'],
  //   githubUrl: 'https://github.com/Wpenga/esp32-S318',
  //   features: [
  //     '电池 0x55 0xAA 帧协议解析',
  //     '多任务并发控制 (IO2/Serial)',
  //     'cJSON 动态网络信号处理',
  //   ],
  // },
  // {
  //   title: '智能日程记录表单系统',
  //   description: '融合语音识别与 AI 分析的现代化个人工具。通过 ModelScope (Qwen) API 自动分析语义并生成精准日程。',
  //   image: '/ai_schedule_app_preview.png',
  //   tags: ['React 19', 'ModelScope', 'Tailwind'],
  //   githubUrl: 'https://github.com/Wpenga/trae_friend_person',
  //   features: [
  //     'Web Speech API 实时录音',
  //     'AI 智能分类与优先级评估',
  //     '响应式响应 & 深色主题切换',
  //   ],
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#050510]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl font-bold font-grotesk mb-4">
            精选作品
          </h2>
          <p className="section-subtitle text-[#A0A0C0] text-lg">
            展示我在底层协议开发与上层智能应用中的探索
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`fade-in group bg-[#0a0a1a] border border-[rgba(255,255,255,0.1)] rounded-2xl overflow-hidden transition-all duration-500 hover:transform hover:-translate-y-2 hover:border-[#00FFFF] hover:shadow-2xl hover:shadow-[rgba(0,255,255,0.1)] ${
                index === 1 ? 'delay-1' : ''
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[rgba(5,5,16,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#00FFFF] font-semibold hover:scale-105 transition-transform"
                  >
                    <Github size={24} />
                    源码
                  </a>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-[rgba(0,255,255,0.1)] text-[#00FFFF] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold font-grotesk mb-3">
                  {project.title}
                </h3>
                <p className="text-[#A0A0C0] mb-6">{project.description}</p>

                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <CheckCircle size={16} className="text-[#00FFFF] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
