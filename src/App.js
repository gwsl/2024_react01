import './App.css';
import CourseListCard from './components/course/CourseListCard';
import Library from './components/step01/Library';


// 파스칼 케이스 사용해야 된다. (첫글자 대문저 단어 첫글자 대문자)
// function Counter() {
//   return (
//     <button> Counter</button>
//   );
// }

function App() {
  return (
    <main className='App'>
      
        {/* 3단계 <CourseListCard /> */}
        <Library />

    </main>
    
  );
}

export default App;
