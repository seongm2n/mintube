import React from 'react';
import { formatAgo } from '../../util/date';
import styles from './VideoCard.module.css';

function VideoCard({ video }) {
	const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

	return (
		<>
			<li className={styles.video__card}>
				<img
					className={styles.video__middleImg}
					src={thumbnails.medium.url}
					alt={title}
				/>
				<p className={styles.video__title}>{title}</p>
				<p className={styles.video__channelTitle}>{channelTitle}</p>
				<p className={styles.video__publishedAt}>
					{formatAgo(publishedAt, 'ko')}
				</p>
			</li>
		</>
	);
}
export default VideoCard;
