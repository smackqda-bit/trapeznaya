import { photos } from "@/content";
import { Photo } from "./Photo";

const flakes = [
  { left: "8%", opacity: 0.5, duration: "16s", delay: "-3s" },
  { left: "22%", opacity: 0.35, duration: "20s", delay: "-11s" },
  { left: "37%", opacity: 0.45, duration: "18s", delay: "-7s" },
  { left: "51%", opacity: 0.3, duration: "22s", delay: "-15s" },
  { left: "66%", opacity: 0.45, duration: "17s", delay: "-5s" },
  { left: "81%", opacity: 0.35, duration: "21s", delay: "-13s" },
  { left: "94%", opacity: 0.5, duration: "19s", delay: "-9s" },
];

const facts = [
  { value: "3 500 ₽", label: "корпоратив с ведущим, за гостя" },
  { value: "На заказ", label: "новогодние салаты к вашему столу" },
  { value: "Подарок", label: "за подписку во ВКонтакте" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {flakes.map((f) => (
          <span
            key={f.left}
            className="absolute top-0 h-[3px] w-[3px] animate-snow rounded-full bg-gold"
            style={{ left: f.left, opacity: f.opacity, animationDuration: f.duration, animationDelay: f.delay }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-wrap gap-16 px-6 pt-16 md:px-8 md:pt-24">
        <div className="flex min-w-0 flex-[1_1_520px] flex-col justify-between gap-12">
          <div className="flex flex-col gap-9">
            <span className="eyebrow flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-bronze" />
              Новогодний сезон 2026 / 27
            </span>
            <h1 className="font-serif text-[clamp(56px,8vw,120px)] leading-[0.92] font-normal tracking-[-0.02em]">
              Новый год
              <br />
              <em className="text-bronze">по-купечески</em>
            </h1>
            <p className="max-w-[460px] text-[17px] leading-[1.75] font-light text-body">
              Корпоративы с ведущим и шоу-программой, новогодние салаты на заказ и подарок для каждого подписчика.
              Русская кухня в центре Пскова.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#news" className="btn-solid">
              Забронировать корпоратив
            </a>
            <a href="#news" className="btn-ghost">
              Салаты на заказ
            </a>
          </div>
        </div>

        <Photo
          label="Праздничный банкетный стол в Трапезной Купца"
          image={photos.hero}
          position="50% 40%"
          className="min-h-[460px] min-w-0 flex-[1_1_420px] md:min-h-[600px]"
          sizes="(min-width: 1180px) 45vw, 100vw"
          priority
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <dl className="mt-16 grid border-t border-line sm:grid-cols-3">
          {facts.map((f, i) => (
            <div
              key={f.value}
              className={`flex flex-col-reverse gap-1.5 py-7 sm:px-8 ${i === 0 ? "sm:pl-0" : "border-line max-sm:border-t sm:border-l"} ${i === 2 ? "sm:pr-0" : ""}`}
            >
              <dt className="text-[13px] text-muted">{f.label}</dt>
              <dd className="font-serif text-[34px] leading-none">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
