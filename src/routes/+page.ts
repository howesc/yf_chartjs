// import { addYears } from 'date-fns';
import type { PageLoad } from './$types';

const symbolIds = [
	'0P0000J1C2.L',
	'0P0000UUP8.L',
	'0P0000JSAS.L'
	// '0P0000X9FA.L',
	// '0P000102M0.L',
	// '0P0000ZT02.L',
	// '0P0000K7VW.L',
	// '0P000102M3.L',
	// '0P00000VDP.L',
	// '0P0001FVLM.L',
	// '^NDX',
	// '^FTSE',
	// '^STOXX50E',
	// '^GDAXI',
	// '^AXJO',
	// '^HSI',
	// '^N225',
	// 'BTC-USD',
	// 'ETH-USD',
	// 'ADA-USD'
];
// const symbolId = '0P0000J1C2.L';

export const load: PageLoad = async ({ params, fetch }) => {
	const now = new Date();
	const period1 = new Date(now.setFullYear(now.getFullYear() - 2));
	// console.log({ period1 });

	let responses = await Promise.all(
		symbolIds.map((symbolId) => fetch(`/api/historical?symbolId=${symbolId}&period1=${period1}`))
	);
	let datas = await Promise.all(responses.map((response) => response.json()));

	return { data: datas };
};
