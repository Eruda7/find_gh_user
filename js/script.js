// const API_base = 'https://api.github.com/users/'

// const userNameInput = document.querySelector('#inp').value
// const find_btn = document.querySelector('#find_btn')
// const form = document.querySelector('form')

// const API = `${API_base}${userNameInput}`

// console.log(API)

// form.addEventListener('submit', e => {
// 	e.preventDefault()
// 	if (!inp.value.trim().length) {
// 		return alert('Введите имя пользователя!')
// 	}
// })

const find_btn = document.querySelector('#find_btn')
const output = document.querySelector('#output')

find_btn.addEventListener('click', () => {
	const API_base = 'https://api.github.com/users/'
	const username = document.querySelector('#inp').value.trim()

	if (username) {
		const API = `${API_base}${username}`
		console.log(API)

		// =======

		fetch(API)
			.then(res => {
				if (!res.ok) {
					throw new Error('Пользователь не найден')
				}
				return res.json()
			})
			.then(data => {
				console.log(data)
				addOutput(data)
			})
			.catch(err => console.error(err))
	} else {
		console.error('Введите имя пользователя GitHub')
	}

	const addOutput = userInfo => {
		const url_profile = document.createElement('a')
		url_profile.href = userInfo.html_url

		const avatar = document.createElement('img')
		avatar.src = userInfo.avatar_url
		avatar.alt = userInfo.login
		avatar.style.width = '300px'

		url_profile.append(avatar)

		// =====
		const name = document.createElement('h2')
		name.textContent = `Name: ${userInfo.name}`

		const userLogin = document.createElement('b')
		userLogin.textContent = `Login: ${userInfo.login}`

		const userLocation = document.createElement('p')
		userLocation.textContent = `Location: ${userInfo.location}`

		const followersDiv = document.createElement('div')
		followersDiv.classList.add('followersDiv')
		const followers = document.createElement('p')
		followers.textContent = `Followers: ${userInfo.followers}`

		const following = document.createElement('p')
		following.textContent = `Following: ${userInfo.following}`

		followersDiv.append(followers, following)

		const infoText = document.createElement('p')
		infoText.textContent = 'Чтобы перейти нажмите на аватарку'

		output.innerHTML = ''
		output.append(
			url_profile,
			name,
			userLogin,
			userLocation,
			followersDiv,
			infoText
		)
	}
})
