'use strict';

//constants
const chartOptions = {
	scales: {
		yAxes: [{
			ticks: {
				beginAtZero:true
			}
		}]
	}
}

$(document).ready(getBitcoinIndex)

function getBitcoinIndex() {
	const options = {
			url: 'http://api.coindesk.com/v1/bpi/historical/close.json',
			method: 'get',
			success: handleSuccess,
			error: handleError,
	}
	$.ajax(options)
}

function handleSuccess(response) {
	response = JSON.parse(response)
	drawChart(response.bpi)
}

function handleError(error) {
	console.log(error)
}

function drawChart(data = {} ) {
	const ctx = $('#myChart');
	const myChart = new Chart(ctx, {
			type: 'line',
			data: prepareData(data),
			options: chartOptions
	})
}

function prepareData(data) {
	const labels = Object.keys(data)
	const datasetData = Object.values(data)
	return {
		labels,
		datasets: [{
			label: 'Bitcoin Price Index',
			data: datasetData,
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgba(255, 99, 132, 1)',
			borderWidth: 1
		}]
	}
}
