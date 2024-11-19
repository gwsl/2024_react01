import './App.css';
// import CourseListCard from './components/course/CourseListCard';
import Library from './components/step01/Library';
import Profile from './components/step02/Profile';
import CourseListCard from './components/step04/CourseListCard';

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
    },
    {
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      image: './img/kitten-2.jpg',
    },
    {
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      image: './img/kitten-3.jpg',
    }
  ]

  // 조건부 렌더링 : if, &&, 삼항연산자(조건식? 참:거짓)
  const ischk = true ;
  return (
    <div className='App'>
      {ischk ? <h2>Hello, react</h2> : <CourseListCard items={items} /> }
    </div>
  );
}

export default App;
