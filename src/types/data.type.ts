export interface DataSecondCarousel {
  title?: string;
  description?: string;
  url: string;
  alt: string;
}

export interface CarouselSlide {
  imageUrl: string;
  title: string;
}

export type Action = 'accept' | 'reject';

export interface CommentsResponse {
  success: boolean;
  data: CommentUser[];
  count: number;
}

export interface CommentUser {
  name: string;
  opinion: string;
  rating: number;
  sug: string;
}

export type DataType = {
  main_carousel: string[];
  second_carousel: string[];
  materials: {
    quartz: string | null;
    granite: string | null;
    marble: string | null;
    quartzite: string | null;
  };
  galleries: Galleries;
  comparison: Comparison;
  colors: Colors;
};
export interface Galleries {
  bathroom: string[];
  kitchen: string[];
  fireplace: string[];
}
export interface Comparison {
  before_after: {
    before: string | null;
    after: string | null;
  };
}
export interface Colors {
  primary: string | null;
  secondary: string | null;
}
