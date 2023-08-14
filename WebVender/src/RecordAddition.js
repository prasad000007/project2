function RecordAddition(props)
{
        return (<>
                 <table>
                    <tbody>
          

                        <tr>
                            <td>first_name</td>
                            <td>
                                <input type="text" 
                                        name="first_name"
                                        value={props. vendor.first_name}
                                        onChange={props.TextChanged}/>
                            </td>
                        </tr>

                        <tr>
                            <td>last_name</td>
                            <td>
                                <input type="text" 
                                        name="last_name"
                                        value={props. vendor.last_name}
                                        onChange={props.TextChanged}/>
                            </td>
                        </tr>

                        <tr>
                            <td>email</td>
                            <td>
                                <input type="text" 
                                        name="email"
                                        value={props. vendor.email}
                                        onChange={props.TextChanged}/>
                            </td>
                        </tr>

                        <tr>
                            <td>password</td>
                            <td>
                                <input type="text" 
                                        name="password"
                                        value={props. vendor.password}
                                        onChange={props.TextChanged}/>
                            </td>
                        </tr>

                        <tr>
                            <td>phone_number</td>
                            <td>
                                <input type="text" 
                                        name="phone_number"
                                        value={props. vendor.phone_number}
                                        onChange={props.TextChanged}/>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <button className='btn btn-success' onClick={props.Insert}>
                                    Add Record
                                </button>
                            </td>
                            <td style={{padding: 10}}>
                                
                                <button className='btn btn-warning' onClick={props.Update}>
                                    Update Record
                                </button>
                                {"    "}
                                <button className='btn btn-warning' onClick={props.CancelUpdate}>
                                    Cancel Record Update
                                </button>
                            </td>
                        </tr>
                    </tbody>
                 </table>
                </>);
}

 
export default RecordAddition;