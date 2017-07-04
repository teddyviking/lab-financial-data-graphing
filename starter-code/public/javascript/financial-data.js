'use strict';

const options = {
		url: 'http://api.coindesk.com/v1/bpi/historical/close.json',
		method: 'get',
		success: handleSuccess,
		error: handleError,
}
$.ajax(options)

function handleSuccess(response) {
	console.log(response)
}

function handleError(error) {
	console.log(error)
}
