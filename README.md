# Project

> ![mintube](https://github.com/seongm2n/mintube/assets/62044613/b7dbfce0-ec8b-4eaf-857d-f0b6a0d6b566)

---

### Stacks

<p>
<img src="https://img.shields.io/badge/Code-React-informational?style=flat&logo=react&color=61DAFB">
<img src="https://img.shields.io/badge/Stlye-PostCSS-informational?style=flat&logo=postcss&color=DD3A0A">
<img src="https://img.shields.io/badge/Stlye-Tailwind CSS-informational?style=flat&logo=tailwindcss&color=06B6D4"> 
<img src="https://img.shields.io/badge/Library-React qurey-informational?style=flat&logo=reactquery&color=FF4154">
</p>
<br>
<p>
<img src="https://img.shields.io/badge/Tool-Visual Studio Code-informational?style=flat&logo=visualstudiocode&color=007ACC">
<img src="https://img.shields.io/badge/Tool-Figma-informational?style=flat&logo=Figma&color=df4f25">
</p>

### Planning

- Header에 검색할 수 있는 기능 생성
- Youtube API 키 발급
- **키워드 검색, 핫한 비디오들, 연관 비디오, 채널 상세내용**에 관한 Youtube API 정리
- 하루에 받아올 수 있는 실시간 데이터양이 정해져 있음으로 mock데이터 사용해서 페이지 구성
- 화면사이즈 반응형으로 구현
- 비디오카드 눌렀을 때 비디오 상세페이지로 이동
- 비디오 상세페이지에서는 재생되는 영상과 이 영상과 관련된 연관비디오 리스트 보여줌

### Development

- react query 사용해서 API fetch, axios
- useContext 사용해서 Youtube API 따로 만듦
- apiClient 만들어서 외부 api가져다 쓰는 형태로 만듦
- 스타일링은 PostCSS와 TailwindCSS 섞어서 사용
- react-icons 사용
- react-router-dom 6버전 사용으로 라우터 경로 설정이 더 편해짐

### Trouble Shooting

- TailwindCSS의 장점을 발견했고 PostCSS로 구현이 안되는 것은 TailwindCSS를 사용  
   → 스타일 안에서 삼한연산자를 사용함

  ```jsx
  ...
  <li
    className={isList ? 'flex gap-1 m-2 cursor-pointer' : 'cursor-pointer'}
    onClick={() => {
      navigate(`/videos/watch/${video.id}`, { state: { video } });
    }}
  >
    <img
      className={isList ? 'w-60 mr-2 rounded-3xl' : 'rounded-3xl w-full'}
      src={thumbnails.medium.url}
      alt={title}
    />
    <div>
      <p className='font-semibold my-2 line-clamp-2'>{title}</p>
      <p className='text-sm opacity-80'>{channelTitle}</p>
      <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
    </div>
  </li>

  ```
- 하루에 사용할 수 있는 실시간 데이터를 다 써버린지 모르고 스타일링하다가 data를 조회할 수 없는 에러를 보고 mockdata를 만들어서 사용하게됨

- 처음에 yarn으로 개발환경을 설정했는데 배포를 하는 도중 배포할 수 없다는 에러를 밤11시부터 새벽3시까지 해결하다가 해결을 못해서 그날 아침 9시반에 npm으로 다시 개발환경 설정하고 배포를 했더니 성공하게됨

### To improve
- 피그마로 Header 디자인할때 동영상 추가, 프로필 사진 등을 기획했기에 Youtube API를 추가해서 기능 추가할 예정
- 메인 페이지도 예쁘게 스타일링해서 기능을 더 추가할 계획   
→ 카테고리, 추천 동영상, 최근 본 동영상 등 보여지는 부분

### Deploy

[Mintube](https://cute-mintube.netlify.app/)
