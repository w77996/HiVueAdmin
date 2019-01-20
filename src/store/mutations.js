export default {
  changeRes (state, res) {
    state.res = res
    try {
      localStorage.res = res
    } catch (e) {}
  }
}
