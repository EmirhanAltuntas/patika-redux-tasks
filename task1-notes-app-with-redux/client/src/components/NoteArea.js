import React, { useState } from 'react'
import {CirclePicker} from 'react-color'
import { useDispatch, useSelector } from 'react-redux'
import { addNote } from '../features/noteSlice'
function NoteArea() {

    const colors = ["#e91e63", "#9c27b0", "#ffeb3b","#03a9f4", "#cddc39"]
    const isAddLoading = useSelector((state)=>state.noteReducer.isAddLoading)
    const [color,setColor] = useState('#e91e63')
    const [note,setNote] = useState('')
    const dispatch = useDispatch()


    const handleTextArea = (e)=>{
        setNote(e.target.value)
    }
    const addNewNote= async()=>{
        if(!note){
            alert('please enter any word')
        }else{
            await dispatch(addNote({color:color,title:note}))
            setNote('');
        }
    }
  return (
    <div className='container noteArea' style={{border:`2px solid ${color}`}}>
        <div className='row'>
                <div className='col-md-12'>
                        <textarea className='textarea mt-2' placeholder='Enter your note here...' value={note} onChange={handleTextArea}></textarea>
                </div>
        </div>
        <div className='row'>
            <div className='col-md-9 p-2'>
                   <CirclePicker onChange={(e)=>setColor(e.hex)} colors={colors} select={true} ></CirclePicker>
            </div>
            <div className='col-md-3 py-1'>
                    <button className='btn btn-success  w-100' onClick={()=>addNewNote()} disabled={isAddLoading&&isAddLoading}>ADD</button>
            </div>
        </div>
    </div>
  )
}

export default NoteArea