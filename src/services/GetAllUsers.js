let url = 'http://localhost:8080/creditcard'

// export function GetAllUsers(){
//     fetch(url)
//     .then(data=>data.json())
//     .then(users=>{
//         JSON.stringify(users)
//         return users;
//     })
    
// }

export async function GetAllUsers(){
    let response = await fetch(url);
    let users = await response.json();
    return users
}

export async function GetUserById(id){
    console.log(url+'/'+id.toString())
    let response = await fetch(url+'/'+id.toString())
    let user = await response.json()
    console.log(user)
    return user
}

// export async function