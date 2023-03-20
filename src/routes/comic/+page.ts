export interface XCom {
    month: string;
    num: string;
    link: string;
    year: string;
    news: string;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    day: string;
}

  const EMAIL = "i.mirzazhanov@innopolis.university";
  const ID_URL = "https://fwd.innopolis.app/api/hw2";
  const COMIC_URL = "https://getxkcd.vercel.app/api/comic";

  const obtainID: () => Promise<number> = async () => {
    let res = await fetch(ID_URL + `?email=${EMAIL}`);
    let resB: number = await res.json();
    return resB;
  };

  const obtainComic: () => Promise<XCom> = async () => {
    let id = await obtainID();
    let res = await fetch(COMIC_URL + `?num=${id}`);
    let resB: XCom = await res.json();
    return resB;
  };