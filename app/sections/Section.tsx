import { ReactNode } from 'react';

import { SectionId } from './sections';

function Section({ children, id }: { children: ReactNode; id: SectionId }) {
  return (
    <section id={id} className="h-dvh w-full overflow-hidden p-4">
      {children}
    </section>
  );
}

export default Section;
