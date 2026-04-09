import { Link } from "react-router"; // ใช้สำหรับการทำ Link ข้ามหน้า

export default function Footer() {
  const currentYear = new Date().getFullYear(); // ดึงปีปัจจุบันอัตโนมัติ

  return (
    <footer className="bg-neutral-950 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* โซนบน: แบ่ง 3 คอลัมน์ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* คอลัมน์ 1: ข้อมูลแบรนด์ */}
          <div className="flex flex-col">
            <Link to="/" className="inline-block mb-6">
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
                Maliwan<span className="text-amber-500">.</span>
              </h2>
            </Link>
            <p className="text-neutral-400 font-light leading-relaxed text-sm pr-4">
              ห้างหุ้นส่วนจำกัด มะลิวัลย์ กระจกอลูมิเนียม 2565 <br />
              ผู้เชี่ยวชาญด้านการออกแบบและติดตั้งกระจกอลูมิเนียมครบวงจร
              ด้วยประสบการณ์และทีมช่างมืออาชีพ เพื่อบ้านและอาคารที่สมบูรณ์แบบ
            </p>
          </div>

          {/* คอลัมน์ 2: เมนูลัด (Quick Links) */}
          <div>
            <h3 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-neutral-400 hover:text-amber-500 transition-colors text-sm font-light flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-neutral-400 hover:text-amber-500 transition-colors text-sm font-light flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-neutral-400 hover:text-amber-500 transition-colors text-sm font-light flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
                  ผลงานของเรา
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-neutral-400 hover:text-amber-500 transition-colors text-sm font-light flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
                  ติดต่อสอบถาม
                </Link>
              </li>
            </ul>
          </div>

          {/* คอลัมน์ 3: บริการหลัก (Our Services) */}
          <div>
            <h3 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">
              Our Services
            </h3>
            <ul className="space-y-4">
              <li className="text-neutral-400 hover:text-amber-500 transition-colors text-sm font-light cursor-pointer flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
                ติดตั้ง TOSTEM
              </li>
              <li className="text-neutral-400 hover:text-amber-500 transition-colors text-sm font-light cursor-pointer flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
                ระบบ Euro Profile
              </li>
              <li className="text-neutral-400 hover:text-amber-500 transition-colors text-sm font-light cursor-pointer flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
                กระจกสั่งตัด (Custom)
              </li>
              <li className="text-neutral-400 hover:text-amber-500 transition-colors text-sm font-light cursor-pointer flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
                ฉากกั้นห้องน้ำ & ระเบียง
              </li>
            </ul>
          </div>
        </div>

        {/* โซนล่าง: ลิขสิทธิ์ (Copyright) */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-xs font-light text-center md:text-left">
            © {currentYear} ห้างหุ้นส่วนจำกัด มะลิวัลย์ กระจกอลูมิเนียม 2565.
            All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-neutral-500 font-light">
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
