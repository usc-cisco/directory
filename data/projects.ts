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
    title: 'Project 1',
    image: 'https://picsum.photos/800/450?random=1',
    creator: 'John Doe',
    description: 'A modern e-commerce platform for selling handmade crafts.',
    url: 'https://project1.example.com',
    creatorGithubURL: 'https://github.com/johndoe',
  },
  {
    id: 2,
    title: 'Project 2',
    image: 'https://picsum.photos/800/450?random=2',
    creator: 'Jane Smith',
    description: 'A portfolio website showcasing photography and digital art.',
    url: 'https://project2.example.com',
    creatorGithubURL: 'https://github.com/janesmith',
  },
  {
    id: 3,
    title: 'Project 3',
    image: 'https://picsum.photos/800/450?random=3',
    creator: 'Mike Johnson',
    description: 'A task management app for small teams and freelancers.',
    url: 'https://project3.example.com',
    creatorGithubURL: 'https://github.com/mikejohnson',
  },
  {
    id: 4,
    title: 'Project 4',
    image: 'https://picsum.photos/800/450?random=4',
    creator: 'Sarah Wilson',
    description: 'A recipe sharing platform with meal planning features.',
    url: 'https://project4.example.com',
    creatorGithubURL: 'https://github.com/sarahwilson',
  },
  {
    id: 5,
    title: 'Project 5',
    image: 'https://picsum.photos/800/450?random=5',
    creator: 'David Brown',
    description: 'A fitness tracking app with personalized workout routines.',
    url: 'https://project5.example.com',
    creatorGithubURL: 'https://github.com/davidbrown',
  },
  {
    id: 6,
    title: 'Project 6',
    image: 'https://picsum.photos/800/450?random=6',
    creator: 'Emily Davis',
    description: 'A blog platform focused on sustainable living tips.',
    url: 'https://project6.example.com',
    creatorGithubURL: 'https://github.com/emilydavis',
  },
  {
    id: 7,
    title: 'Project 7',
    image: 'https://picsum.photos/800/450?random=7',
    creator: 'Alex Garcia',
    description: 'A local business directory with review system.',
    url: 'https://project7.example.com',
    creatorGithubURL: 'https://github.com/alexgarcia',
  },
  {
    id: 8,
    title: 'Project 8',
    image: 'https://picsum.photos/800/450?random=8',
    creator: 'Lisa Martinez',
    description: 'An online learning platform for coding bootcamps.',
    url: 'https://project8.example.com',
    creatorGithubURL: 'https://github.com/lisamartinez',
  },
  {
    id: 9,
    title: 'Project 9',
    image: 'https://picsum.photos/800/450?random=9',
    creator: 'Tom Anderson',
    description: 'A weather app with detailed forecasts and alerts.',
    url: 'https://project9.example.com',
    creatorGithubURL: 'https://github.com/tomanderson',
  },
  {
    id: 10,
    title: 'Project 10',
    image: 'https://picsum.photos/800/450?random=10',
    creator: 'Rachel Taylor',
    description: 'A social media scheduler for content creators.',
    url: 'https://project10.example.com',
    creatorGithubURL: 'https://github.com/racheltaylor',
  },
];
