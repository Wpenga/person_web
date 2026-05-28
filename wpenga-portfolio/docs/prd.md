# 个人技能展示页 - 项目内容更新 PRD

## 1. 需求分析

### 1.1 业务背景

当前个人技能展示页展示了两个项目：
- ESP32 多串口数据监控系统
- 智能日程记录表单系统

需要新增三个嵌入式项目的展示，以更全面地展示嵌入式开发能力。

### 1.2 功能需求

| 需求编号 | 需求描述 | 来源 |
|---------|---------|------|
| PRD-001 | 添加项目一：串口屏网络状态显示系统（JY1560） | 用户需求 |
| PRD-002 | 添加项目二：ESP32-S3 RS485温湿度采集系统 | 用户需求 |
| PRD-003 | 添加项目三：STM32多功能控制器（无人机地面站） | 用户需求 |
| PRD-004 | 更新README.md，添加项目信息 | 用户需求 |
| PRD-005 | 创建项目介绍文档（projects.md） | 用户需求 |
| PRD-006 | 创建PRD文档 | 用户需求 |

### 1.3 项目信息汇总

#### 项目一：串口屏网络状态显示系统

| 字段 | 内容 |
|------|------|
| 项目名称 | 串口屏网络状态显示系统 |
| 副标题 | JY1560 淘晶驰串口屏UI界面 |
| 技术栈 | Python, pyserial, 淘晶驰串口屏 |
| 描述 | 实现路由器网络状态、电量和充电状态的实时显示系统 |
| GitHub链接 | https://github.com/Wpenga/JY1560_TJC_2inch/tree/main |
| 上位机链接 | https://github.com/Wpenga/router_and_input/tree/develop |
| 标签 | Python, Serial, Embedded |
| 特性 | 网络模式显示、电量显示、充电状态显示、串口通信协议 |

#### 项目二：ESP32-S3 RS485温湿度采集系统

| 字段 | 内容 |
|------|------|
| 项目名称 | ESP32-S3 RS485温湿度采集系统 |
| 副标题 | 通过RS485获取传感器数据并更新串口屏 |
| 技术栈 | ESP-IDF, FreeRTOS, Modbus-RTU |
| 描述 | 基于ESP32-S3单片机的温湿度数据采集系统 |
| GitHub链接 | https://github.com/Wpenga/S318_Signal_Code_template/tree/S327-003 |
| 下位机链接 | https://github.com/Wpenga/S327_TJC_4.3inch/tree/main |
| 标签 | ESP32, RS485, Modbus |
| 特性 | RS485通信、数据采集、数据转发、界面显示 |

#### 项目三：STM32多功能控制器

| 字段 | 内容 |
|------|------|
| 项目名称 | STM32多功能控制器 |
| 副标题 | 无人机地面站控制器（USB HID Joystick） |
| 技术栈 | STM32 HAL, USB HID, UART |
| 描述 | 集成按键、LED、ADC摇杆，支持USB HID Joystick模式 |
| GitHub链接 | 待补充 |
| 标签 | STM32, USB HID, Joystick |
| 特性 | 按键控制、LED指示、ADC摇杆、USB HID、蜂鸣器控制 |

---

## 2. 页面更新方案

### 2.1 更新范围

| 文件 | 更新内容 | 说明 |
|------|---------|------|
| `src/components/Projects.tsx` | 添加3个新项目数据 | 修改projects数组 |
| `README.md` | 添加项目介绍章节 | 增加Projects部分 |
| `docs/projects.md` | 创建项目介绍文档 | 已完成 |
| `docs/prd.md` | 创建PRD文档 | 本文件 |

### 2.2 Projects.tsx 更新计划

在现有的`projects`数组中添加3个新项目：

```typescript
{
  title: '串口屏网络状态显示系统',
  description: '基于淘晶驰JY1560串口屏的网络状态显示系统，实现路由器网络模式、电量、充电状态的实时监控',
  image: '/project1_placeholder.png', // 需要准备图片
  tags: ['Python', 'Serial', 'Embedded'],
  githubUrl: 'https://github.com/Wpenga/JY1560_TJC_2inch/tree/main',
  features: [
    '网络模式实时显示',
    '电量百分比监控',
    '充电状态检测',
    '自定义串口帧协议'
  ],
},
{
  title: 'ESP32-S3 RS485温湿度采集',
  description: '基于ESP32-S3的多节点温湿度采集系统，通过RS485总线获取传感器数据并更新到串口屏',
  image: '/esp32_monitor_preview.png', // 可复用现有图片
  tags: ['ESP32', 'RS485', 'Modbus'],
  githubUrl: 'https://github.com/Wpenga/S318_Signal_Code_template/tree/S327-003',
  features: [
    'RS485 Modbus-RTU协议',
    'FreeRTOS任务调度',
    '多传感器节点管理',
    '串口屏数据更新'
  ],
},
{
  title: 'STM32多功能控制器',
  description: '集成按键、LED、ADC摇杆的STM32控制器，支持USB HID Joystick模式对接Mission Planner',
  image: '/stm32_controller_preview.png', // 需要准备图片
  tags: ['STM32', 'USB HID', 'Joystick'],
  githubUrl: 'https://github.com/Wpenga', // 预留
  features: [
    'USB HID Joystick实现',
    'ADC摇杆校准算法',
    '自定义串口指令系统',
    '蜂鸣器与LED控制'
  ],
}
```

### 2.3 README.md 更新计划

在README.md中添加项目介绍章节：

```markdown
## Projects

### 嵌入式系统

1. **串口屏网络状态显示系统** - [JY1560_TJC_2inch](https://github.com/Wpenga/JY1560_TJC_2inch/tree/main)
   - 基于淘晶驰JY1560串口屏设计
   - 显示网络模式、电量、充电状态
   - 配套Python上位机程序

2. **ESP32-S3 RS485温湿度采集系统** - [S318_Signal_Code_template](https://github.com/Wpenga/S318_Signal_Code_template/tree/S327-003)
   - ESP32-S3单片机开发
   - RS485 Modbus-RTU协议
   - 淘晶驰4.3寸屏显示

3. **STM32多功能控制器**
   - USB HID Joystick设备
   - 支持Mission Planner对接
   - 适用于无人机地面站控制

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
```

---

## 3. 实施计划

### 3.1 任务分解

| 任务编号 | 任务名称 | 负责人 | 预计工时 | 依赖 |
|---------|---------|--------|---------|------|
| TASK-001 | 创建项目介绍文档 | 开发者 | 2小时 | 无 |
| TASK-002 | 创建PRD文档 | 开发者 | 1小时 | TASK-001 |
| TASK-003 | 更新README.md | 开发者 | 0.5小时 | TASK-001 |
| TASK-004 | 更新Projects.tsx组件 | 开发者 | 1小时 | TASK-001 |
| TASK-005 | 准备项目预览图片 | 开发者 | 1小时 | 无 |
| TASK-006 | 构建验证 | 开发者 | 0.5小时 | TASK-003, TASK-004 |

### 3.2 时间计划

```
Day 1:
├── TASK-001: 创建项目介绍文档 (2h)
├── TASK-002: 创建PRD文档 (1h)
└── TASK-003: 更新README.md (0.5h)

Day 2:
├── TASK-004: 更新Projects.tsx组件 (1h)
├── TASK-005: 准备项目预览图片 (1h)
└── TASK-006: 构建验证 (0.5h)
```

### 3.3 风险评估

| 风险编号 | 风险描述 | 影响 | 应对措施 |
|---------|---------|------|---------|
| R001 | 项目预览图片缺失 | 页面展示效果不佳 | 使用通用占位图片或截图 |
| R002 | GitHub链接变更 | 链接失效 | 使用稳定的分支或release链接 |
| R003 | 构建失败 | 部署受阻 | 及时修复TypeScript错误和依赖问题 |

---

## 4. 验收标准

| 验收项 | 验收标准 |
|-------|---------|
| 项目介绍文档 | `docs/projects.md` 包含三个项目的详细介绍 |
| PRD文档 | `docs/prd.md` 完整描述需求和计划 |
| README更新 | README.md包含新增项目信息 |
| 页面更新 | Projects组件显示5个项目卡片 |
| 构建验证 | `npm run build` 无错误 |
| 预览验证 | 开发服务器正常运行，项目卡片正确显示 |

---

## 5. 部署计划

根据用户需求，部署由用户自行完成：

1. 用户将代码推送到GitHub仓库
2. 用户连接GitHub仓库到Vercel
3. Vercel自动触发构建和部署
4. 部署完成后可访问网站

> **注意**：确保项目根目录包含正确的`vercel.json`配置文件。