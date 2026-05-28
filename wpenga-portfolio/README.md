# Wpenga Portfolio

个人技能展示页，展示嵌入式开发与AI集成项目。

## Projects

### 嵌入式系统

1. **串口屏网络状态显示系统** - [JY1560_TJC_2inch](https://github.com/Wpenga/JY1560_TJC_2inch/tree/main)
   - 基于淘晶驰JY1560串口屏设计
   - 显示网络模式、电量、充电状态
   - 配套Python上位机程序: [router_and_input](https://github.com/Wpenga/router_and_input/tree/develop)

2. **ESP32-S3 RS485温湿度采集系统** - [S318_Signal_Code_template](https://github.com/Wpenga/S318_Signal_Code_template/tree/S327-003)
   - ESP32-S3单片机开发
   - RS485 Modbus-RTU协议
   - 淘晶驰4.3寸屏显示: [S327_TJC_4.3inch](https://github.com/Wpenga/S327_TJC_4.3inch/tree/main)

3. **STM32多功能控制器**
   - USB HID Joystick设备
   - 支持Mission Planner对接
   - 适用于无人机地面站、无人船控制

### AI应用

4. **智能日程记录表单系统** - [trae_friend_person](https://github.com/Wpenga/trae_friend_person)
   - 语音识别与AI分析
   - ModelScope Qwen API集成
   - 响应式深色主题

### 监控系统

5. **ESP32多串口数据监控系统** - [esp32-S318](https://github.com/Wpenga/esp32-S318)
   - FreeRTOS多任务并发
   - 电池帧协议解析
   - JSON数据处理

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
