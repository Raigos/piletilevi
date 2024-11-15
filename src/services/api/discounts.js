export const fetchDiscounts = async () => {
  const response = await fetch('https://api.intra.piletilevi.ee/v1/discounts')
  if (!response.ok) throw new Error('Failed to fetch discounts')
  return response.json()
}
