export const setToken = (token) => {
  localStorage.setItem("BLOG_ADMIN_TOKEN", token)
}

export const getToken = () => {
  return localStorage.getItem("BLOG_ADMIN_TOKEN") || ""
}


export const deleteToken = () => {
  return localStorage.removeItem("BLOG_ADMIN_TOKEN")
}
