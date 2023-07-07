import React from 'react';
import { useParams } from 'react-router-dom';

function Video() {
	const { keyword } = useParams();
	return <div>Videos {keyword ? `🔍${keyword}` : '🩵'}</div>; 
}
export default Video;
