export interface PhotoSource {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}

export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: PhotoSource;
  liked: false;
  alt: string;
}

export interface PhotoResponse {
  next_page: string;
  page: number;
  per_page: number;
  photos: Photo[];
  total_results: number;
}
