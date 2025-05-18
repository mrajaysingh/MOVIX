// Sample content data for the streaming platform

export const featuredContent = [
  {
    id: 'paradise-island-1',
    title: 'Epic Adventures in Paradise Island',
    thumbnail: 'https://images.pexels.com/photos/3876401/pexels-photo-3876401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    duration: '48m',
    year: 2023,
    rating: 4.8,
    tags: ['Adventure', 'Documentary', 'Nature'],
    type: 'series',
    isPremium: true,
    description: 'Journey through breathtaking landscapes and experience thrilling adventures in this premium exclusive series.'
  },
  {
    id: 'city-lights',
    title: 'City Lights: Urban Exploration',
    thumbnail: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    duration: '1h 35m',
    year: 2023,
    rating: 4.5,
    tags: ['Documentary', 'Urban', 'Travel'],
    type: 'movie',
    isPremium: true
  },
  {
    id: 'ocean-depths',
    title: 'The Mysteries of Ocean Depths',
    thumbnail: 'https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    duration: '52m',
    year: 2022,
    rating: 4.7,
    tags: ['Nature', 'Science', 'Documentary'],
    type: 'series',
    isPremium: false
  },
  {
    id: 'desert-journey',
    title: 'Desert Journey: Survival',
    thumbnail: 'https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    duration: '1h 22m',
    year: 2023,
    rating: 4.6,
    tags: ['Adventure', 'Survival', 'Documentary'],
    type: 'movie',
    isPremium: true
  },
  {
    id: 'mountain-peaks',
    title: 'Conquering Mountain Peaks',
    thumbnail: 'https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    duration: '45m',
    year: 2022,
    rating: 4.9,
    tags: ['Adventure', 'Sports', 'Nature'],
    type: 'series',
    isPremium: true
  },
  {
    id: 'wildlife-sanctuary',
    title: 'Wildlife Sanctuary: Preservation',
    thumbnail: 'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    duration: '1h 15m',
    year: 2023,
    rating: 4.7,
    tags: ['Nature', 'Animals', 'Documentary'],
    type: 'movie',
    isPremium: false
  },
  {
    id: 'space-odyssey',
    title: 'Space Odyssey: Beyond Stars',
    thumbnail: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    duration: '55m',
    year: 2023,
    rating: 4.9,
    tags: ['Science', 'Space', 'Technology'],
    type: 'series',
    isPremium: true
  },
  {
    id: 'culinary-masters',
    title: 'Culinary Masters: Global Cuisine',
    thumbnail: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    duration: '42m',
    year: 2022,
    rating: 4.6,
    tags: ['Food', 'Travel', 'Culture'],
    type: 'series',
    isPremium: false
  },
];

export const categoryContent = {
  trending: [
    ...featuredContent.slice(0, 4),
    {
      id: 'aerial-views',
      title: 'Aerial Views: Earth from Above',
      thumbnail: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      duration: '40m',
      year: 2023,
      rating: 4.5,
      tags: ['Nature', 'Photography', 'Documentary'],
      type: 'series',
      isPremium: true
    },
    {
      id: 'ancient-ruins',
      title: 'Ancient Ruins: Lost Civilizations',
      thumbnail: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      duration: '1h 28m',
      year: 2022,
      rating: 4.8,
      tags: ['History', 'Archaeological', 'Documentary'],
      type: 'movie',
      isPremium: false
    },
    {
      id: 'urban-artists',
      title: 'Urban Artists: Street Expression',
      thumbnail: 'https://images.pexels.com/photos/2119706/pexels-photo-2119706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      duration: '50m',
      year: 2023,
      rating: 4.4,
      tags: ['Art', 'Culture', 'Urban'],
      type: 'series',
      isPremium: false
    },
    {
      id: 'extreme-sports',
      title: 'Extreme Sports: The Limit',
      thumbnail: 'https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      duration: '35m',
      year: 2023,
      rating: 4.7,
      tags: ['Sports', 'Adventure', 'Action'],
      type: 'series',
      isPremium: true
    },
  ],
  latest: [
    {
      id: 'tech-revolution',
      title: 'Tech Revolution: Future Now',
      thumbnail: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      duration: '1h 05m',
      year: 2023,
      rating: 4.6,
      tags: ['Technology', 'Science', 'Documentary'],
      type: 'movie',
      isPremium: true
    },
    {
      id: 'seasonal-cuisine',
      title: 'Seasonal Cuisine: Farm to Table',
      thumbnail: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      duration: '45m',
      year: 2023,
      rating: 4.5,
      tags: ['Food', 'Lifestyle', 'Documentary'],
      type: 'series',
      isPremium: false
    },
    ...featuredContent.slice(4, 8)
  ],
  popular: [
    ...featuredContent.slice(2, 6),
    {
      id: 'architectural-marvels',
      title: 'Architectural Marvels',
      thumbnail: 'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      duration: '52m',
      year: 2022,
      rating: 4.8,
      tags: ['Architecture', 'Design', 'Documentary'],
      type: 'series',
      isPremium: true
    },
    {
      id: 'musical-journey',
      title: 'Musical Journey: Global Rhythms',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      duration: '1h 10m',
      year: 2022,
      rating: 4.6,
      tags: ['Music', 'Culture', 'Documentary'],
      type: 'movie',
      isPremium: false
    },
  ],
  action: [
    {
      id: 'mountain-biking',
      title: 'Mountain Biking: Extreme Trails',
      thumbnail: 'https://images.pexels.com/photos/71104/utah-mountain-biking-bike-biking-71104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      duration: '42m',
      year: 2023,
      rating: 4.7,
      tags: ['Sports', 'Action', 'Adventure'],
      type: 'series',
      isPremium: true
    },
    {
      id: 'urban-parkour',
      title: 'Urban Parkour: City Movement',
      thumbnail: 'https://images.pexels.com/photos/1268345/pexels-photo-1268345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      duration: '38m',
      year: 2022,
      rating: 4.5,
      tags: ['Sports', 'Action', 'Urban'],
      type: 'series',
      isPremium: false
    },
    ...featuredContent.slice(3, 7)
  ],
  drama: [
    {
      id: 'family-bonds',
      title: 'Family Bonds: Generations',
      thumbnail: 'https://images.pexels.com/photos/1974689/pexels-photo-1974689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      duration: '1h 45m',
      year: 2023,
      rating: 4.8,
      tags: ['Drama', 'Family', 'Relationships'],
      type: 'movie',
      isPremium: true
    },
    {
      id: 'career-choices',
      title: 'Career Choices: Crossroads',
      thumbnail: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      duration: '50m',
      year: 2023,
      rating: 4.6,
      tags: ['Drama', 'Career', 'Life'],
      type: 'series',
      isPremium: false
    },
    {
      id: 'urban-stories',
      title: 'Urban Stories: City Lives',
      thumbnail: 'https://images.pexels.com/photos/3879071/pexels-photo-3879071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      duration: '55m',
      year: 2022,
      rating: 4.5,
      tags: ['Drama', 'Urban', 'Society'],
      type: 'series',
      isPremium: false
    },
    ...featuredContent.slice(0, 4)
  ],
  comedy: [
    {
      id: 'stand-up-nights',
      title: 'Stand-up Nights: Laughter Club',
      thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      duration: '1h 05m',
      year: 2023,
      rating: 4.7,
      tags: ['Comedy', 'Stand-up', 'Entertainment'],
      type: 'series',
      isPremium: true
    },
    {
      id: 'office-humor',
      title: 'Office Humor: Work Life',
      thumbnail: 'https://images.pexels.com/photos/3760778/pexels-photo-3760778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      duration: '30m',
      year: 2023,
      rating: 4.5,
      tags: ['Comedy', 'Office', 'Sitcom'],
      type: 'series',
      isPremium: false
    },
    {
      id: 'family-sitcom',
      title: 'Family Sitcom: Home Laughs',
      thumbnail: 'https://images.pexels.com/photos/3143809/pexels-photo-3143809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      duration: '25m',
      year: 2022,
      rating: 4.6,
      tags: ['Comedy', 'Family', 'Sitcom'],
      type: 'series',
      isPremium: false
    },
    ...featuredContent.slice(5, 8)
  ],
};