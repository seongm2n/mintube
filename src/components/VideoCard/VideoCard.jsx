import React from 'react';
import { formatAgo } from '../../util/date';
import styles from './VideoCard.module.css';
import { useNavigate } from 'react-router-dom';

function VideoCard({ video }) {
	const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
	const navigate = useNavigate();

	return (
		<>
			<li
				className={styles.video__card}
				onClick={() => {
					navigate(`/videos/watch/${video.id}`, { state: { video } });
				}}
			>
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
