import { useState, useMemo } from 'react'
import { APPLIES_TO_OPTIONS } from '../constants/discountTypes'

export const useDiscountSearch = discounts => {
  const [searchTerm, setSearchTerm] = useState('')
  const [appliesTo, setAppliesTo] = useState('all')

  const filteredDiscounts = useMemo(() => {
    return discounts.filter(discount => {
      const searchLower = searchTerm.toLowerCase().trim()
      const selectedOption = APPLIES_TO_OPTIONS.find(
        opt => opt.value === appliesTo,
      )

      const matchesSearch = discount.name?.toLowerCase().includes(searchLower)
      const matchesCategory =
        appliesTo === 'all' || discount.category === selectedOption?.category

      return matchesSearch && matchesCategory
    })
  }, [discounts, searchTerm, appliesTo])

  const handleSearch = term => {
    setSearchTerm(term)
  }

  const handleAppliesToChange = event => {
    setAppliesTo(event.target.value)
  }
  return {
    searchTerm,
    appliesTo,
    filteredDiscounts,
    handleSearch,
    handleAppliesToChange,
  }
}
