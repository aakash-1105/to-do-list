import React, { useState } from 'react'
import {IState as Props} from "../App"

interface IProps {
    people: Props["people"],
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
 }

const AddToList: React.FC<IProps> = ({people , setPeople}) => {

    const [input , setInput] = useState({
        name : "",
        age : "",
        url : "",
        note : ""
    })

    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleClick = ():void => {
        if(
            !input.name ||
            !input.age ||
            !input.note 
        ){
            return
        }
        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note: input.note
            }
        ])

        setInput({
        name : "",
        age : "",
        url : "",
        note : ""
        })
    } 
  return (
    <div className='AddToList'>
        <input type="text"
            name='name'
            placeholder='name' 
            className='AddToList-input'
            value={input.name}
            onChange = {handleChange}
        />
        <input type="text"
            name='age'
            placeholder='Age' 
            className='AddToList-input'
            value={input.age}
            onChange = {handleChange}
        />
        <input type="text"
            name='url'
            placeholder='Image Url' 
            className='AddToList-input'
            value={input.url}
            onChange = {handleChange}
        />
        <textarea
            placeholder='Note'
            name='note' 
            className='AddToList-input'
            onChange = {handleChange}
        />
        <button className='AddToList-btn'
            onClick={handleClick}
        >Add</button>
    </div>
  )
}

export default AddToList