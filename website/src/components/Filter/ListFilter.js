import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { DropDown } from '@aragon/ui'

export const FILTER_TYPE_LIST = Symbol('FILTER_TYPE_LIST')
export function ListFilter ({
  name,
  value,
  onChange,
  items = [],
  placeholder
}) {
  const setSelectedItem = useCallback((index) => {
    if (!items[index]) return

    onChange(name, items[index].value)
  }, [name, items])
  const selectedItem = items.findIndex(
    (item) => item.value === value
  )

  return <DropDown
    placeholder={placeholder}
    items={items.map(({ label }) => label)}
    selected={selectedItem}
    onChange={setSelectedItem}
  />
}

ListFilter.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
  })),
  placeholder: PropTypes.string
}
