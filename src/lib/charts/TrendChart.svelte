<script lang="ts">
	import type { Hist } from '$lib/types';

	// import 'chartjs-adapter-date-fns';
	import {
		makeChartOptions,
		makeLabels,
		makeTrendDatasets as makeTrendDatasets
	} from './trendChart';
	import { DefaultChart } from './defaultChart';
	import { cols, hsla } from '$lib/helpers';
	import type { Chart } from 'chart.js';

	export let width: number;
	export let hists: Hist[] = [];

	let chartElement: HTMLCanvasElement;
	let chart: Chart;

	$: labels = makeLabels(
		width,
		hists.map((hist) => hist.date)
	);

	$: trendDatasets = makeTrendDatasets(
		width,
		hists.map((hist) => hist.close)
	);

	$: chartOptions = makeChartOptions(width);

	$: {
		try {
			chart.destroy();
		} catch {}

		if (chartElement) {
			chart = new DefaultChart(chartElement, {
				type: 'line',
				data: {
					labels: labels,
					datasets: [
						...trendDatasets,
						{
							type: 'line',
							yAxisID: 'y',
							data: hists.map((_) => 0),
							label: `${0}`,
							borderColor: hsla(cols.greyLt),
							backgroundColor: hsla(cols.greyLt),
							borderWidth: 1
						}
					]
				},
				options: chartOptions
			});
		}
	}
</script>

<canvas bind:this={chartElement} />
