import React from 'react';
import { useYoutubeApi } from '../../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import styles from './channelInfo.module.css';

function ChannelInfo({ id, name }) {
	const { youtube } = useYoutubeApi();
	const { data: url } = useQuery(['channel', id], () =>
		youtube.channelImageURL(id)
	);

	return (
		//프로필사진 지정
		<div>
			{url && (
				<img
					src={url}
					alt={name}
				/>
			)}
			<p>{name}</p>
		</div>
	);
}

export default ChannelInfo;
