import React from 'react'
import Header from './Header'
import NoteArea from './NoteArea'
import NoteList from './NoteList'
import SearchInput from './SearchInput'
import './style.css'

function Container() {
  return (
    <div className='row'>
        <div className='col-12'>
            <div className='row mt-4'>
            <div className='col-md-12 text-center'>
                <Header/>
            </div>
            </div>
            <div className='row mt-3'>
                <div className='col-md-12 text-center'>
                    <SearchInput/>
                </div>
            </div>
            <div className='row mt-3 mb-3'>
                <div className='col-md-8 offset-md-2'>
                    <NoteArea/>
                </div>
            </div>
            <div className='row mt-3 mb-3'>
                <div className='col-md-8 offset-md-2'>
                    <NoteList/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Container