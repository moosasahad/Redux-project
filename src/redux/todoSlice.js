import { createSlice} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name:'todo',
    initialState:{
        inputvalue:'',
        addvalue:[],
        editedid:null,
    },
    reducers:{
        inputfeeld:(state,action)=>{
            state.inputvalue=action.payload
        },
        addbutton:(state)=>{
            if(state.inputvalue){
                state.addvalue.push({id:Date.now(),text:state.inputvalue})
            state.inputvalue=''
            }

        },
        removebutton:(state,action)=>{
            state.addvalue=state.addvalue.filter(item=>item.id!==action.payload)
            state.inputvalue=''
            state.editedid=null
        },
        editbutton:(state,action)=>{
            const data =state.addvalue.find(item=>item.id==action.payload)
           if(data){
            state.inputvalue=data.text
            state.editedid=data.id
           }            
        },
        saveedits:(state,action)=>{
            const saved =state.addvalue.find(item=>item.id==state.editedid)
            if(saved && state.inputvalue){
                saved.text = state.inputvalue
                state.editedid=null
                state.inputvalue=""
            }
        }
    }
})
export const { inputfeeld,addbutton,removebutton,editbutton,saveedits } = todoSlice.actions
export default todoSlice.reducer