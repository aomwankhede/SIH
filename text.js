const t = await axios.post('http://localhost:3400/signup',{
    body:{
        "email":"aom@gmail.com",
        "password":"12345"
      }
})