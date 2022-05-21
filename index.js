// Add your code here
function submitData() {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: "Steve",
          email: "steve@steve.com",
        }),
      })
      .then(res => res.json())
      .then(getID)
      .catch(errorFn)

}
submitData()
function getID(obj) {
    document.body.innerHTML = obj.id
}
function errorFn(error) {
    document.body.innerHTML = error.message
}