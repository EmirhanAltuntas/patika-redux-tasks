import React, { useEffect, useState, } from 'react'
import { useDispatch } from 'react-redux'
import { changeActiveFilter, filteredNotes } from '../features/noteSlice';
function SearchInput() {



  const [filterText ,setFilterText] = useState('');
  const dispatch = useDispatch()
  const handleSeacrh = (e)=>{
    setFilterText(e.target.value)
  }

  useEffect(() => {
    localStorage.setItem('activeFilter',filterText)
    dispatch(changeActiveFilter(filterText))
   }, [filterText])
   
  return (
    <form >
            <input type='text' className='searchInput' placeholder='Search...' value={filterText} onChange={handleSeacrh}></input>
    </form>
  )
}

export default SearchInput