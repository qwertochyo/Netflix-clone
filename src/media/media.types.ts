export interface IMediaItem {
  id: number,
  slug: string,

  title: string,
  poster: string,

  backdrop?: string
  rating: number,

  year: number,

  seasons?: ISeason[],

  genres: string[] 
}

export interface ISeason {
  id: number,
  slug: string,
  title: string,
  episodes: IVideo[],
}

export interface IVideo {
  id: number,
  slug: string,
  title: string,
  poster: string,

  duration: number,
  videoUrl: string
}