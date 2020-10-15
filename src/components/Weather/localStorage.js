export const saveCity = id => {
  localStorage.setItem(id, '')
}

export const getCities = () => {
  return Object.keys(localStorage)
}