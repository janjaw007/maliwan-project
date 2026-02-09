import { Link } from "react-router";

const Home = () => {
  return (
    <main className="w-full font-sans">
      <section
        className="relative h-screen w-full overflow-hidden"
        aria-label="ส่วนต้อนรับ: บริการรับติดตั้งกระจกอลูมิเนียมครบวงจร"
      >
        <img
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
          alt="ตัวอย่างงานออกแบบบ้านหรู ติดตั้งประตูกระจกบานเลื่อนและหน้าต่างอลูมิเนียมบานใหญ่"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
          loading="eager"
        />

        <div
          className="absolute inset-0 bg-gray-900/40"
          aria-hidden="true"
        ></div>

        <div className="relative flex h-full items-center justify-center px-6 text-center">
          <div className="max-w-5xl space-y-8">
            <span className="inline-block animate-fade-in-up rounded-full bg-orange-600/90 px-4 py-1.5 text-sm font-bold tracking-wide text-white shadow-lg backdrop-blur-sm">
              รับเหมาติดตั้งกระจกอลูมิเนียม เกรดพรีเมียม
            </span>

            <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-2xl leading-tight">
              เนรมิตบ้านสวยด้วยงานดีไซน์ <br />
              <span className="text-orange-500">กระจกและอลูมิเนียม</span>
            </h1>

            <p className="animate-fade-in-up mx-auto max-w-2xl text-lg font-light text-gray-100 sm:text-xl leading-relaxed drop-shadow-md delay-100">
              บริการออกแบบและติดตั้งประตูหน้าต่างบานเลื่อน บานสวิง กั้นห้องกระจก
              และงานต่อเติมครบวงจร โดยทีมช่างมืออาชีพ ประสบการณ์กว่า 20 ปี
              งานเนี๊ยบ แข็งแรง ทนทาน
            </p>

            <div className="animate-fade-in-up flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row delay-200">
              <Link
                to="/projects"
                className="min-w-[180px] rounded-sm bg-white px-8 py-4 text-base font-bold tracking-wide text-gray-900 transition-all hover:bg-orange-600 hover:text-white hover:shadow-xl hover:-translate-y-1"
                aria-label="ดูผลงานที่ผ่านมาของเรา"
              >
                ดูผลงานของเรา
              </Link>
              <Link
                to="/contact"
                className="min-w-[180px] rounded-sm border border-white bg-transparent px-8 py-4 text-base font-bold tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900 hover:-translate-y-1"
                aria-label="ติดต่อสอบถามราคาหรือประเมินหน้างาน"
              >
                ติดต่อประเมินราคา
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              id="services-heading"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              บริการและความเชี่ยวชาญ
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              เราให้บริการงานกระจกอลูมิเนียมสำหรับบ้านพักอาศัย อาคารสำนักงาน
              และร้านค้า ด้วยวัสดุคุณภาพสูง เลือกสีและรูปแบบได้ตามต้องการ
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="ประตูและหน้าต่างอลูมิเนียม"
              desc="ติดตั้งชุดประตูหน้าต่างบานเลื่อน บานสวิง บานกระทุ้ง และบานเฟี้ยม ด้วยเส้นอลูมิเนียมมาตรฐาน มอก. พร้อมระบบล็อคที่แน่นหนา"
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              }
            />

            <ServiceCard
              title="ฉากกั้นห้องกระจก"
              desc="บริการกั้นห้องกระจกเทมเปอร์ (Tempered Glass) สำหรับออฟฟิศ ห้องประชุม หรือกั้นห้องนั่งเล่น เพื่อความโปร่งโล่งและทันสมัย"
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              }
            />

            <ServiceCard
              title="งานรีโนเวทและต่อเติม"
              desc="รับรื้อถอนประตูหน้าต่างไม้เก่า เปลี่ยนเป็นอลูมิเนียม งานต่อเติมครัวหลังบ้าน กั้นระเบียง และงานซ่อมแซมกระจกแตก"
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              }
            />
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-12 text-center text-white/60 text-sm">
        <p>© 2026 Maliwan Aluminium & Glass. สงวนลิขสิทธิ์.</p>
      </footer>
    </main>
  );
};

const ServiceCard = ({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) => (
  <article className="group rounded-2xl bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100">
    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        {icon}
      </svg>
    </div>
    <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </article>
);

export default Home;
