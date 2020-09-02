//! url API
// const URL_BASE = 'https://6e3cccb45d82.ngrok.io/'

const URL_BASE = 'https://api-alux.mybluemix.net/'
const URL_ClOUD = 'https://api.cloudinary.com/v1_1/dwh7vxswk/upload'
// const sessionToken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNGFmMTQ1Mjk1MGE0MTliOGZhMDczMCIsImlhdCI6MTU5ODc0NzAxNCwiZXhwIjoxNTk4ODMzNDE0fQ.awppj7bOBgWA-oB6nffbThcYbdz1ymavu2SjHnkPnEQ'

// Upload en Cloudinary
const uploadFileService = async file => {
  const formData = new FormData()
  formData.append('upload_preset', 'alux-app')
  formData.append('file', file)
  try {
    const response = await fetch(`${URL_ClOUD}`, {
      method: 'POST',
      body: formData,
    })
    const data = await response.json()
    console.log(data.secure_url)
    return data.secure_url
  } catch (error) {
    throw error
  }
}

//! Users
const signUpService = async req => {
  const response = await fetch(`${URL_BASE}sign-up`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
  const data = await response.json()
  console.log(data)
  return data
}

const logInService = async data => {
  const response = await fetch(`${URL_BASE}log-in`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const token = await response.json()

  return token
}

const updateUsersService = async (data, sessionToken, id) => {
  console.log('data', data, sessionToken, id)
  const response = await fetch(`${URL_BASE}users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: sessionToken,
    },
  })
  const res = await response.json()
  return res
}

//* resetPassword
const sendNewPassword = async data => {
  const response = await fetch(`${URL_BASE}reset-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const resp = await response.json()
  return resp
}
const createNewPassword = async (data, token) => {
  console.log(token)
  const response = await fetch(`${URL_BASE}reset-password/${token}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const resp = await response.json()
  return resp
}

//! Posts
const addPostService = async (data, sessionToken) => {
  const response = await fetch(`${URL_BASE}entries`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: sessionToken,
    },
  })
  const res = await response.json()
  return res
}

const updatePostService = async (data, sessionToken, key) => {
  const response = await fetch(`${URL_BASE}entries/${key}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: sessionToken,
    },
  })
  const res = await response.json()
  return res
}

const getPostsService = async () => {
  const response = await fetch(`${URL_BASE}posts.json`)
  const data = await response.json()
  return data
}

const getPostService = async key => {
  const response = await fetch(`${URL_BASE}posts/${key}.json`)
  const data = await response.json()
  return data
}

//! Pets
const addPetService = async (data, sessionToken) => {
  const response = await fetch(`${URL_BASE}pets`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: sessionToken,
    },
  })
  const res = await response.json()
  return res
}

const updatePetService = async (data, sessionToken, id) => {
  // console.log('servicesPEt', data)
  const response = await fetch(`${URL_BASE}pets/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: sessionToken,
    },
  })
  const res = await response.json()
  return res
}

const getPetsService = async sessionToken => {
  const response = await fetch(`${URL_BASE}pets`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: sessionToken,
    },
  })
  const data = await response.json()
  console.log(data)
  return data
}
const getPetIdService = async (sessionToken, id) => {
  const response = await fetch(`${URL_BASE}pets/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: sessionToken,
    },
  })
  const data = await response.json()
  //console.log(data)
  return data
}

//! codeQR
const getPet = async key => {
  if (typeof window !== 'undefined') {
    const token = localStorage.authToken
    const response = await fetch(`${URL_BASE}pets/${key}`, {
      headers: {
        authorization: token,
      },
    })
    const data = await response.json()
    return data
  }
}

const readQR = async (token, coords) => {
  const response = await fetch(`${URL_BASE}pets/readQR?token=${token}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ coords }),
  })
  const data = await response.json()
  return data
}

export {
  uploadFileService,
  signUpService,
  logInService,
  addPostService,
  updatePostService,
  getPostsService,
  getPostService,
  addPetService,
  updatePetService,
  getPetsService,
  getPet,
  readQR,
  sendNewPassword,
  createNewPassword,
  updateUsersService,
  getPetIdService,
}
