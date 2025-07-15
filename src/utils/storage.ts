import { Result } from "../components/TopList";

export const readTop10 = (cardCount: number) => {
    const raw = localStorage.getItem(`top10_${cardCount}`);
    return raw ? JSON.parse(raw) : [];
  };
  
  export const writeTop10 = (cardCount: number, data: Result[]) => {
    localStorage.setItem(`top10_${cardCount}`, JSON.stringify(data));
  };