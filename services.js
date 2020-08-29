const URL_BASE = 'https://api-alux.mybluemix.net/'

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

const getPost = async (key) => {
  const response = await fetch(`${URL_BASE}/${key}.json`)
  const data = await response.json()
  return data
}

const getPets = async () => {
  const response = await fetch(`${URL_BASE}/pets.json`)
  const data = await response.json()
  return data
}

const getPet = async (key) => {
  const response = await fetch(`${URL_BASE}/pet/${key}.json`)
  const data = await response.json()
  return data
}

export { getPosts, getPost, getPets, getPet }
