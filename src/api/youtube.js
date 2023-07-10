export default class Youtube {
	// 외부(apiClient)로 부터 data 받음
	constructor(apiClient) {
		this.apiClient = apiClient;
	}

	async search(keyword) {
		return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
	}

	async #searchByKeyword(keyword) {
		return this.apiClient
			.search({
				params: { part: 'snippet', maxResults: 25, type: 'video', q: keyword },
			})
			.then((res) => res.data.items)
			.then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
	}

	async #mostPopular() {
		return this.apiClient
			.videos({
				params: {
					part: 'snippet',
					maxResults: 25,
					chart: 'mostPopular',
				},
			})
			.then((res) => res.data.items);
	}
}
