import Token from "./token"

export type TokensStore = {
	tokens: Array<Token>,
	isLoading: boolean,
	hasMore: boolean,
	fetchTokens: (page: number) => Promise<void>,
}

export type TokensStoreSet =
	(partial:
		TokensStore |
		Partial<TokensStore> |
		((state: TokensStore) => TokensStore |
			Partial<TokensStore>),
		replace?:
			boolean | undefined) => void