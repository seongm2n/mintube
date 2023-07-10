import React from 'react';

function VideoCard({ video }) {
	const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
	const publishedAtDate = new Date(publishedAt);
	const currentDate = new Date();

	const timeDiff = currentDate.getTime() - publishedAtDate.getTime();
	const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
	const monthDiff =
		currentDate.getMonth() -
		publishedAtDate.getMonth() +
		12 * (currentDate.getFullYear() - publishedAtDate.getFullYear());
	let timeAgo;

	if (daysDiff < 1) {
		const hourDiff = Math.floor(timeDiff / (100 * 60 * 60));
		if (hourDiff < 1) {
			const minuteDiff = Math.floor(timeDiff / (1000 * 60));
			timeAgo = `${minuteDiff}${minuteDiff !== 1 ? '분' : ''}전`;
		} else {
			timeAgo = `${hourDiff}${hourDiff !== 1 ? '시간' : ''}전`;
		}
	} else if (daysDiff < 7) {
		timeAgo = `${daysDiff}${daysDiff !== 1 ? '일' : ''}전`;
	} else if (monthDiff < 1) {
		timeAgo = `${Math.floor(daysDiff / 7)}${
			Math.floor(daysDiff / 7) !== 1 ? '주' : ''
		}전`;
	} else {
		timeAgo = `${monthDiff}${monthDiff !== 1 ? '달' : ''}전`;
	}

	return (
		<>
			<li style={{ width: '25%', boxSizing: 'border-box', padding: '8px' }}>
				<img
					style={{ borderRadius: '20px', paddingBottom: '5px' }}
					src={thumbnails.medium.url}
					alt={title}
				/>

				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<p style={{ overflow: 'hidden' }}>{title}</p>
					<p>{channelTitle}</p>
					<p>{timeAgo}</p>
				</div>
			</li>
		</>
	);
}
export default VideoCard;
