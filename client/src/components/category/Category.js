import React, { Fragment } from 'react'
import CategoryData from './CategoryData'
import { Button,Table} from 'react-bootstrap'
// import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css"
import { Link,useNavigate } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

export default function Category() {
    let history=useNavigate();

    const handleEdit=(id,name,units)=>{
        localStorage.setItem("Id",id);
        localStorage.setItem("Name",name);
        localStorage.setItem("Units",units);
    }

    const handleDelete=(id)=>{
        var index = CategoryData.map(function(e){
            return e.id;
        }).indexOf(id);
        CategoryData.splice(index,1);
        history('/category')
    }
    return (
        <>
        <Navbar />
        <Sidebar/>
        <Fragment>
            <h1 className="itemHeading" style={{position:"absolute", top:"12vh",left:"22vw"}} >Manage Categories</h1>
            <div className="tableContainer"  style={{position:"absolute", top:"20vh",left:"22vw", width:'60%'}}>
                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Units</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            CategoryData && CategoryData.length > 0
                            ?
                            CategoryData.map((item) => {
                                return (
                                    <tr>
                                            <td>{item.Name}</td>
                                            <td>{item.Units}</td>
                                            <td>
                                                <Link to={"/editcategory"} >
                                                <Button onClick={()=>handleEdit(item.id,item.Name,item.Units)}>Edit</Button>
                                                </Link>
                                                &nbsp;
                                                <Button onClick={()=>handleDelete(item.id)}>Delete</Button>
                                                </td>
                                        </tr>
                                    )
                                }) : "NO Data Available"
                            }
                    </tbody>
                </Table>
                <br />
                <Link className='d-grid gap-3' to={"/createcategory"}>
                    <Button size='sm'>Create</Button>
                </Link>
            </div>
        </Fragment>
                            </>
    )
}
