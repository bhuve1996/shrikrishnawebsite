export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  location?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Sarbjit Mann',
    rating: 5,
    text: 'Excellent work. Highly recommend Shri Krishna core cutting service. Very neat work and response is so good and quick. I really appreciate their work. The gentleman is polite and always present at field. AC holes done so neatly in my flat at ATS Golf Meadows Lifestyle.',
    date: 'a year ago',
    location: 'ATS Golf Meadows',
  },
  {
    id: '2',
    author: 'Manish Rana',
    rating: 5,
    text: 'I recently hired Shri Krishna Core Cutting and Rebaring for a construction project, and I am very impressed with their work. The team was professional, punctual, and highly skilled. They used quality equipment and followed safety protocols throughout the job.',
    date: '8 months ago',
    location: 'Kharar',
  },
  {
    id: '3',
    author: 'Deepak Tyagi',
    rating: 5,
    text: 'I recently had core cutting work done at my home. The technician was professional, efficient, and completed the job with great attention to detail. The entire process was quick, clean, and the results were exactly what I needed.',
    date: '8 months ago',
    location: 'Mohali',
  },
  {
    id: '4',
    author: 'Karan Sharma',
    rating: 5,
    text: 'Utterly satisfied with their service. Even small works are also done with utmost professionalism and the workers and owner are very helpful in providing more reliable solutions.',
    date: '3 years ago',
    location: 'Chandigarh',
  },
  {
    id: '5',
    author: 'Bobby Khan',
    rating: 5,
    text: 'They are new in business but damn they are good. Such a calm, understanding and friendly business owner. They are swift in executing the tasks and calmly respond to even silly questions.',
    date: 'a year ago',
    location: 'Zirakpur',
  },
  {
    id: '6',
    author: 'Anil Gandhi',
    rating: 5,
    text: 'Efficient, timely and reasonable. I will highly recommend them for core cutting work.',
    date: '7 months ago',
    location: 'Panchkula',
  },
  {
    id: '7',
    author: 'PRABHMEET KAUR',
    rating: 5,
    text: 'Very fine services, professional attitude and reasonable charges! A great experience!',
    date: '3 years ago',
    location: 'Kharar',
  },
  {
    id: '8',
    author: 'Ck Punj',
    rating: 5,
    text: 'Excellent and so quick service! No hectic of explaining. Very neat and clean work. Great effort!',
    date: 'a year ago',
    location: 'Mohali',
  },
];

export const reviewStats = {
  totalReviews: 70,
  averageRating: 5.0,
  fiveStarPercentage: 98,
  platform: 'Google',
};
