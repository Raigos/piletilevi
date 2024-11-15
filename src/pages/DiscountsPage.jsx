import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Table from '../components/table/Table'
import Discounts from '../components/discounts/Discounts'
import { useDiscountSearch } from '../hooks/useDiscountSearch'
import { useDiscounts } from '../hooks/useDiscounts'
import Tabs from '../components/tabs/Tabs'
import { useEventStatus } from '../hooks/useEventStatus'

const DiscountsPage = ({ handleOpenModal }) => {
  const [activeStatus, setActiveStatus] = useState('all')

  const { discounts, loading, error } = useDiscounts()
  const { filteredDiscounts, handleSearch, appliesTo, handleAppliesToChange } =
    useDiscountSearch(discounts || [])
  const { counts, getByStatus } = useEventStatus(filteredDiscounts)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <Discounts
        onSearch={handleSearch}
        appliesTo={appliesTo}
        onAppliesToChange={handleAppliesToChange}
        handleOpenModal={handleOpenModal}
      />
      <Tabs
        filteredDiscounts={filteredDiscounts}
        onStatusChange={setActiveStatus}
      />
      <Table filteredDiscounts={getByStatus(activeStatus)} />
    </div>
  )
}

DiscountsPage.propTypes = {
  handleOpenModal: PropTypes.func.isRequired,
}

export default DiscountsPage
