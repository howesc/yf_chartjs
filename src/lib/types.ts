export interface SearchResult {
	id: string;
	name: string;
}

export interface Symbol extends SearchResult {
	currency: string;
}

export interface SavedSymbol extends Symbol {
	listIds: string[];
	createdAt: Date;
}

export interface Hist {
	date: Date;
	close: number;
	volume: number;
}

export interface TrendLineOpt {
	win: number;
	col: number[];
	width: number;
}
