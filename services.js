//! url API
// const URL_BASE = 'https://6e3cccb45d82.ngrok.io/'
const URL_BASE = 'http://localhost:8080/'
const sessionToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNGFmMTQ1Mjk1MGE0MTliOGZhMDczMCIsImlhdCI6MTU5ODc0NzAxNCwiZXhwIjoxNTk4ODMzNDE0fQ.awppj7bOBgWA-oB6nffbThcYbdz1ymavu2SjHnkPnEQ'

// fetch(`${URL_BASE}.json`, {
//   method: 'POST',
//   mode: 'cors',
//   body: JSON.stringify(values)
// }).then((response) => console.log(response.json))

const getPosts = async () => {
  const response = await fetch(`${URL_BASE}/posts.json`)
  const data = await response.json()
  return data
}

const getPost = async key => {
  const response = await fetch(`${URL_BASE}/${key}.json`)
  const data = await response.json()
  return data
}

const getPets = async () => {
  const response = await fetch(`${URL_BASE}/pets.json`)
  const data = await response.json()
  return data
}

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

export { getPosts, getPost, getPets, getPet, readQR }
