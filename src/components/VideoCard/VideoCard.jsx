import React from 'react';
import { formatAgo } from '../../util/date';

function VideoCard({ video }) {
	const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

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
					<p>{formatAgo(publishedAt, 'ko')}</p>
				</div>
			</li>
		</>
	);
}
export default VideoCard;
