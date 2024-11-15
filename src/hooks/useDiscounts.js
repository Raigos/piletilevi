import { useEffect, useState } from 'react'
import { fetchDiscounts } from '../services/api/discounts'

export const useDiscounts = () => {
  const [discounts, setDiscounts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getDiscounts = async () => {
      try {
        const data = await fetchDiscounts()
        setDiscounts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    getDiscounts()
  }, [])

  return { discounts, loading, error }
}
