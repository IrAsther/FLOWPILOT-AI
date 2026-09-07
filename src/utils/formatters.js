export function formatCurrency(amount, currency = 'USD') {
  if (typeof amount !== 'number') return amount;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatTimeAgo(dateString) {
  return dateString;
}

export function truncateString(str, maxLength = 60) {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}
