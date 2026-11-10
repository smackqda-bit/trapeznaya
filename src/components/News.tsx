import { contacts, news } from "@/content";
import type { ReactNode } from "react";

function NewsRow({
  index,
  tag,
  title,
  text,
  aside,
}: {
  index: string;
  tag: string;
  title: string;
  text: string;
  aside: ReactNode;
}) {
  return (
    <article className="flex flex-wrap items-start gap-x-12 gap-y-6 border-b border-line py-12 transition-colors hover:bg-ivory md:px-4">
      <span className="flex-[0_0_72px] font-serif text-[28px] text-bronze">{index}</span>
      <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-3.5">
        <span className="text-[11px] font-medium tracking-[0.22em] text-muted uppercase">{tag}</span>
        <h3 className="font-serif text-[clamp(32px,3.4vw,40px)] leading-[1.05] font-medium">{title}</h3>
        <p className="max-w-[560px] text-[15px] leading-[1.75] font-light text-body">{text}</p>
      </div>
      <div className="flex min-w-0 flex-[0_1_260px] flex-col items-start gap-5">{aside}</div>
    </article>
  );
}

export function News() {
  const { corporate, salads, vk } = news;

  return (
    <section id="news" className="scroll-mt-20 border-y border-line bg-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-24 md:px-8 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
          <div className="flex flex-col gap-5">
            <span className="eyebrow">Новости и акции</span>
            <h2 className="font-serif text-[clamp(44px,5.5vw,76px)] leading-none font-normal tracking-[-0.01em]">
              К празднику
            </h2>
          </div>
          <p className="max-w-[380px] text-[15px] leading-[1.75] font-light text-body">
            Бронируйте заранее — даты в декабре разбирают быстро.
          </p>
        </div>

        <div className="border-t border-ink">
          <NewsRow
            index="01"
            {...corporate}
            aside={
              <>
                <span className="flex flex-col gap-1">
                  <span className="font-serif text-5xl leading-none">{corporate.price}</span>
                  <span className="text-[13px] text-muted">{corporate.priceNote}</span>
                </span>
                <a href={contacts.vk} className="btn-solid px-6 py-4" target="_blank" rel="noopener noreferrer">
                  Забронировать
                </a>
              </>
            }
          />
          <NewsRow
            index="02"
            {...salads}
            aside={
              <>
                <span className="flex flex-col gap-1">
                  <span className="text-[13px] text-muted">Заказ по телефону</span>
                  <a href={contacts.phoneHref} className="font-serif text-[30px] leading-[1.1] hover:text-bronze">
                    {contacts.phone}
                  </a>
                </span>
                <a href={contacts.phoneHref} className="btn-ghost px-6 py-4">
                  Заказать
                </a>
              </>
            }
          />
          <NewsRow
            index="03"
            {...vk}
            aside={
              <>
                <ol className="flex flex-col gap-1.5 text-[13px] text-body">
                  {vk.steps.map((s, i) => (
                    <li key={s}>
                      {i + 1} — {s}
                    </li>
                  ))}
                </ol>
                <a href={contacts.vk} className="btn-ghost px-6 py-4" target="_blank" rel="noopener noreferrer">
                  Подписаться
                </a>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
