import { http,HttpResponse } from 'msw';
 
const mockNews = [
  {
    id: '1',
    title: 'MMF Culture and Arts Festival',
    writtenBy: 'Written by ChatGPT',
    location: 'Antsirabe',
    date: 'July 15, 2023',
    description:
      'The MMF Culture and Arts Festival was a vibrant celebration of unity, showcasing the profound impact of music and art. Nestled in the picturesque city of Antsirabe, Madagascar, the event went beyond being just a festival; it was a heartfelt homage to the resilience, joy, and creativity of the children and communities we champion. The lively performances and art exhibitions ignited a sense of belonging, highlighting the blossoming talents within these communities. Through engaging workshops and collective projects, the festival offered a platform for attendees, particularly the youth, to unlock their creative capabilities.',
  },
  {
    id: '2',
    title: 'Stars Align for Madagascar at Paris Benefit Concert',
    writtenBy: 'Written by ChatGPT',
    location: 'Paris, France',
    date: 'June 22, 2023',
    description:
      "Last night, some of the world's most beloved musicians came together for a benefit concert, 'Voices for Madagascar,' to support the Music Changes Lives School. Held at the iconic La Seine Musicale, the event featured performances that spanned genres and generations, from classical to contemporary pop. The concert not only highlighted the universal language of music but also raised significant funds and awareness for music education in Madagascar. The event was a resounding success, with all proceeds going directly to the school, ensuring that music continues to change lives on the island.",
  },
  {
    id: '3',
    title: 'Malagasy Students Win Big at Youth Music Festival',
    writtenBy: 'Written by ChatGPT',
    location: 'Barcelona, Spain',
    date: 'August 8, 2023',
    description:
      'Students from the Music Changes Lives School in Madagascar took the world stage by storm at the International Youth Music Festival in Barcelona. Competing against young musicians from around the globe, the Malagasy contingent wowed audiences and judges alike with their skill, passion, and unique blend of traditional and modern musical influences. Their performances earned them several awards and international recognition, shining a spotlight on the talent being nurtured at the Music Changes Lives School and underscoring the importance of supporting music education worldwide.',
  },
  {
    id: '4',
    title: "Music School Launches 'Melody Masters' App",
    writtenBy: 'Written by Chat GPT',
    location: 'Antananarivo',
    date: 'November 30, 2023',
    description:
      "In a move to harness technology for education, the Music Changes Lives School has launched an innovative new app, 'Melody Masters', designed to bring music education to students across Madagascar and beyond.\n\nThe app combines interactive lessons, games, and virtual performances to make learning music accessible and fun for children everywhere, especially in remote areas with limited access to traditional music education.\n\nDeveloped in partnership with leading tech companies, 'Melody Masters' represents a significant step forward in the school's mission to make music education universally accessible, empowering students to explore their musical potential regardless of their circumstances.",
  },
];

export const handlers = [
    // GET all news
    http.get('/api/news', () => {
      return HttpResponse.json(mockNews, { status: 200 });
    }),
  
    // GET news by ID
    http.get('/api/news/:id', ({ params }) => {
      const post = mockNews.find((item) => item.id === params.id);
  
      if (!post) {
        return new HttpResponse('News post not found', { status: 404 });
      }
  
      return HttpResponse.json(post, { status: 200 });
    }),
  ];