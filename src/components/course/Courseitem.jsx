// function Courseitem(props) {
// const course = {
//     image : './img/coffee-blue.jpg',
//     title : '입문자를 위한, HTML&CSS 웹 개발 입문',
//     description : '웹 개발에 필요한 기본 지식을 배웁니다.'
// }
// return (
//         <article className="course">
//         <img  class="course__img" src={course.image}
//          alt="이미지" style={{width:"100px"}}  />
//         <div className="course__body">
//             <div className="course__title">{course.title}</div>
//             <div className="course__description">{course.description} </div>
//         </div>
//     </article>

// );


// return (
//         <article className="course">
//         <img  class="course__img" src={props.img}
//          alt="강의이미지" style={{width:"100px"}}  />
//         <div className="course__body">
//             <div className="course__title">{props.title}</div>
//             <div className="course__description">{props.description} </div>
//         </div>
//     </article>

// );
// }

// props의 구조할당 : props로 받지 않고 속성 그대로 받기
function Courseitem({title, description, img}) {
    return (
        <article className="course">
            <img class="course__img" src={img}
                alt="강의이미지" style={{ width: "100px" }} />
            <div className="course__body">
                <div className="course__title">{title}</div>
                <div className="course__description">{description} </div>
            </div>
        </article>

    );
}
export default Courseitem;