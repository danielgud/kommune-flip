import { Result } from "../components/TopList";

const key = 'top10'

export function readTop10(): Result[] {
    const top10 = localStorage.getItem(key);
    return top10 ? JSON.parse(top10) : [];
}

export function writeTop10(top10: Result[]) {
    localStorage.setItem(key, JSON.stringify(top10));
}