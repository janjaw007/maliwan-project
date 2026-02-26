import { motion } from "framer-motion";
import { Link } from "react-router";

function HeroSection() {
  return (
    <div className="relative w-full h-[calc(100dvh-4rem)] bg-[url('/img/img-1.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/60 to-transparent" />

      <div className="relative max-w-[1160px] h-full m-auto px-6 flex flex-col justify-center items-center lg:items-start z-10">
        <div className="text-center md:text-left text-white mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-2"
          >
            Maliwan<span className="text-amber-500">.</span>
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-lg font-light uppercase tracking-[0.5em] text-amber-500/90 mb-8 pl-2"
          >
            Aluminium & Glass
          </motion.h3>

          <div className="flex items-stretch justify-center md:justify-start">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              style={{ originY: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
              className="w-[2px] bg-amber-500 mr-4"
            />
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="max-w-md text-lg md:text-xl font-light text-neutral-200 leading-relaxed italic"
            >
              รับติดตั้งประตูอลูมิเนียมและกระจก โดยมืออาชีพ
              <br className="hidden md:block" />
              งานละเอียด ประณีต เพื่อบ้านที่คุณรัก
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link to="contact" className="w-full sm:w-auto">
            <button className="cursor-pointer w-full px-10 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-amber-500/20 active:scale-95">
              ติดต่อสอบถาม
            </button>
          </Link>

          <Link to="projects" className="w-full sm:w-auto">
            <button className="cursor-pointer w-full px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 backdrop-blur-sm transition-all duration-300 active:scale-95">
              ชมผลงานของเรา
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
