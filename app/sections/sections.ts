export const sectionIds = {
  welcome: 'welcome',
  aboutMe: 'about-me',
  skills: 'skills',
  projects: 'projects',
  contact: 'contact',
} as const;

export type SectionId = (typeof sectionIds)[keyof typeof sectionIds];
