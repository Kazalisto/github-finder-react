// import {useEffect} from 'react'

// function UserResults() {
//     useEffect(()=> {
//         fetchUsers()
//     }, [])

//     const fetchUsers = async () =>{
//         const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
//             headers: {
//                 Authorizations : `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
//             },
//         })
//         const data = response.json()
//         console.log(data)
//     }
//   return (
//     <div>UserResults</div>
//   )
// }

// export default UserResults
