const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id,first_name, last_name, email, password, phone_number} = curUser;
                   // const {street, city, zipcode} = curUser.address;

                    return (
                        <tr>
                            <td>{id}</td>
                            <td>{first_name}</td>
                            <td>{last_name}</td>
                            <td>{email}</td>
                            <td>{password}</td>
                            <td>{phone_number}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;