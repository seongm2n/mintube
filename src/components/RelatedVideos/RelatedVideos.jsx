import React from 'react';
import { useYoutubeApi } from '../../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../VideoCard/VideoCard';
import styles from './RelatedVideos.module.css';

function RelatedVideos({ id }) {
	const { youtube } = useYoutubeApi();
	const {
		isLoading,
		error,
		data: videos,
	} = useQuery(['related', id], () => youtube.relatedVideos(id));
	return (
		<>
			{isLoading && <p>Loading....</p>}
			{error && <p>Something is wrong</p>}
			{videos && (
				<ul className={styles.Related__videos}>
					{videos.map((video) => (
						<VideoCard
							key={video.id}
							video={video}
						/>
					))}
				</ul>
			)}
		</>
	);
}

export default RelatedVideos;
