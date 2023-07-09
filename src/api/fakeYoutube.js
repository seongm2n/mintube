import axios from 'axios';

export default class FakeYoutube {
	// eslint-disable-next-line no-useless-constructor
	constructor() {}

	async search(keyword) {
		return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
	}

	async #searchByKeyword() {
		return axios
			.get(`/Videos/search.json`)
			.then((res) => res.data.items)
			.then((items) =>
				items.map((item) => ({ ...item, id: item.id.videoId }))
			);
	}

	async #mostPopular() {
		return axios.get(`/Videos/popular.json`).then((res) => res.data.items);
	}
}
