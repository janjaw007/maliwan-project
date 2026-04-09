import type { ServiceItem } from "@/types/service";
import { motion } from "framer-motion";

interface ServiceCardProps {
  item: ServiceItem;
  index: number;
}

export default function ServiceCard({ item, index }: ServiceCardProps) {
  const { title, description, image } = item;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      // เปลี่ยนสไตล์ให้เป็น Solid ขาวล้วน ขอบคม และดันเงาขึ้นเบาๆ
      className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer bg-white border border-neutral-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-neutral-200/60 hover:-translate-y-2"
    >
      {/* 🔥 ทีเด็ดแก้จืด 1: เส้นขอบบนสีส้ม วิ่งออกมาจากแกนกลางตอน Hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-20" />

      {/* โซนรูปภาพ */}
      <div className="relative w-full h-48 overflow-hidden bg-neutral-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* 🔥 ทีเด็ดแก้จืด 2: ฟิล์มไล่สีดำด้านล่างรูปภาพตอน Hover สร้างความลึก */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* โซนเนื้อหา */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-neutral-800 tracking-tight mb-2 transition-colors duration-300 group-hover:text-amber-600 line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-neutral-500 leading-relaxed font-light mb-6 flex-grow line-clamp-3">
          {description}
        </p>

        {/* ปรับโซนลิงก์ด้านล่างให้ดูมีดีเทลมากขึ้น */}
        <div className="mt-auto flex items-center justify-between border-t border-neutral-50 pt-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500">
            <span>ดูรายละเอียด</span>
            <span className="text-base transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
