import Image from "next/image";

type Props = {
  label: string;
  image?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** CSS object-position, например "50% 30%", чтобы сдвинуть кадр */
  position?: string;
  /** Плавное приближение при наведении */
  zoom?: boolean;
};

/** Фото или аккуратная заглушка, если снимка ещё нет. */
export function Photo({ label, image, className = "", sizes = "100vw", priority, position, zoom }: Props) {
  return (
    <div className={`relative overflow-hidden bg-sand ${className}`}>
      {image ? (
        <Image
          src={image}
          alt={label}
          fill
          sizes={sizes}
          priority={priority}
          quality={85}
          draggable={false}
          className={`object-cover ${zoom ? "transition-transform duration-700 ease-out group-hover:scale-[1.04]" : ""}`}
          style={position ? { objectPosition: position } : undefined}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-xs tracking-[0.16em] text-muted uppercase">
          [Фото: {label}]
        </div>
      )}
    </div>
  );
}
