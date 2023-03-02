import api from './api.js'

async function loginAuthentication(email, password, setEmailContext, setPasswordContext)
{
  try {
    const response = await api.post('/user/login', {
      email: email,
      password: password
    })

    // setEmailContext(email)
    // setPasswordContext(password)
  } catch (error) {
    console.log(error)
  }
}

export default loginAuthentication