import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0a1a] pt-24 pb-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold font-grotesk mb-4">
              准备好开始合作了吗？
            </h2>
            <p className="text-[#A0A0C0] text-lg mb-6">
              无论是嵌入式系统设计还是现代 Web 应用，我都能为您提供专业支持。
            </p>
            <a
              href="mailto:wzpenga@163.com"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              发送邮件
            </a>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Wpenga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A0A0C0] hover:text-[#00FFFF] transition-colors p-3 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] rounded-xl hover:border-[#00FFFF]"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-[#A0A0C0] hover:text-[#00FFFF] transition-colors p-3 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] rounded-xl hover:border-[#00FFFF]"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:wzpenga@163.com"
              className="text-[#A0A0C0] hover:text-[#00FFFF] transition-colors p-3 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] rounded-xl hover:border-[#00FFFF]"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-[rgba(255,255,255,0.1)]">
          <p className="text-[#606080] text-sm">
            © 2026 Wpenga. Built with Passion & Tech.
          </p>
        </div>
      </div>
    </footer>
  );
}
