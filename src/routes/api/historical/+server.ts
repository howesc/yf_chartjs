import type { RequestHandler } from './$types';

import { json, error } from '@sveltejs/kit';
import yahooFinance from 'yahoo-finance2';

export const GET: RequestHandler = async ({ url }) => {
	try {
		const symbolId = url.searchParams.get('symbolId');
		if (!symbolId) throw error(400, 'searchParam symbolId missing.');

		const period1 = url.searchParams.get('period1');
		if (!period1) throw error(400, 'searchParam period1 missing.');

		const [quoteResult, historicalResults] = await Promise.all([
			yahooFinance.quote(symbolId),
			yahooFinance.historical(symbolId, {
				interval: '1d',
				period1
			})
		]);

		const data = {
			symbolId,
			quote: {
				symbol: {
					id: quoteResult.symbol,
					name:
						quoteResult.displayName ||
						quoteResult.longName ||
						quoteResult.shortName ||
						'unknown name',
					currency: quoteResult.currency || 'unknown currency'
				},
				regularMarketTime: quoteResult.regularMarketTime || new Date(),
				regularMarketPrice: quoteResult.regularMarketPrice || 0,
				regularMarketChangePercent: quoteResult.regularMarketChangePercent || 0,
				fiftyDayAverage: quoteResult.fiftyDayAverage || 0,
				twoHundredDayAverage: quoteResult.twoHundredDayAverage || 0
			},
			hists: historicalResults.map((hist) => ({
				date: hist.date,
				close: hist.adjClose || hist.close,
				volume: hist.volume
			}))
		};

		return json(data);
	} catch (err) {
		throw error(404, String(err));
	}
};
