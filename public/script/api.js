const username = 'Zennius'; // ganti dengan username GitHub kamu
const apiUrl = `https://api.github.com/users/${username}`;

fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    const totalReposEl = document.getElementById('total-repos');
    const followersEl = document.getElementById('followers');
    const followingEl = document.getElementById('following');

    if (totalReposEl) totalReposEl.innerHTML = data.public_repos;
    if (followersEl) followersEl.innerHTML = data.followers;
    if (followingEl) followingEl.innerHTML = data.following;
  })
  .catch((err) => console.error(err));
