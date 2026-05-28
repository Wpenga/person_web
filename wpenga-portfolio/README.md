# Wpenga Portfolio

个人技能展示页，展示嵌入式开发与AI集成项目。

## Projects

### 嵌入式系统

#### 1. JY1560串口屏网络状态显示系统

**上下位机架构:**
- **下位机（串口屏）**: [JY1560_TJC_2inch](https://github.com/Wpenga/JY1560_TJC_2inch/tree/main)
  - 淘晶驰JY1560串口屏UI设计
  - 网络模式、电量、充电状态显示
  - 自定义串口帧协议解析

- **上位机（Python）**: [router_and_input](https://github.com/Wpenga/router_and_input/tree/develop)
  - 网络状态获取与解析
  - 电量百分比监控
  - 充电状态检测
  - 串口协议封装与数据发送

#### 2. S327 ESP32-S3温湿度采集系统

**上下位机架构:**
- **上位机（ESP32）**: [S318_Signal_Code_template](https://github.com/Wpenga/S318_Signal_Code_template/tree/S327-003)
  - ESP32-S3单片机开发
  - RS485 Modbus-RTU协议
  - FreeRTOS多任务调度
  - 多传感器节点数据采集

- **下位机（串口屏）**: [S327_TJC_4.3inch](https://github.com/Wpenga/S327_TJC_4.3inch/tree/main)
  - 淘晶驰4.3寸屏UI设计
  - 温度、湿度实时显示
  - 传感器状态指示

#### 3. STM32多功能控制器
- USB HID Joystick设备实现
- 支持Mission Planner对接
- 集成按键、LED、ADC摇杆外设
- 适用于无人机地面站、无人船控制

### AI应用

#### 4. 智能日程记录表单系统 - [trae_friend_person](https://github.com/Wpenga/trae_friend_person)
- Web Speech API实时录音
- ModelScope Qwen API语义分析
- AI智能分类与优先级评估
- 响应式深色主题

### 监控系统

#### 5. ESP32多串口数据监控系统 - [esp32-S318](https://github.com/Wpenga/esp32-S318)
- FreeRTOS多任务并发控制
- 电池0x55 0xAA帧协议解析
- cJSON动态网络信号处理

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is optimized for deployment on Vercel or EdgeOne. Simply connect your GitHub repository to Vercel or EdgeOne for automatic deployments.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- next/font (Google Fonts optimization)
