import { motion } from "framer-motion";

export default function BrandsMarquee() {
  // 1. เพิ่มชื่อแบรนด์ให้เยอะขึ้นหน่อยเพื่อให้แถวยาวพอที่จะเลื่อน
  const brands = [
    "TOSTEM",
    "VIGNET",
    "ALUK",
    "GUARDIAN GLASS",
    "AGC",
    "DORMA",
    "KNAUF",
  ];

  // 2. เคล็ดลับ Seamless Loop: เบิ้ล Array เป็น 2 ชุดต่อกัน
  const duplicatedBrands = [...brands, ...brands];

  return (
    // กล่องนอกสุด: กำหนด relative และ overflow-hidden
    <div className="w-full bg-neutral-900 py-8 border-b border-white/5 relative flex items-center overflow-hidden">
      {/* 3. Gradient ขอบซ้าย + ข้อความ Trusted Materials */}
      <div className="absolute left-0 h-full flex items-center pl-6 md:pl-[calc(50vw-600px+1.5rem)] z-10 bg-gradient-to-r from-neutral-900 via-neutral-900 to-transparent w-32 md:w-96 pointer-events-none">
        <p className="text-amber-500/80 text-xs md:text-sm font-bold uppercase tracking-[0.3em] whitespace-nowrap hidden md:block">
          Trusted Materials
        </p>
      </div>

      {/* 4. Gradient ขอบขวา: ช่วยให้ตัวหนังสือค่อยๆ เฟดหายไปแบบสมูท */}
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-neutral-900 to-transparent z-10 pointer-events-none" />

      {/* 5. กล่องลู่วิ่งแอนิเมชัน (Framer Motion) */}
      <motion.div
        className="flex items-center gap-16 md:gap-32 w-max pl-10 md:pl-96" // w-max สำคัญมาก เพื่อให้ความกว้างทะลุจอ
        animate={{ x: ["0%", "-50%"] }} // เลื่อนไปทางซ้ายครึ่งนึงของความกว้างทั้งหมด แล้วดีดกลับทันที
        transition={{
          repeat: Infinity, // เล่นวนลูปไม่รู้จบ
          ease: "linear", // เลื่อนด้วยความเร็วคงที่
          duration: 30, // เวลาที่ใช้ใน 1 รอบ (ปรับให้ช้าลงหรือเร็วขึ้นได้ที่นี่)
        }}
      >
        {duplicatedBrands.map((brand, index) => (
          <span
            key={index}
            className="text-2xl md:text-4xl font-black text-neutral-800 tracking-tighter hover:text-neutral-500 transition-colors duration-300 cursor-default"
          >
            {brand}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
