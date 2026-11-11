const features = [
  {
    title: "เรียนรู้พื้นฐาน",
    description: "เริ่มจากคำสั่งที่ใช้บ่อย เช่น init, add, commit และ push",
  },
  {
    title: "ทำงานกับ Branch",
    description: "แยกงานด้วย branch แล้วรวมกลับด้วย merge หรือ rebase",
  },
  {
    title: "ทำงานเป็นทีม ",
    description: "ใช้ pull request และ code review ร่วมกับเพื่อนร่วมทีม",
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-12 sm:px-6">
      <section className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          เรียน Git แบบเข้าใจง่าย
        </h1>
        <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          เนื้อหาสั้น กระชับ พร้อมตัวอย่างที่นำไปใช้ได้จริง
        </p>
        <a
          href="#features"
          className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          เริ่มต้นเลย
        </a>
      </section>

      <section id="features" className="grid gap-6 sm:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <h2 className="mb-2 text-lg font-semibold">{feature.title}</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      <section id="about" className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">เกี่ยวกับ</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Lean Git เป็นพื้นที่สำหรับเรียนรู้ Git ทีละขั้น
          ตั้งแต่เริ่มต้นจนใช้งานในทีมได้อย่างมั่นใจ
        </p>
      </section>
    </div>
  );
}
