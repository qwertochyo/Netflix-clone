export interface IMenuItem {
  name: string;
  url: string;
}

export const menuData: IMenuItem[] = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "Movies",
    url: "/movies"
  },
  {
    name: "TV Shows",
    url: "/tv-shows"
  },
  {
    name: "Watchlist",
    url: "/watchlist",
  }
]