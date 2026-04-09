import { useEffect, useState } from "react";
import ServiceCard from "../../components/Cards/ServiceCard";
import type { ServiceItem } from "@/types/service";
import { motion } from "framer-motion"; // 1. อย่าลืม Import motion นะครับ

export default function ServiceSection() {
  const [services, setServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/data/services.json");
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Cannot fetch services:", error);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="py-20 bg-neutral-50">
      <div className="max-w-300 mx-auto px-6">
        {/* 2. เปลี่ยน div คลุมหัวข้อเป็น motion.div และใช้ whileInView */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }} // once: true คือให้เด้งแค่ครั้งเดียวตอนเปิดดู
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4 tracking-tight">
            บริการของเรา
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* 3. ดึง index ออกมาจาก map แล้วส่งเป็น Props เข้าไปในการ์ด */}
          {services.map((item, index) => (
            <ServiceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
