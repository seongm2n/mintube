import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components//VideoCard/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import styles from '../components/VideoCard/VideoCard.module.css';

function Videos() {
	const { keyword } = useParams();
	const { youtube } = useYoutubeApi();
	const {
		isLoading,
		error,
		data: videos,
	} = useQuery(['videos', keyword], () => youtube.search(keyword), {
		staleTime: 100 * 60 * 1,
	});

	return (
		<>
			{isLoading && <p>Loading....</p>}
			{error && <p>Something is wrong</p>}
			{videos && (
				<ul className={styles.videos}>
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
export default Videos;
