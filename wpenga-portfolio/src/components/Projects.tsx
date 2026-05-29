import Image from 'next/image';
import { Github, CheckCircle } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  githubLabel: string;
  secondaryGithubUrl?: string;
  secondaryGithubLabel?: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: 'JY1560串口屏网络状态显示系统',
    description: '完整的上下位机架构系统，实现路由器网络模式、电量、充电状态的实时监控与串口屏显示。',
    image: '/JY1560.png',
    tags: ['Python', 'TJC Serial', 'Embedded'],
    githubUrl: 'https://github.com/Wpenga/router_and_input/tree/develop',
    githubLabel: '上位机 · Python',
    secondaryGithubUrl: 'https://github.com/Wpenga/JY1560_TJC_2inch/tree/main',
    secondaryGithubLabel: '下位机 · 串口屏',
    features: [
      '淘晶驰2.4寸串口屏UI设计',
      '网络模式实时显示',
      '电量百分比监控',
      '充电状态检测',
      '自定义串口帧协议',
    ],
  },
  {
    title: 'S327 ESP32-S3温湿度采集系统',
    description: '基于ESP32-S3的多节点温湿度采集系统，通过RS485总线获取传感器数据并更新到串口屏。',
    image: '/S327.png',
    tags: ['ESP32', 'RS485', 'Modbus'],
    githubUrl: 'https://github.com/Wpenga/S318_Signal_Code_template/tree/S327-003',
    githubLabel: '上位机 · ESP32',
    secondaryGithubUrl: 'https://github.com/Wpenga/S327_TJC_4.3inch/tree/main',
    secondaryGithubLabel: '下位机 · 串口屏',
    features: [
      'RS485 Modbus-RTU协议',
      'FreeRTOS多任务调度',
      '多传感器节点管理',
      '淘晶驰4.3寸屏显示',
      '实时数据更新',
    ],
  },
  {
    title: 'STM32多功能控制器',
    description: '集成按键、LED、ADC摇杆的STM32控制器，支持USB HID Joystick模式对接Mission Planner软件。',
    image: '/ai_schedule_app_preview.png',
    tags: ['STM32', 'USB HID', 'Joystick'],
    githubUrl: 'https://github.com/Wpenga',
    githubLabel: '源码',
    features: [
      'USB HID Joystick实现',
      'ADC摇杆校准算法',
      '自定义串口指令系统',
      '蜂鸣器与LED控制',
      'Mission Planner对接',
    ],
  },
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
                <div className="absolute inset-0 bg-[rgba(5,5,16,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#00FFFF] font-semibold hover:scale-105 transition-transform"
                  >
                    <Github size={24} />
                    {project.githubLabel}
                  </a>
                  {project.secondaryGithubUrl && (
                    <a
                      href={project.secondaryGithubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#00FF88] font-semibold hover:scale-105 transition-transform"
                    >
                      <Github size={24} />
                      {project.secondaryGithubLabel}
                    </a>
                  )}
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
