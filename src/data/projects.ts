export interface Project {
  id: number;
  title: string;
  image: string;
  creator: string;
  description: string;
  url: string;
  creatorGithubURL: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Directory',
    image: 'https://directory.dcism.org/opengraph-image.png',
    creator: 'CISCO',
    description:
      'The Curated List of Websites and Services Made by DCISM students for DCISM Students.',
    url: 'https://directory.dcism.org',
    creatorGithubURL: 'https://github.com/usc-cisco',
  },
  {
    id: 2,
    title: 'Hermes',
    image: 'https://queue.dcism.org/opengraph-image.png',
    creator: 'The Hermes Team',
    description: 'An enrollment queue-ing system for DCISM.',
    url: 'https://queue.dcism.org/',
    creatorGithubURL: 'https://github.com/usc-cisco',
  },
  {
    id: 3,
    title: 'Tambay',
    image: 'https://tambay.dcism.org/opengraph-image.png',
    creator: 'CISCO',
    description: 'A free classroom-tracking system for students in DCISM.',
    url: 'https://tambay.dcism.org/',
    creatorGithubURL: 'https://github.com/usc-cisco',
  },
];
