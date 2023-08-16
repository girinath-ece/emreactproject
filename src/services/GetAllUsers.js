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
    let response = await fetch('${url}/${id}')
    let user = await response.json()
    return user
}

// export async function