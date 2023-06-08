import type { ChartDataset, ChartOptions } from 'chart.js';
import type { TrendLineOpt } from '$lib/types';

import { calcRollAvgs, cols, hsla, replaceZerosWithPreviousValue } from '$lib/helpers';
// import { enUS } from 'date-fns/locale/index.js';

// import colors from 'tailwindcss/colors'

const trendLineOpts: TrendLineOpt[] = [
	{ win: 2, col: cols.white, width: 0.5 },
	{ win: 10, col: cols.red, width: 1.5 },
	{ win: 40, col: cols.yellow, width: 2 },
	{ win: 120, col: cols.green, width: 2.5 },
	{ win: 240, col: cols.blue, width: 3 }
];

const makeTrendLine = (nums: number[], opt: TrendLineOpt): ChartDataset => {
	return {
		type: 'line',
		yAxisID: 'y',
		data: calcRollAvgs(opt.win, replaceZerosWithPreviousValue(nums)),
		label: `SMA ${opt.win}`,
		borderColor: hsla(opt.col),
		backgroundColor: hsla(opt.col),
		borderWidth: opt.width
	};
};

export const makeSmaDatasets = (prices: number[]): ChartDataset[] => {
	return [
		...trendLineOpts.map((opt) => makeTrendLine(prices, opt)),
		{
			type: 'line',
			yAxisID: 'y',
			label: 'Close',
			data: Array(prices.length).fill(prices.slice(-1)[0]),
			borderColor: hsla(cols.pink),
			borderWidth: 0.5,
			borderDash: [4, 4]
		},
		{
			type: 'line',
			yAxisID: 'y',
			label: 'Close',
			data: prices,
			borderColor: hsla(cols.pink),
			borderWidth: 0.5
		}
	];
};

export const makeLabels = (dates: Date[]) => {
	return dates;
};

export const makeVolumeDataset = (volumes: number[]): ChartDataset => {
	const color = hsla(cols.greyMd);
	return {
		type: 'bar',
		yAxisID: 'y1',
		data: volumes,
		label: `Volume`,
		borderColor: color,
		backgroundColor: color,
		borderWidth: 1
	};
};

export const makeChartOptions = (width: number): ChartOptions => {
	return {
		responsive: true,
		animation: { duration: 100 },
		maintainAspectRatio: false,
		elements: { point: { pointStyle: false } },
		plugins: { title: { display: false } },
		scales: {
			x: {
				// type: 'timeseries',
				// time: { unit: width <= 20 ? 'day' : 'month' },
				// adapters: { date: { locale: enUS } },
				grid: { display: true, color: hsla(cols.greyMd) },
				ticks: {
					display: false,
					maxRotation: 90,
					minRotation: 90
				}
			},
			y: {
				position: 'left',
				grid: { display: true, color: hsla(cols.greyMd) },
				ticks: { display: true },
				afterFit: (scaleInstance) => (scaleInstance.width = 48)
			},
			y1: {
				position: 'right',
				grid: { display: false },
				ticks: { display: false },
				afterFit: (scaleInstance) => (scaleInstance.width = 0)
			}
		}
	};
};
