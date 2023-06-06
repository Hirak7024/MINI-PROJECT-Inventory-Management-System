import React, { Fragment } from 'react'
import ItemsData from './ItemsData'
import { Button} from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css"
import { Link,useNavigate } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import "./items.css";
import '../../components/sidebar/sidebar.css';
import '../navbar/navbar.css';

export default function Items() {
    let history=useNavigate();

    const handleEdit=(id,name,units)=>{
        localStorage.setItem("Id",id);
        localStorage.setItem("Name",name);
        localStorage.setItem("Units",units);
    }

    const handleDelete=(id)=>{
        var index = ItemsData.map(function(e){
            return e.id;
        }).indexOf(id);
        ItemsData.splice(index,1);
        history('/items')
    }
    return (
        <>
        <Navbar />
        <Sidebar />
        <Fragment className='itemsMainContainer'>
            <h1 className="itemHeading" style={{position:"absolute", top:"12vh",left:"22vw"}} >Manage Items</h1>
            <div className="tableContainer" style={{position:"absolute", top:"20vh",left:"22vw", width:'60%'}}>
                <Table striped bordered hover size='sm' >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Units</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ItemsData && ItemsData.length > 0
                            ?
                            ItemsData.map((item) => {
                                return (
                                    <tr>
                                            <td>{item.Name}</td>
                                            <td>{item.Units}</td>
                                            <td>
                                                <Link to={"/edititem"} >
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
                <Link className='d-grid gap-3' to={"/createitem"}>
                    <Button size='sm'>Create</Button>
                </Link>
            </div>
        </Fragment>
     </>
    )
}
