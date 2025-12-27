import clsx from 'clsx';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

function ImageLink({
  url,
  img,
  tooltip,
  className,
}: {
  url: string;
  img: StaticImageData;
  tooltip: string;
  className?: string;
}) {
  return (
    <Link
      href={url}
      rel="noopener noreferrer"
      className={clsx(
        'group relative rounded-full transition-all duration-300 active:opacity-75',
        className
      )}
    >
      <div className="rounded-full bg-black transition-all duration-300 group-hover:scale-120 group-hover:bg-white">
        <Image
          className="white-filter group-hover:black-filter size-full p-0.75 transition-transform duration-300 group-hover:scale-70"
          src={img}
          alt={tooltip}
        />
      </div>
      <span
        className={clsx(
          'rounded-lg bg-[rgba(255,255,255,0.1)] whitespace-nowrap text-white backdrop-blur-xs hover:hidden',
          'px-2 py-1',
          'absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2',
          'transition-all duration-300',
          'origin-top scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'
        )}
      >
        {tooltip}
      </span>
    </Link>
  );
}

export default ImageLink;
