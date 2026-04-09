import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    // 1. เปลี่ยนพื้นหลังเป็นสีเทาเข้มเกือบดำ (bg-neutral-900) เพื่อความพรีเมียมและถนอมสายตา
    <div className="py-24 bg-neutral-900 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* 2. Header: ปรับให้ดูผู้ดีขึ้น ใช้สีขาวตัดกับสีเทาอ่อน และลดความแสบตาของสีส้มลง */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            ติดต่อสอบถาม{" "}
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full md:mx-0 mx-auto opacity-80"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ฝั่งซ้าย: ข้อมูลติดต่อ (ปรับ Text ให้เข้ากับพื้นหลังสีเข้ม) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="space-y-8">
              {/* รายการที่ 1: ที่อยู่ */}
              <div className="flex items-start gap-5">
                {/* 3. ไอคอน: ใช้พื้นหลังใสๆ ขอบบางๆ เพื่อไม่ให้แย่งซีน */}
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 mt-1">
                  <span className="text-amber-500 text-lg">📍</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-2 tracking-wide">
                    ห้างหุ้นส่วนจำกัด มะลิวัลย์ กระจกอลูมิเนียม 2565
                  </h4>
                  <p className="text-neutral-400 font-light leading-relaxed text-sm">
                    69/4 หมู่ที่ 1 ตำบลชุมแพ อำเภอชุมแพ
                    <br />
                    จังหวัดขอนแก่น 40130
                    <br />
                    ประเทศไทย
                  </p>
                </div>
              </div>

              {/* รายการที่ 2: เบอร์โทร */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 mt-1">
                  <span className="text-amber-500 text-lg">📞</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-2 tracking-wide">
                    เบอร์โทรศัพท์
                  </h4>
                  <div className="space-y-1">
                    <p className="text-neutral-400 font-light hover:text-amber-400 transition-colors cursor-pointer text-sm">
                      092-461-5451{" "}
                      <span className="text-neutral-500 text-xs ml-1">
                        (คุณโอ๋)
                      </span>
                    </p>
                    <p className="text-neutral-400 font-light hover:text-amber-400 transition-colors cursor-pointer text-sm">
                      092-914-2965{" "}
                      <span className="text-neutral-500 text-xs ml-1">
                        (คุณใหญ่)
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* รายการที่ 3: Facebook */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 mt-1">
                  <span className="text-blue-400 text-lg">📘</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-2 tracking-wide">
                    Facebook
                  </h4>
                  <a
                    href="#"
                    className="text-neutral-400 font-light hover:text-blue-400 transition-colors cursor-pointer underline underline-offset-4 decoration-neutral-600 hover:decoration-blue-400 text-sm"
                  >
                    มะลิวัลย์กระจกอลูมิเนียม
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ฝั่งขวา: แผนที่ Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 w-full h-[300px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 relative group"
          >
            <div className="absolute top-4 right-4 bg-neutral-900/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-10 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10">
              คลิกเพื่อดูเส้นทาง
            </div>

            {/* 4. แผนที่: ดรอปความสว่างลง (brightness-75) เพื่อให้กลืนไปกับธีมมืด ไม่สะท้อนแสงเข้าตา */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.6828036147535!2d102.1008413!3d16.5421037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31221f917bb21565%3A0xa35c83413b4e7043!2z4Lih4Liw4Lil4Li04Lin4Lix4Lil4Lii4LmM4LiB4Lij4Liw4LiI4LiB4Lit4Lil4Li54Lih4Li04LmA4LiZ4Li14Lii4LihIFRPU1RFTSDguIrguLjguKHguYHguJ4!5e0!3m2!1sth!2sth!4v1775744798089!5m2!1sth!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="brightness-75 contrast-125 grayscale-[20%] opacity-80 hover:brightness-100 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
