import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filteredNotes, getNotes, removeNote } from '../features/noteSlice'
import Loading from './Loading'

function NoteList() {
    const filtered = useSelector(filteredNotes);

    const isLoading = useSelector((state)=>state.noteReducer.isLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNotes())
    }, [dispatch])
    console.log(filtered);

    const handleRemove = async(id)=>{
        await dispatch(removeNote(id))
    }
  return (
    <>{
        isLoading===true ? <Loading/>
        : <div className='row '>
        {
            filtered && filtered.map((note)=>(
                <div  className='col-lg-4 col-md-6 px-2 mt-1 noteDiv' key={note.id}>
                    <div className='noteCard p-2 ' style={{backgroundColor:`${note.color}`}}>
                        {note.title}
                        <a type='button' className="info" onClick={()=>handleRemove(note.id)}>remove</a>
                    </div>
                </div>

            ))
        }
    </div>
    }
    </>
  )
}

export default NoteList