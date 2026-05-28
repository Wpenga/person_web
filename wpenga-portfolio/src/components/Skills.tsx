export default function Skills() {
  const skillGroups = [
    {
      title: '嵌入式领域',
      skills: ['PlatformIO', 'ESP32 / STM32', 'RTOS 多线程', '串口协议栈'],
    },
    {
      title: '全栈 & AI',
      skills: ['React / Vite', 'TypeScript', 'Tailwind CSS'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#050510]">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[rgba(255,255,255,0.02)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="text-[#00FFFF] text-sm font-semibold uppercase tracking-wider mb-6">
                    {group.title}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 text-sm bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg hover:border-[#7B61FF] hover:text-[#7B61FF] transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
