import Courseitem from "./Courseitem";


function CourseListCard() {
    return (
        <div class="card">
          <div class="card__header">강의 목록</div>
          <div class="card__body">
            <div class="courses">
              <Courseitem 
                title="입문자를 위한, HTML&CSS 웹 개발 입문" 
                discription="웹 개발에 필요한 기본 지식을 배웁니다." 
                img="./img/kitten-1.jpg"
              />

              <Courseitem 
                title="초급자를 위한, JavaScript rlch" 
                discription="JavaScript의 기본 지식을 배웁니다." 
                img="./img/kitten-2.jpg"
              />

              <Courseitem 
                title="중급자를 위한, React 개발 rhkwjd" 
                discription="React 웹 개발과정을 배웁니다." 
                img="./img/kitten-3.jpg"
              />
              
            </div>
          </div>
        </div>
    );
}

export default CourseListCard;