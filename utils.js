export function generateOptions(options) {
	return Object.entries(options)
		.map(([code, name]) => `<option value="${code}">${code} - ${name}</option>`)
		.join('');
}

export function formatCurrency(amount, currency) {
	return Intl.NumberFormat('en-US', {
		style: 'currency',
		currency,
	}).format(amount);
}
