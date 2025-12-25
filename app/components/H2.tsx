import clsx from 'clsx';

function H2({
  children,
  className,
}: {
  children: string | string[];
  className?: string;
}) {
  return <h2 className={clsx('text-h2', className)}>{children}</h2>;
}

export default H2;
