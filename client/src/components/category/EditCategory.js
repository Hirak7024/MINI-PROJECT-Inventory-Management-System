import React,{useState, useEffect} from 'react'
import { Button,Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import CategoryData from './CategoryData'
import { v4 as uuid } from 'uuid'
import { Link, useNavigate } from 'react-router-dom';

export default function EditCategory() {
    const [name,setName] = useState('');
    const [units,setUnits] = useState('');
    const [id,setId] = useState('');

    let history = useNavigate();

    var index = CategoryData.map(function(e){
        return e.id;
    }).indexOf(id);

    const handleSubmit=(e)=>{
        e.preventDefault();
        let a = CategoryData[index];
        a.Name=name;
        a.Units=units;

        history('/category')
    }

    useEffect(()=>{
        setName(localStorage.getItem('Name'));
        setUnits(localStorage.getItem('Units'));
        setId(localStorage.getItem('Id'));
    },[])

  return (
    <div>
      <Form className='d-grid gap-2' style={{margin:"15rem"}}>
            <Form.Group className='mb-3' controlId='formName'>
                <Form.Control type='text' placeholder='Enter Name' value={name} required onChange={(e)=>setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formUnits'>
                <Form.Control type='text' placeholder='Enter Units' value={units} required onChange={(e)=>setUnits(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e)=>handleSubmit(e)} type='submit' >Update</Button>
        </Form>
    </div>
  )
}
