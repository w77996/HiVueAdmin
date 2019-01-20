let defaultRes = 'default res'
try {
  if (localStorage.res) {
    defaultRes = localStorage.res
  }
} catch (e) {}

export default {
  res: defaultRes
}
