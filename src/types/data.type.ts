export interface GalleryItem {
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
}

export type Action = 'accept' | 'reject';


export interface CommentsResponse {
  success: boolean;
  data:    CommentUser[];
  count:   number;
}

export interface CommentUser {
  name:    string;
  opinion: string;
  rating:  number;
  sug:     string;
}
