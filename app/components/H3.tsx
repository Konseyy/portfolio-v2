import clsx from 'clsx';

function H3({
  children,
  className,
}: {
  children: string | string[];
  className?: string;
}) {
  return <h3 className={clsx('text-h3', className)}>{children}</h3>;
}

export default H3;
