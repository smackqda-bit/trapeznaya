import type { Metadata } from "next";
import "@fontsource/cormorant/400.css";
import "@fontsource/cormorant/400-italic.css";
import "@fontsource/cormorant/500.css";
import "@fontsource/manrope/300.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Трапезная Купца — столовая домашней кухни в Пскове",
  description:
    "Новогодние корпоративы с ведущим, салаты на заказ, комплексные обеды и доставка. Русская домашняя кухня в центре Пскова.",
  keywords: [
    "Трапезная Купца",
    "столовая Псков",
    "кафе Псков",
    "новогодний корпоратив Псков",
    "салаты на заказ",
    "русская кухня",
  ],
  openGraph: {
    title: "Трапезная Купца",
    description: "Сеть столовых по всей России",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
