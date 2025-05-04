export interface GalleryResponse {
  success: boolean;
  data: GalleryData[];
  metadata: Metadata;
}

export interface GalleryData {
  category: string;
  images: RoomImage[];
}

export interface RoomImage {
  image: string;
}

export interface Metadata {
  last_updated: Date;
}
