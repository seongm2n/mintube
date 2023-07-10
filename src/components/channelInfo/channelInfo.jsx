import React from 'react';
import { useYoutubeApi } from '../../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import styles from './channelInfo.module.css';

function ChannelInfo({ id, name }) {
	const { youtube } = useYoutubeApi();
	const { data: url } = useQuery(
		['channel', id],
		() => youtube.channelImageURL(id),
		{ staleTime: 1000 * 60 * 5 }
	); // 채널 이미지가 빈번히 바뀌지 않으므로 stale타임을 지정

	return (
		//프로필사진 지정
		<div className={styles.profile}>
			{url && (
				<img
					className={styles.profile__img}
					src={url}
					alt={name}
				/>
			)}
			<div className={styles.channel__text}>
				<p className={styles.channel__name}>{name}</p>
				<p className={styles.channel__subscribe}>구독자</p>
			</div>
		</div>
	);
}

export default ChannelInfo;
