import {useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Header from './header';
import Footer from './footer';
import RecordAddition from './RecordAddition';
import './App.css'
import './common.css'
function App() 
{
   
    console.log("fuction app")
    var [vendors,setVendors] = useState([]);
    var [message,setMessage] = useState("");
    var [vendor,setVendor] = 
        useState({ vendor_id: 0, first_name: "", last_name: "", email:"" ,password:"", phone_number:""});

    var [operation, setOpration] = useState("");
    var [searchText, setSearchText] = useState("");

    useEffect(()=>{
        console.log("use-effe")
        Select();
    },[]);
    
    var Select = function()
    {
        
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 && helper.status == 200)
            {   
                var result = JSON.parse(helper.responseText);
                 setVendors(result.data);
                 console.log(vendors)
            }
        }
        console.log("get sent1")
        helper.open("GET", "http://localhost:4000/vendor");
        console.log("get sent2")
        helper.send();
    }

    var ShowMessage = function(msg)
    {
        setMessage(msg);
        setTimeout(() => 
                        {
                            setMessage("");
                        }, 5000);
                    }

    var Delete = function (vendor_id)
    {   console.log("delete vender id" +vendor_id)
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 && helper.status == 200)
            {
                var result = JSON.parse(helper.responseText);
                if(result.affectedRows > 0)
                {
                    setMessage("Record removed successfully!!");
                    Select()
                }
                
            }
        }
        
        var deletebyid = ("DELETE", "http://localhost:4000/" +  vendor_id);
        debugger;
        console.log(deletebyid);
        helper.open("DELETE", "http://localhost:4000/" +  vendor_id);
        helper.send();
    }

    var TextChanged=function (args)
    {
       
        var copyOfVendor = {...vendor};
        copyOfVendor[args.target.name] = args.target.value;
        setVendor(copyOfVendor);
    }

    var Insert = function()
    {
        if(operation == "edit")
        {
            setMessage('Complete the Edit Operation First!')
        }
        else
        {
              // this.state.vendor --this holds data to send to server for Insert!
            var helper = new XMLHttpRequest();
            helper.onreadystatechange = ()=>{
                
                if(helper.readyState == 4 && helper.status == 200)
                {
                    debugger;
                    var result = JSON.parse(helper.responseText);
                    if(result.affectedRows > 0)
                    {
                        setMessage("Record Added successfully!!");
                        Select();
                        setVendor({  first_name: "", last_name: "", email:"" ,password:"", phone_number:""});
                    }
                    
                }
            }

        
        helper.open("POST", "http://localhost:4000/vendor/register");
        debugger;
        helper.setRequestHeader("Content-Type", "application/json");
        delete vendor.vendor_id
        var dataToBePassedInStringFormat = JSON.stringify(vendor );
        helper.send(dataToBePassedInStringFormat);
        window.location.reload(false);
        }
    }

    var Edit= function( vendor_id){
        for(var i=0; i< vendors.length; i++)
        {
            
            if(vendors[i]. vendor_id ==  vendor_id)
            {
                var copyOfVendor = {...vendors[i]};
                setVendor(copyOfVendor);
                setOpration("edit");
                break;
            }
        }
    }

    var Update =function(){
        //Here this.state.vendor will have updated record.
        //use this to send data using Put request to the server

        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            
            if(helper.readyState == 4 && helper.status == 200)
            {
                debugger;
                var result = JSON.parse(helper.responseText);
                if(result.affectedRows > 0)
                {
                    setMessage("Record Updated successfully!!");

                    Select();
                    
                    setVendor({  vendor_id: 0, first_name: "", last_name: "", email:"" ,password:"", phone_number:""})
                }
                
            }
        }

        debugger;
        helper.open("PUT", "http://localhost:4000/vendor/"+ vendor. vendor_id);

        helper.setRequestHeader("Content-Type", "application/json");

        var dataToBePassedInStringFormat = JSON.stringify(vendor );
        helper.send(dataToBePassedInStringFormat);
    }

    var CancelUpdate = function()
    {
        setOpration("");
        setVendor({first_name: "", last_name: "", email:"" ,password:"", phone_number:""});
    }

    var Search=function(args)
    {
        console.log("U searched " +  args.target.value);
        setSearchText(args.target.value);
    }
   
    return (<>

            <Header></Header>
            <div>
            <center>
                <RecordAddition vendor={vendor} 
                                TextChanged={TextChanged}
                                Insert = {Insert}
                                Update = {Update}
                                CancelUpdate = {CancelUpdate}/>
                <h3 className='alert alert-success'>
                    {message}
                </h3>
                <div>
                    Search By Address: {" "}
                    <input type='text' value={searchText}
                            onChange={Search}/>
                </div>
                <br/>
                <div className='table-responsive'>
                
                    <table className='table table-bordered'>
                    <thead>
                        <th>Vendor_id</th>
                        <th>First_name</th>
                        <th>Last_name</th>
                        <th>Email</th>
                        <th>phone_number</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </thead>
                    <tbody>
                        { 
                            vendors.map((vendor)=>{
                                if(searchText=="")
                                {
                                return <tr>
                                <td>{vendor.vendor_id}</td>
                                <td>{vendor.first_name}</td>
                                <td>{vendor.last_name}</td>
                                <td>{vendor.email}</td>
                               {/* <td>{vendor.password}</td> */}
                                <td>{vendor.phone_number}</td>
                                <td>
                                <button className='btn btn-danger' 
                                onClick={()=>{
                                  
                                        Delete(vendor.vendor_id)
                                           console.log("delete id"+vendor.vendor_id)
                                    }}>
                                    Delete
                                </button>
                                
                                </td>

                                <td>
                                <button className='btn btn-info' 
                                onClick={()=>{
                                        Edit(vendor.vendor_id)
                                    }}>
                                    Edit
                                </button>
                                
                                </td>
                            </tr>
                                }
                                else
                                {
                                if(vendor.first_name.toLowerCase().includes(searchText.toLocaleLowerCase()))
                                {
                                    return <tr>
                                    <td>{vendor. vendor_id}</td>
                                <td>{vendor.first_name}</td>
                                <td>{vendor.last_name}</td>
                                <td>{vendor.email}</td>
                                <td>{vendor.password}</td>
                                <td>{vendor.phone_number}</td>
                                    <td>
                                    <button className='btn btn-danger' 
                                    onClick={()=>{
                                            Delete(vendor. vendor_id)
                                        }}>
                                        Delete
                                    </button>
                                    
                                    </td>

                                    <td>
                                    <button className='btn btn-info' 
                                    onClick={()=>{
                                            Edit(vendor. vendor_id)
                                        }}>
                                        Edit
                                    </button>
                                    
                                    </td>
                                </tr>
                                }
                                }
                            })

                        }
                    </tbody>
                    </table>
                </div>
            </center>
            /</div>
            <Footer ></Footer>
        </>);
    }
 
export default App;