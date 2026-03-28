export interface Film {
  id: string;
  title: string;
  year: string;
  director: string;
  status: 'Completed' | 'In Development' | 'Post-Production' | 'Short Documentary' | 'Short Fiction' | 'Live Action Short';
  thumbnailUrl: string;
  synopsis?: string;
  credits?: {
    role: string;
    name: string;
  }[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export enum PageRoute {
  LANDING = '/',
  HOME = '/home',
  FILM_INDEX = '/films',
  FILM_EXAMPLE = '/films/:id',
  CONTACT = '/contact',
}