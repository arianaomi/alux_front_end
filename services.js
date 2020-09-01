//! url API
// const URL_BASE = 'https://6e3cccb45d82.ngrok.io/'

const URL_BASE = 'https://api-alux.mybluemix.net/'

// Users
const signUpService = async req => {
  const response = await fetch(`${URL_BASE}sign-up`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req)
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
      'Content-Type': 'application/json'
    }
  })
  const token = await response.json()

  return token
}

// Posts
const addPostService = async (data, sessionToken) => {
  const response = await fetch(`${URL_BASE}entries`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: sessionToken
    }
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
      Authorization: sessionToken
    }
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

// Pets
const addPetService = async (data, sessionToken) => {
  const response = await fetch(`${URL_BASE}pets`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: sessionToken
    }
  })
  const res = await response.json()
  return res
}

const updatePetService = async (data, sessionToken, key) => {
  const response = await fetch(`${URL_BASE}pets/${key}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: sessionToken
    }
  })
  const res = await response.json()
  return res
}

const getPetsService = async () => {
  const response = await fetch(`${URL_BASE}pets.json`)
  const data = await response.json()
  return data
}

const getPet = async key => {
  if (typeof window !== 'undefined') {
    const token = localStorage.authToken
    const response = await fetch(`${URL_BASE}pets/${key}`, {
      headers: {
        authorization: token
      }
    })
    const data = await response.json()
    return data
  }
}

const readQR = async (token, coords) => {
  const response = await fetch(`${URL_BASE}pets/readQR?token=${token}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ coords })
  })
  const data = await response.json()
  return data
}

const sendNewPassword = async data => {
  const response = await fetch(`${URL_BASE}reset-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const resp = await response.json()
  return resp
}
const createNewPassword = async (data, token) => {
  console.log(token)
  const response = await fetch(`${URL_BASE}reset-password/${token}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const resp = await response.json()
  return resp
}

export {
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
  createNewPassword
}
