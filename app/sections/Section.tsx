import { ReactNode } from 'react';

import { SectionId } from './sections';

function Section({ children, id }: { children: ReactNode; id: SectionId }) {
  return (
    <section id={id} className="flex min-h-screen w-full flex-col p-4">
      {children}
    </section>
  );
}

export default Section;
