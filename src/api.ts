import { Token } from "@/types";
import { BASE_URL } from "./constants";

export async function fetchTokens(page = 1): Promise<Array<Token>> {
	const response = await fetch(`${BASE_URL}/markets?vs_currency=usd&page=${page}`);
	const data = await response.json();
	return data;
}
