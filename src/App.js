import './App.css';
// import CourseListCard from './components/course/CourseListCard';
import Library from './components/step01/Library';
import Profile from './components/step02/Profile';
import CourseListCard from './components/step04/CourseListCard';
import PackingList from './components/step05/PackingList';
import TextList from './components/step06/TextList';
import TextList2 from './components/step06/TextList2';
import TextList3 from './components/step06/TextList3';
import Event01 from './components/step07/Event01';
import Event02 from './components/step07/Event02';
import Count from './components/step08/Count';
import CourseListCard08 from './components/step08/CourseListCard08';

// 파스칼 케이스 사용해야 된다. (첫글자 대문저 단어 첫글자 대문자)
// function Counter() {
//   return (
//     <button> Counter</button>
//   );
// }

function App() {
  const items = [
    {
      title: '입문자를 위한, HTML&CSS 웹 개발 입문',
      description: '웹 개발에 필요한 기본 지식을 배웁니다.',
      image: './img/kitten-1.jpg',
      isFavorite: true
    },
    {
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      image: './img/kitten-2.jpg',
      isFavorite: false
    },
    {
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      image: './img/kitten-3.jpg',
      isFavorite: true
    }
  ]

  // 조건부 렌더링 : if, &&, 삼항연산자(조건식? 참:거짓)
  const ischk = false ;
  return (
    <>
      {ischk ? <h2>Hello, react</h2> : <CourseListCard items={items} /> }
      <hr />
      <PackingList />
      <hr/>
      <h1> 키가 없어 오류 발생</h1>
      <TextList />
      <hr/>
      <h1> 키가 존재한다.</h1>
      <TextList2 />
      <hr />
      <TextList3 />
      <hr />
      <Event01 />
      <hr />
      <Event02 />
      <hr />
      <CourseListCard08 items={items}/>
      <hr />
      <Count />
      <br /><br /><br /><br /><br /><br /><br />
    </>
  );
}

export default App;
