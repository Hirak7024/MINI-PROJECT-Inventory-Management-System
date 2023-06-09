import React,{useState} from 'react'
import { Button,Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import ItemsData from './ItemsData'
import {v4 as uuid} from "uuid";
import { Link, useNavigate } from 'react-router-dom';

export default function AddItem() {
    const [name,setName] = useState('');
    const [units,setUnits] = useState('');

    let history = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0,8);
        let a = name , b= units;
        ItemsData.push({id:uniqueId, Name:a,Units:b});
        history('/items')
    }

  return (
    <div>
        <Form className='d-grid gap-2' style={{margin:"15rem"}}>
            <Form.Group className='mb-3' controlId='formName'>
                <Form.Control type='text' placeholder='Enter Name' required onChange={(e)=>setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formUnit'>
                <Form.Control type='text' placeholder='Enter Units' required onChange={(e)=>setUnits(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e)=>handleSubmit(e)} type='submit' >Submit</Button>
        </Form>
    </div>
  )
}
