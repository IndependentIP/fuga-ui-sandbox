import React, { useState } from 'react'
import { FilterChipSet, FilterChip, SimpleMenu } from '@independentip/fuga-ui';

const menu1Opts = [
  {
    label: 'Option 1',
    value: 'option1'
  },
  {
    label: 'Option 2',
    value: 'option2'
  },
  {
    label: 'Option 3',
    value: 'option3'
  },
  {
    label: 'Option 4',
    value: 'option4'
  },
  {
    label: 'Option 5',
    value: 'option5'
  }
]

export default function FilterChipsCase() {

  const [filters, setFilters] = useState({
    'filter1': '',
    'filter2': '',
    'filter3': '',
    'filter4': '',
  });

  function onFilterSelect(filterName: string, value: any) {
    setFilters({ ...filters, [filterName]: value });
  }

  function resetChip(chipId: string) {
    setFilters({ ...filters, [chipId]: '' });
  }

  return (
    <FilterChipSet label="Filters:" >
      <SimpleMenu items={menu1Opts} onSelect={(value) => onFilterSelect('filter1', value)}>
        <FilterChip label="filter 1" value={filters.filter1} chipId="filter1" onDelete={() => resetChip('filter1')} />
      </SimpleMenu>

      <SimpleMenu items={menu1Opts} onSelect={(value) => onFilterSelect('filter2', value)}>
        <FilterChip label="filter 2" value={filters.filter2} chipId="filter2" onDelete={() => resetChip('filter2')} />
      </SimpleMenu>

      <SimpleMenu items={menu1Opts} onSelect={(value) => onFilterSelect('filter3', value)}>
        <FilterChip label="filter 3" value={filters.filter3} chipId="filter3" onDelete={() => resetChip('filter3')} />
      </SimpleMenu>

      <SimpleMenu items={menu1Opts} onSelect={(value) => onFilterSelect('filter4', value)}>
        <FilterChip label="filter 4" value={filters.filter4} chipId="filter4" onDelete={() => resetChip('filter4')} />
      </SimpleMenu>
    </FilterChipSet>
  )
}
