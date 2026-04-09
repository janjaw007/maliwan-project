import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
  // ข้อมูลสำหรับหมวด "ทำไมต้องเลือกเรา"
  const coreValues = [
    {
      icon: "🏆",
      title: "วัสดุมาตรฐานสากล",
      description:
        "เลือกใช้อลูมิเนียมและกระจกเกรดพรีเมียม รวมถึงแบรนด์ TOSTEM ที่ทั่วโลกยอมรับ",
    },
    {
      icon: "👷‍♂️",
      title: "ช่างผู้ชำนาญการ",
      description:
        "ทีมช่างประสบการณ์สูงกว่า 30 ปี ผ่านการอบรมมาตรฐานการติดตั้งมาอย่างเข้มงวด",
    },
    {
      icon: "⏱️",
      title: "ส่งมอบงานตรงเวลา",
      description:
        "วางแผนการทำงานอย่างเป็นระบบ ดำเนินงานรวดเร็ว และส่งมอบงานตรงตามกำหนดการ",
    },
    {
      icon: "🛡️",
      title: "รับประกันผลงาน",
      description:
        "ดูแลอย่างใส่ใจแม้ส่งมอบงานแล้ว พร้อมการรับประกันคุณภาพและการติดตั้ง",
    },
  ];

  return (
    <>
      <div className="w-full bg-white">
        {/* 1. Page Header */}
        <div className="relative bg-neutral-950 py-32 flex items-center justify-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl pointer-events-none"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
              About <span className="text-amber-500">Us</span>
            </h1>
            <p className="text-neutral-400 font-light tracking-[0.2em] uppercase text-sm md:text-base">
              รู้จักกับ หจก. มะลิวัลย์ กระจกอลูมิเนียม 2565
            </p>
          </motion.div>
        </div>

        {/* 2. Our Story Section */}
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-neutral-100 rounded-3xl transform rotate-3 -z-10 hidden md:block"></div>
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-neutral-900/10">
                <img
                  src="/img/img-1.jpg"
                  alt="Maliwan Experience"
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white">
                  <p className="text-4xl font-black text-amber-500 mb-1">30+</p>
                  <p className="text-sm font-bold text-neutral-800 uppercase tracking-wider">
                    Years of
                    <br />
                    Experience
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6 leading-snug">
                จากประสบการณ์กว่า 30 ปี <br />
                <span className="text-amber-500 font-light text-2xl md:text-3xl">
                  สู่ผู้นำด้านระบบประตูหน้าต่างมาตรฐานสากล
                </span>
              </h2>
              <div className="space-y-6 text-neutral-600 font-light leading-relaxed">
                <p>
                  ที่ <strong>มะลิวัลย์ กระจกอลูมิเนียม</strong>{" "}
                  เราเริ่มต้นด้วยความมุ่งมั่นที่จะส่งมอบงานกระจกและอลูมิเนียมที่มีคุณภาพสูงสุดให้กับชาวขอนแก่นและพื้นที่ภาคอีสาน
                </p>
                <p>
                  ตลอดระยะเวลากว่า 3 ทศวรรษ เราได้สั่งสมประสบการณ์ ความรู้
                  และทักษะความชำนาญ จนได้รับความไว้วางใจให้เป็น{" "}
                  <strong>
                    ตัวแทนจำหน่ายอย่างเป็นทางการของ TOSTEM (ทอสเท็ม)
                  </strong>{" "}
                  แบรนด์ประตูหน้าต่างอันดับ 1 จากประเทศญี่ปุ่น
                </p>
              </div>
              <div className="mt-8 bg-neutral-50 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <span className="text-amber-600 text-lg">🛡️</span>
                  </div>
                  <h4 className="font-bold text-neutral-900 text-lg">
                    ตัวแทนจำหน่ายมาตรฐาน
                  </h4>
                </div>
                <p className="text-sm text-neutral-600 pl-13">
                  ได้รับรหัสตัวแทนจำหน่าย TOSTEM{" "}
                  <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded ml-1">
                    (Dealer Code: 10011821)
                  </span>
                  <br />
                  ลูกค้าจึงมั่นใจในสินค้าของแท้และคุณภาพการติดตั้งได้ 100%
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3. NEW: Why Choose Us Section */}
        <div className="bg-neutral-50 py-24 border-t border-neutral-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight mb-4">
                ทำไมลูกค้าถึง{" "}
                <span className="text-amber-500">ไว้วางใจเรา</span>
              </h2>
              <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-amber-100 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 font-light leading-relaxed text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
