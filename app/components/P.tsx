import clsx from 'clsx';

function P({
  children,
  className,
}: {
  children: string | string[];
  className?: string;
}) {
  return <p className={clsx('text-paragraph', className)}>{children}</p>;
}

export default P;
