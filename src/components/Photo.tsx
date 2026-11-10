import Image from "next/image";

type Props = {
  label: string;
  image?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** Фото или аккуратная заглушка, если снимка ещё нет. */
export function Photo({ label, image, className = "", sizes = "100vw", priority }: Props) {
  return (
    <div className={`relative overflow-hidden bg-sand ${className}`}>
      {image ? (
        <Image src={image} alt={label} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-xs tracking-[0.16em] text-muted uppercase">
          [Фото: {label}]
        </div>
      )}
    </div>
  );
}
