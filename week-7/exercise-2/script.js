async function auth(username, password) {
  const data = await fetch("user.json");
  const users = await data.json();
  for (let i = 0; i < users.length; i++) {
    if (username === users[i].username && password === users[i].password) {
      return users[i];
    }
  }
}
let login = document.getElementById("login").addEventListener("click", log);
async function log() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  document.getElementById("info").innerText = JSON.stringify(
    await auth(username, password)
  );
}
