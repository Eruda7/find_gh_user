document.querySelector('#searchButton').addEventListener('click', () => {
	const API_BASE = 'https://api.github.com/users/'
	const username = document.querySelector('#inputUsername').value.trim() // Берем значение из инпута
	if (username) {
		const API = `${API_BASE}${username}`
		console.log(API) // Выводим готовую ссылку в консоль
		// Здесь можно добавить запрос к API, например:
		fetch(API)
			.then(response => {
				if (!response.ok) {
					throw new Error('Пользователь не найден')
				}
				return response.json()
			})
			.then(data => console.log(data))
			.catch(error => console.error(error))
	} else {
		console.error('Введите имя пользователя!')
	}
})
