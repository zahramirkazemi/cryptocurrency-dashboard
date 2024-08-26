import { fetchTokens } from '@/api';
import { TokensStore } from '@/types';
import { create } from 'zustand';

const useTokensStore = create<TokensStore>()((set) => ({
	tokens: [],
	isLoading: false,
	hasMore: true,
	fetchTokens: async (page: number) => {
		set(state => ({ ...state, isLoading: true, tokens: [] }));
		try {
			const tokens = await fetchTokens(page);
			set(state => ({ ...state, tokens }));
		} catch {
			set(state => ({ ...state, hasMore: false, }));
		} finally {
			set(state => ({ ...state, isLoading: false, }));
		}
	}
}))

export default useTokensStore;