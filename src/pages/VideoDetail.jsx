import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/channelInfo/channelInfo';
import RelatedVideos from '../components/RelatedVideos/RelatedVideos';
import styles from '../components/VideoDetail.module.css';

function VideoDetail() {
	const {
		state: { video },
	} = useLocation();

	const { title, channelId, channelTitle, description } = video.snippet;
	return (
		<section className={styles.section}>
			<article className={styles.channel__video__info}>
				<iframe
					id='player'
					type='text/html'
					width='100%'
					height='640'
					src={`http://www.youtube.com/embed/${video.id}`}
					frameborder='0'
				/>
				<div className={styles.channel__info}>
					<h2 className={styles.channel__title}>{title}</h2>
					<ChannelInfo
						id={channelId}
						name={channelTitle}
					/>
					<pre className={styles.channel__description}>{description}</pre>
				</div>
			</article>
			<section className={styles.related__videos}>
				<RelatedVideos id={video.id} />
			</section>
		</section>
	);
}
export default VideoDetail;
