import { contacts, delivery, dishes, lunches, photos, reviews, services } from "@/content";
import { LeadForm } from "./LeadForm";
import { Photo } from "./Photo";

const roman = ["I", "II", "III", "IV", "V", "VI"];

export function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-16 px-6 py-24 md:px-8 md:py-32">
        <div className="flex min-w-0 flex-[1_1_480px] items-start gap-4 md:gap-6">
          <Photo
            label="Вход в Трапезную Купца на Октябрьском проспекте"
            image={photos.aboutEntrance}
            className="aspect-[2/3] flex-1"
            sizes="(min-width: 1024px) 25vw, 50vw"
          />
          <Photo
            label="Вышитый рушник и икона в интерьере"
            image={photos.aboutRushnyk}
            className="mt-16 aspect-[2/3] flex-1 md:mt-24"
            sizes="(min-width: 1024px) 25vw, 50vw"
          />
        </div>
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-7">
          <span className="eyebrow">О нас</span>
          <h2 className="heading">Тепло русских традиций</h2>
          <p className="text-[17px] leading-[1.8] font-light text-body">
            Место, где пахнет свежей выпечкой, на столе ждёт горячий обед, а каждый рецепт хранит тепло русских
            традиций. Именно такой мы создаём Трапезную Купца — уютную, душевную и гостеприимную.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-6 py-24 md:px-8 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
          <div className="flex flex-col gap-5">
            <span className="eyebrow">Под ключ</span>
            <h2 className="heading">Всё в одном месте</h2>
          </div>
          <a
            href={contacts.vk}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-ink pb-1.5 text-xs font-medium tracking-[0.18em] uppercase transition-colors hover:border-bronze hover:text-bronze"
          >
            Обсудить мероприятие →
          </a>
        </div>
        <div className="grid gap-x-6 border-t border-ink pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div key={s.title} className="group flex flex-col gap-3 pb-10">
              <Photo
                label={s.title}
                image={s.image}
                zoom
                className="mb-3 aspect-[4/3] sm:aspect-[4/5]"
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
              />
              <span className="font-serif text-xl text-bronze">{roman[i]}</span>
              <h3 className="font-serif text-[28px] font-medium">{s.title}</h3>
              <p className="text-sm leading-[1.7] font-light text-body">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Kitchen() {
  return (
    <section id="kitchen" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-6 py-24 md:px-8 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
          <div className="flex flex-col gap-5">
            <span className="eyebrow">Кухня</span>
            <h2 className="heading">Готовим каждый день</h2>
          </div>
          <p className="max-w-[380px] text-[15px] leading-[1.75] font-light text-body">
            Супы, горячее, свежая выпечка и десерты — по домашним рецептам, из свежих продуктов.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:grid-cols-3">
          {dishes.map((d) => (
            <figure key={d.title} className="group m-0 flex flex-col gap-4">
              <Photo
                label={d.title}
                image={d.image}
                position={d.position}
                zoom
                className="aspect-[4/3]"
                sizes="(min-width: 1024px) 400px, 50vw"
              />
              <figcaption className="font-serif text-xl leading-tight md:text-2xl">{d.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Lunches() {
  return (
    <section id="lunches" className="scroll-mt-20 border-y border-line bg-paper">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-16 px-6 py-24 md:px-8 md:py-32">
        <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-7">
          <span className="eyebrow">Для офисов и предприятий</span>
          <h2 className="heading">Обеды для вашей команды</h2>
          <p className="max-w-[480px] text-base leading-[1.8] font-light text-body">
            Ежедневная доставка свежих комплексных обедов для офисов, предприятий, производств, больниц и других
            организаций.
          </p>
          <ul className="max-w-[480px] border-t border-ink">
            {lunches.map((l) => (
              <li key={l.title} className="flex items-baseline justify-between gap-4 border-b border-line py-5">
                <span className="text-[15px]">{l.title}</span>
                <span className="font-serif text-[32px]">{l.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}

export function Delivery() {
  return (
    <section id="delivery" className="scroll-mt-20">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-16 px-6 py-24 md:px-8 md:py-32">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-7">
          <span className="eyebrow">Доставка</span>
          <h2 className="heading">Праздник с доставкой</h2>
          <p className="max-w-[400px] text-base leading-[1.8] font-light text-body">
            Любимые блюда из «Трапезной Купца» — с доставкой в удобное для вас время.
          </p>
        </div>
        <div className="flex min-w-0 flex-[1_1_520px] flex-col border-t border-ink">
          {delivery.map((d) => (
            <a
              key={d.title}
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 border-b border-line px-2 py-7 transition-colors hover:bg-[#efeae0]"
            >
              <span className="font-serif text-4xl">{d.title}</span>
              <span className="text-xs font-medium tracking-[0.18em] uppercase">Заказать →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="review" className="scroll-mt-20 border-t border-line bg-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-6 py-24 md:px-8 md:py-32">
        <div className="flex flex-col gap-5">
          <span className="eyebrow">Отзывы</span>
          <h2 className="heading">Что говорят гости</h2>
        </div>
        <div className="grid border-t border-ink md:grid-cols-2 md:gap-x-16">
          {reviews.map((r) => (
            <figure key={r.name} className="m-0 flex flex-col gap-5 border-b border-line py-10">
              <blockquote className="font-serif text-2xl leading-[1.4] italic">«{r.text}»</blockquote>
              <figcaption className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
                {r.name} · 5 / 5
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contacts" className="scroll-mt-20 bg-ink text-[#e9e3d7]">
      <div className="mx-auto flex max-w-7xl flex-col gap-18 px-6 pt-24 pb-10 md:px-8">
        <div className="flex flex-wrap justify-between gap-12">
          <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-4">
            <span className="font-serif text-[clamp(40px,5vw,64px)] leading-none">Трапезная Купца</span>
            <span className="font-serif text-2xl text-gold italic">С наступающим Новым годом</span>
          </div>
          <address className="flex min-w-0 flex-[1_1_220px] flex-col gap-2.5 text-[15px] leading-relaxed font-light not-italic">
            <span className="text-[11px] font-medium tracking-[0.22em] text-gold uppercase">Адрес и часы</span>
            <span>{contacts.address}</span>
            {contacts.hours.map((h) => (
              <span key={h}>{h}</span>
            ))}
          </address>
          <div className="flex min-w-0 flex-[1_1_220px] flex-col gap-2.5 text-[15px] font-light">
            <span className="text-[11px] font-medium tracking-[0.22em] text-gold uppercase">Связаться</span>
            <a href={contacts.phoneHref} className="text-lg font-medium text-ivory hover:text-gold">
              {contacts.phone}
            </a>
            <a href={`mailto:${contacts.email}`} className="hover:text-gold">
              {contacts.email}
            </a>
            <a href={contacts.vk} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
              ВКонтакте →
            </a>
          </div>
        </div>
        <div className="border-t border-[#3a352f] pt-6 text-xs tracking-[0.08em] text-[#a39a8c]">
          © Трапезная Купца · Сеть столовых по всей России
        </div>
      </div>
    </footer>
  );
}
