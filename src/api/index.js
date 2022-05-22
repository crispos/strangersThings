const APIURL = 'https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-PT'

export async function fetchAllPost () {
   try {
      const response = await fetch(`${APIURL}/posts`);
      const result = await response.json();
      if (result.error) throw result.error;

      console.log('Successfully fetched all posts. Response: ', result)
      return result.data.posts
   } catch(err) {
     console.error('Failed to fetch posts. Error: ', err);
   }
 }

export async function registerUser (username, password) {
   try {
      const response = await fetch(`${APIURL}/users/register`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            user: {
               username: username,
               password: password
            }
         })
      })
      const result = await response.json()

      if (result.error) throw result.error

      console.log('User registration succeed with data: ', result.data)
      return result.data

   } catch(error) {
      console.error('Failed to register user. Error :', error)
   }
}

export async function loginUser (username, password) {
   try {
      const response = await fetch(`${APIURL}/users/login`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            user: {
               username: username,
               password: password
            }
         })
      })
      const result = await response.json()

      if (result.error) throw result.error

      console.log('User login succeed with data: ', result.data)
      return result.data

   } catch(error) {
      console.error('Failed to login user. Error :', error)
   }
}

export async function createPost (title, description, price, location, willDeliver, token) {
   try {
      const response = await fetch(`${APIURL}/posts`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
         },
         body: JSON.stringify({
            post: {
               title: title,
               description: description,
               price: price,
               willDeliver: willDeliver,
               location: location 
            }        
         })
      })
      const result = await response.json()

      if (result.success === false) throw result.error

      console.log('Successfully created post with data: ', result.data)
      return result.data

   } catch(error) {
      console.error('Failed to create post. Error :', error)
   }
   
}

export async function deletePost (postID, token) {
   try {
      const response = await fetch(`${APIURL}/posts/${postID}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
         }
      })

      const result = await response.json()

      if (result.error) throw result.error

      console.log('Successfully deleted post. Response: ', result)
      return result.success

   } catch(error) {
      console.error('Failed to delete post. Error :', error)
   }
   
}