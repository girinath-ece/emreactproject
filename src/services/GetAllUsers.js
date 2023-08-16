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
    console.log(response)
    let user = await response.json()
    console.log(user)
    return user
}

export async function addUser(user) {
    console.log(JSON.stringify(user))
    console.log('we are here 1')
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    console.log(response)
    console.log('we are here 2')
    let newUser = await response.json();
    console.log('we are here')
    console.log(newUser);

    return newUser;
  }