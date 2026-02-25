import { Link } from "react-router";

function HeroSection() {
  return (
    <div className="relative w-full h-[calc(100dvh-4rem)] bg-[url('/img/img-1.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/60 to-transparent"></div>
      <div className="relative max-w-[1160px] px-6 m-auto h-full flex flex-col justify-center items-center md:items-start z-10">
        <div className="text-center md:text-left text-white mb-10">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-2">
            Maliwan <span className="text-amber-500">.</span>
          </h2>
          <h3 className="text-sm md:text-lg font-light uppercase tracking-[0.5em] text-amber-500/90 mb-8 pl-2">
            Aluminum & Glass
          </h3>
          <div className="flex items-stretch justify-center md:justify-start">
            <p className="max-w-md text-lg md:text-xl font-light text-neutral-200 leading-relaxed italic">
              รับติดตั้งประตูอลูมิเนียมและกระจก โดยมืออาชีพ
              <br />
              งานละเอียด ประณีต เพื่อบ้านที่คุณรัก
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link to={"contact"} className="w-full sm:w-auto">
            <button className="cursor-pointer w-full px-10 py-4 bg-amber-500 hover:bg-amber-600 text-white  font-bold rounded-full transition-all duration-300 shadow-lg shadow-amber-500/20 active:scale-95">
              ติดต่อสอบถาม
            </button>
          </Link>
          <Link to={"projects"} className="w-full sm:w-auto">
            <button className="cursor-pointer bg-white/10 w-full px-10 py-4 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 backdrop-blur-sm transition-all duration-300 active:scale-95">
              ชมผลงานของเรา
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
