import React from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { inputfeeld,addbutton,removebutton,editbutton,saveedits } from '../redux/todoSlice'
import './Home.css';
function Home() {
    const dispatch = useDispatch()
    const inputbar = (e)=>{
        dispatch(inputfeeld(e.target.value))
    }
    const inputvalue = useSelector((state)=>state.todo.inputvalue)
    const item = useSelector((state)=>state.todo.addvalue)
    const editedid = useSelector((state)=>state.todo.editedid)
  return (
    <div className='maindiv'>
        
     <div className='seconddiv'>
     <h1>Todo App</h1>
       <input value={inputvalue} onChange={inputbar} type="text" />
        {
            !editedid ? (<button className='buteninput' onClick={()=>dispatch(addbutton())}>Add</button>)
            :
            (<button style={{backgroundColor:"green",color:"#fff"}} className='buteninput' onClick={()=>dispatch(saveedits())}>save</button>)
        }
     
            <div className='todolist'>
                {
                    item.map(item=>(
                        
                            <li className="itemlist">
                            {item.text}
                            <div className="buttons">
                            <button onClick={()=>dispatch(editbutton(item.id))}>Edite</button>
                            <button onClick={()=>dispatch(removebutton(item.id))}>Remove</button>
                            </div>
                        </li>
                       
                    ))
                }
                
            </div>
        </div>
     </div>
  )
}

export default Home
