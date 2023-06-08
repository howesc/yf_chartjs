export const db = {
	lists: [
		{
			id: '1',
			name: 'HL Stocks & Shares ISA',
			status: 'Active',
			createdAt: '2023-01-11T22:18:55.718Z'
		},
		{
			id: '2',
			name: 'HL SIPP',
			status: 'Active',
			createdAt: '2023-01-12T19:34:54.419Z'
		},
		{
			id: '3',
			name: 'Currencies',
			status: 'Active',
			createdAt: '2023-01-20T08:20:00.419Z'
		},
		{
			id: '4',
			name: 'Stock Indices',
			status: 'Active',
			createdAt: '2023-01-20T06:49:57.022Z'
		},
		{
			id: '5',
			name: 'Metals',
			status: 'Active',
			createdAt: '2023-01-22T00:19:58.065Z'
		},
		{
			id: '6',
			name: 'Crypto',
			status: 'Active',
			createdAt: '2023-01-22T07:01:01.779Z'
		},
		{
			id: '7',
			name: 'US Tech Stocks',
			status: 'Active',
			createdAt: '2023-01-25T19:54:11.728Z'
		},
		{
			id: '8',
			name: 'HL Wealth Shortlist',
			status: 'Active',
			createdAt: '2023-01-29T00:49:50.225Z'
		},
		{
			id: '9',
			name: 'HL Watchlist',
			status: 'Active',
			createdAt: '2023-06-06T02:32:01.223Z'
		}
	],
	symbols: [
		{
			id: '0P0000J1C2.L',
			name: 'Barings Global Agriculture Fund',
			listIds: ['1', '2']
		},
		{
			id: '0P0000UUP8.L',
			name: 'Barings International Umbrella ',
			listIds: ['1', '2']
		},
		{
			id: '0P0000JSAS.L',
			name: 'JPM US Select Fund C - Net Accu',
			listIds: ['1']
		},
		{
			id: '0P0000X9FA.L',
			name: 'JPM Natural Resources Fund C - ',
			listIds: ['1', '2']
		},
		{
			id: '0P000102M0.L',
			name: 'Legal & General Global 100 Inde',
			listIds: ['1']
		},
		{
			id: '0P0000ZT02.L',
			name: 'Schroder Global Cities Real Est',
			listIds: ['1']
		},
		{
			id: '0P0000K7VW.L',
			name: 'JPM Emerging Markets Fund B - N',
			listIds: ['2']
		},
		{
			id: '0P000102M3.L',
			name: 'Legal & General International I',
			listIds: ['2']
		},
		{
			id: 'GBPNZD=X',
			name: 'GBP/NZD',
			listIds: ['3']
		},
		{
			id: '^NDX',
			name: 'NASDAQ 100',
			listIds: ['4']
		},
		{
			id: '^FTSE',
			name: 'FTSE 100',
			listIds: ['4']
		},
		{
			id: '^STOXX50E',
			name: 'ESTX 50 PR.EUR',
			listIds: ['4']
		},
		{
			id: '^GDAXI',
			name: 'DAX PERFORMANCE-INDEX',
			listIds: ['4']
		},
		{
			id: '^AXJO',
			name: 'S&P/ASX 200',
			listIds: ['4']
		},
		{
			id: '^HSI',
			name: 'HANG SENG INDEX',
			listIds: ['4']
		},
		{
			id: '^N225',
			name: 'Nikkei 225',
			listIds: ['4']
		},
		{
			id: 'GC=F',
			name: 'Gold Feb 23',
			listIds: ['5'],
			currency: 'GBP',
			createdAt: '2023-01-22T00:19:59.830Z'
		},
		{
			id: 'PL=F',
			name: 'Platinum Apr 23',
			listIds: ['5'],
			currency: 'GBP',
			createdAt: '2023-01-22T00:49:25.711Z'
		},
		{
			id: 'BTC-USD',
			name: 'Bitcoin USD',
			listIds: ['6'],
			currency: 'GBP',
			createdAt: '2023-01-22T07:01:03.183Z'
		},
		{
			id: 'ETH-USD',
			name: 'Ethereum USD',
			listIds: ['6'],
			currency: 'GBP',
			createdAt: '2023-01-22T07:02:35.408Z'
		},
		{
			id: 'ADA-USD',
			name: 'Cardano USD',
			listIds: ['6'],
			currency: 'GBP',
			createdAt: '2023-01-22T07:02:48.946Z'
		},
		{
			id: 'MSFT',
			name: 'Microsoft Corporation',
			listIds: ['7'],
			currency: 'GBP',
			createdAt: '2023-01-25T19:54:13.217Z'
		},
		{
			id: 'TSLA',
			name: 'Tesla, Inc.',
			listIds: ['7'],
			currency: 'GBP',
			createdAt: '2023-01-25T19:54:27.160Z'
		},
		{
			id: 'NFLX',
			name: 'Netflix, Inc.',
			listIds: ['7'],
			currency: 'GBP',
			createdAt: '2023-01-25T19:54:48.695Z'
		},
		{
			id: 'AMZN',
			name: 'Amazon.com, Inc.',
			listIds: ['7'],
			currency: 'GBP',
			createdAt: '2023-01-25T19:55:01.500Z'
		},
		{
			id: '0P00017EQ7.L',
			name: 'Jupiter Asian Income Fund I GBP Inc',
			listIds: ['8'],
			currency: 'GBP',
			createdAt: '2023-01-29T00:49:51.618Z'
		},
		{
			id: '0P0000NRQP.L',
			name: 'Royal London Corporate Bond Fund A Inc',
			listIds: ['8'],
			currency: 'GBP',
			createdAt: '2023-01-29T00:52:13.304Z'
		},
		{
			id: '0P0001IAS2.L',
			name: 'Artemis Corporate Bond Fund F Acc GBP',
			listIds: ['8'],
			currency: 'GBP',
			createdAt: '2023-01-29T00:52:53.299Z'
		},
		{
			id: '0P000102LX.L',
			name: 'Legal &amp; General European Index Trust C Class Distribution',
			listIds: ['8'],
			currency: 'GBP',
			createdAt: '2023-01-29T01:00:37.653Z'
		},
		{
			id: '0P0000W36I.L',
			name: 'Artemis Global Select Fund I Acc',
			listIds: ['8'],
			currency: 'GBP',
			createdAt: '2023-01-29T01:01:42.111Z'
		},
		{
			id: '0P0000K9JZ.L',
			name: 'Man GLG Japan CoreAlpha Fund Professional Income Shares (Class D)',
			listIds: ['8'],
			currency: 'GBP',
			createdAt: '2023-01-29T01:05:43.864Z'
		},
		{
			id: '0P00000VDP.L',
			name: 'Schroder Managed Balanced Fund I Accumulation GBP',
			listIds: ['8'],
			currency: 'GBP',
			createdAt: '2023-01-29T01:06:38.093Z'
		},
		{
			id: '0P00000VDP.L',
			name: 'Schroder Managed Balanced Fund I Accumulation GBP',
			listIds: ['2'],
			currency: 'GBP',
			createdAt: '2023-02-14T18:50:51.448Z'
		},
		{
			id: '0P0001FVLM.L',
			name: 'Legal &amp; General Global Technology Index Trust C Class Accumulation',
			listIds: ['8'],
			currency: 'GBP',
			createdAt: '2023-06-06T02:30:59.062Z'
		},
		{
			id: '0P0001FVLM.L',
			name: 'Legal &amp; General Global Technology Index Trust C Class Accumulation',
			listIds: ['9'],
			currency: 'GBP',
			createdAt: '2023-06-06T02:32:02.793Z'
		},
		{
			id: 'TSLA',
			name: 'Tesla, Inc.',
			listIds: ['7'],
			currency: 'GBP',
			createdAt: '2023-06-07T21:27:25.535Z'
		}
	]
};
