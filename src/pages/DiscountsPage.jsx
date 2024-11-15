import React from 'react'
import PropTypes from 'prop-types'

import Table from '../components/table/Table'
import Discounts from '../components/discounts/Discounts'
import { useDiscountSearch } from '../hooks/useDiscountSearch'
import { useDiscounts } from '../hooks/useDiscounts'
import Tabs from '../components/tabs/Tabs'

const DiscountsPage = ({ handleOpenModal }) => {
  const { discounts, loading, error } = useDiscounts()
  const { filteredDiscounts, handleSearch, appliesTo, handleAppliesToChange } =
    useDiscountSearch(discounts || [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <Discounts
        onSearch={handleSearch}
        appliesTo={appliesTo}
        onAppliesToChange={handleAppliesToChange}
        handleOpenModal={handleOpenModal}
      />
      <Tabs />
      <Table filteredDiscounts={filteredDiscounts} />
    </div>
  )
}

DiscountsPage.propTypes = {
  handleOpenModal: PropTypes.func.isRequired,
}

export default DiscountsPage
