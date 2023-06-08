<script lang="ts">
	import type { Hist } from '$lib/types';

	import 'chartjs-adapter-date-fns';
	import {
		makeChartOptions,
		makeLabels,
		makeSmaDatasets as makeSmaDatasets,
		makeVolumeDataset
	} from './smasChart';
	import type { Chart } from 'chart.js';
	import { DefaultChart } from './defaultChart';
	import { cols, hsla } from '$lib/helpers';

	export let width: number;
	export let hists: Hist[] = [];

	let chartElement: HTMLCanvasElement;
	let chart: Chart;

	$: labels = makeLabels(hists.map((hist) => hist.date));
	$: smaDatasets = makeSmaDatasets(hists.map((hist) => hist.close));
	$: volumeDataset = makeVolumeDataset(hists.map((hist) => hist.volume));

	$: viewLabels = labels.slice(-width);
	$: viewSmaDatasets = smaDatasets.map((smaDataset) => {
		return {
			...smaDataset,
			data: smaDataset.data.slice(-width)
		};
	});
	$: viewVolumeDataset = {
		...volumeDataset,
		data: volumeDataset.data.slice(-width)
	};

	$: chartOptions = makeChartOptions(width);

	$: {
		try {
			chart.destroy();
		} catch {}

		if (chartElement) {
			chart = new DefaultChart(chartElement, {
				type: 'line',
				data: {
					labels: viewLabels,
					datasets: [...viewSmaDatasets, viewVolumeDataset]
				},
				options: chartOptions
			});
		}
	}
</script>

<canvas bind:this={chartElement} />
