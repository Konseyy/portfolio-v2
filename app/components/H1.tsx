import clsx from 'clsx';

function H1({
  children,
  className,
}: {
  children: string | string[];
  className?: string;
}) {
  return <h1 className={clsx('text-h1', className)}>{children}</h1>;
}

export default H1;
