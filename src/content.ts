// Весь текст и данные сайта в одном месте — правьте здесь.
// Чтобы поставить фото: положите файл в /public/photos и укажите путь в поле `image`,
// например image: "/photos/hall.jpg".

export const contacts = {
  phone: "+7 (900) 992-36-34",
  phoneHref: "tel:+79009923634",
  email: "TrapeZnKup1q@yandex.ru",
  vk: "https://vk.ru/trapeznaykupca",
  address: "г. Псков, Октябрьский пр-кт, 33",
  hours: ["Пн–Пт 08:00–20:00", "Сб–Вс 09:30–20:00"],
};

export const nav = [
  { href: "#news", label: "Новости" },
  { href: "#about", label: "О нас" },
  { href: "#gallery", label: "Галерея" },
  { href: "#lunches", label: "Обеды" },
  { href: "#delivery", label: "Доставка" },
  { href: "#review", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export type NewsItem = {
  tag: string;
  title: string;
  text: string;
};

export const photos = {
  hero: "/photos/hero-banquet.jpg",
  aboutEntrance: "/photos/about-entrance.jpg",
  aboutRushnyk: "/photos/about-rushnyk.jpg",
};

export const news = {
  corporate: {
    image: "/photos/news-corporate.jpg",
    imageAlt: "Банкетный стол, накрытый к празднику",
    tag: "Корпоративы",
    title: "Новогодние корпоративы с шоу-программой",
    text: "Праздничный банкет, шоу-программа и ведущий. Уютный зал, домашняя кухня и атмосфера настоящего купеческого застолья.",
    price: "3 500 ₽",
    priceNote: "за одного человека",
  },
  salads: {
    image: "/photos/news-olivier.jpg",
    imageAlt: "Салат оливье",
    tag: "Кулинария",
    title: "Новогодние салаты на заказ",
    text: "Приготовим любимые новогодние салаты к вашему столу — из свежих продуктов, по домашним рецептам, к удобному времени.",
  },
  vk: {
    image: "/photos/news-gift.jpg",
    imageAlt: "Букет пионов на витрине",
    tag: "Акция",
    title: "Приз за подписку во ВКонтакте",
    text: "Подпишитесь на наше сообщество во ВКонтакте и покажите подписку на кассе — вручим вам подарок от «Трапезной Купца».",
    steps: ["Подпишитесь на сообщество", "Покажите подписку на кассе", "Получите приз"],
  },
};

export type Slide = { title: string; note: string; image?: string };

export const gallery: Slide[] = [
  { title: "Зал", note: "Купеческий интерьер в центре Пскова", image: "/photos/gallery-hall.jpg" },
  { title: "Витрина", note: "Чай, кофе, свежая выпечка и десерты", image: "/photos/gallery-counter.jpg" },
  { title: "Детали", note: "Самовар, старинный фарфор и народные мотивы", image: "/photos/gallery-wall.jpg" },
  { title: "Вход", note: "Октябрьский проспект, 33", image: "/photos/gallery-facade.jpg" },
];

export const services = [
  // wide: горизонтальное фото — в вертикальной карточке его нужно грузить крупнее, иначе будет мыло
  { title: "Домашняя кухня", text: "Вкусно, сытно и по-домашнему каждый день", image: "/photos/service-kitchen.jpg", wide: true },
  { title: "Пекарня-кондитерская", text: "Свежая выпечка и десерты каждый день", image: "/photos/service-bakery.jpg", wide: true },
  { title: "Кейтеринг", text: "Выездное обслуживание мероприятий любого формата", image: "/photos/service-catering.jpg" },
  { title: "Банкетный зал", text: "Праздники, юбилеи, свадьбы и корпоративы в уютной атмосфере", image: "/photos/service-banquet.jpg" },
];

// Блок «Кухня»: названия блюд можно поправить под ваше меню
export const dishes = [
  { title: "Домашний суп", image: "/photos/dish-soup.jpg" },
  { title: "Котлета с гречкой", image: "/photos/dish-cutlet.jpg" },
  { title: "Мясо в томатном соусе с рисом", image: "/photos/dish-stew.jpg" },
  { title: "Меренговый рулет", image: "/photos/dish-meringue.jpg" },
  { title: "Пирожное «Яблочко»", image: "/photos/dish-apples.jpg" },
  { title: "Свежий кофе", image: "/photos/dish-coffee.jpg", position: "50% 62%" },
];

export const lunches = [
  { title: "Комплексный обед", price: "320 ₽" },
  { title: "Комплексный обед + компот", price: "350 ₽" },
];

export const delivery = [
  {
    title: "Яндекс Еда",
    href: "https://eda.yandex.ru/r/trapeznaa_kupca_restaurant?is_ad=true&placeSlug=trapeznaya_kupca",
  },
  {
    title: "Деливери",
    href: "https://market-delivery.yandex.ru/r/trapeznaa_kupca_restaurant?placeSlug=trapeznaya_kupca",
  },
  {
    title: "Чиббис",
    href: "https://chibbis.ru/pskov/restaurant/trapeznaya-kuptsa/menu",
  },
];

export const reviews = [
  {
    name: "Соловьева Олеся",
    text: "Отличная, новая столовая в центре города. Интерьер как в хорошем ресторане, всё оформлено со вкусом и в богатом стиле.",
  },
  {
    name: "Смагин Даниил",
    text: "Случайно зашли и были очарованы этим уютным кафе. Прекрасное место с удивительным и интересным интерьером.",
  },
  {
    name: "Кузнецов Александр",
    text: "Интерьер, атмосфера, народные песни, картины — всё впечатлило. А еда домашняя, вкусная!",
  },
  {
    name: "Тимохина Ирина",
    text: "Приехали на псковский марафон и случайно нашли это замечательное место. Чисто, уютно, сытно, вкусно.",
  },
];
