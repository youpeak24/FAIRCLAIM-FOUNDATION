export interface PageMeta {
  title: string;
  description: string;
}

export const pageMeta: Record<string, PageMeta> = {
  '/': {
    title: 'Fairclaim Foundation | A fairer future. Built together.',
    description:
      'Fairclaim Foundation aims to make fairness easier to understand and pursue through public education, constructive dialogue, and a shared commitment to equitable opportunity.',
  },
  '/about': {
    title: 'About | Fairclaim Foundation',
    description:
      'Fairness is a shared responsibility. Learn about the purpose, values and intended direction of Fairclaim Foundation.',
  },
  '/mission-vision': {
    title: 'Mission & Vision | Fairclaim Foundation',
    description:
      'Read Fairclaim Foundation’s mission and vision in plain language: informed participation, constructive dialogue, and dignity for every person.',
  },
  '/initiatives': {
    title: 'Proposed Initiatives | Fairclaim Foundation',
    description:
      'Explore the four proposed focus areas that express Fairclaim Foundation’s commitment to fairness, understanding, and constructive participation.',
  },
  '/contact': {
    title: 'Contact | Fairclaim Foundation',
    description:
      'Share a question, an idea, or an interest in collaborating with Fairclaim Foundation.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy (draft) | Fairclaim Foundation',
    description: 'Draft privacy information for visitors to the Fairclaim Foundation website.',
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions (draft) | Fairclaim Foundation',
    description: 'Draft terms of use for visitors to the Fairclaim Foundation website.',
  },
};

export const notFoundMeta: PageMeta = {
  title: 'Page not found | Fairclaim Foundation',
  description: 'The page you were looking for could not be found.',
};
