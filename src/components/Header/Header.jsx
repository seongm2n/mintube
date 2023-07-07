import { React, useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { PiTelevisionSimpleDuotone } from 'react-icons/pi';

function Header() {
	//keyword가 있다면 해당 keyword를 search텍스트로 지정
	const { keyword } = useParams(); // 해당 param을 알아와야 함으로 사용
	const [search, setSearch] = useState('');
	const navigate = useNavigate(); //리액트 라우터에서 이동하기 위해서 사용
	const handleInputChange = (e) => {
		setSearch(e.target.value);
	};
	const handleSearch = (e) => {
		e.preventDefault();
		setSearch('');
		navigate(`/videos/${search}`);
		console.log('검색어', search);
	};

	// history를 변경했을때 경로에 맞게 입력창의 텍스트도 자동으로 업데이트 되게 
	// param이 변경될때 마다 자동으로 input이 변경
	useEffect(() => {
		setSearch(keyword || '');
	}, [keyword]);

	return (
		<header>
			<Link to='/'>
				<PiTelevisionSimpleDuotone />
				<h1>Mintube</h1>
			</Link>

			<form onSubmit={handleSearch}>
				<input
					type='text'
					placeholder='검색'
					value={search || ''}
					onChange={handleInputChange}
				/>
				<button type='submit'>
					<BsSearch />
				</button>
			</form>
		</header>
	);
}

export default Header;
