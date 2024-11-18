export default function Courseitem(props) {
    // const course = {
    //     image : './img/coffee-blue.jpg',
    //     title : '입문자를 위한, HTML&CSS 웹 개발 입문',
    //     discription : '웹 개발에 필요한 기본 지식을 배웁니다.'
    // }
    // return (
    //         <article className="course">
    //         <img  class="course__img" src={course.image}
    //          alt="이미지" style={{width:"100px"}}  />
    //         <div className="course__body">
    //             <div className="course__title">{course.title}</div>
    //             <div className="course__description">{course.discription} </div>
    //         </div>
    //     </article>

    // );


    return (
            <article className="course">
            <img  class="course__img" src={props.img}
             alt="강의이미지" style={{width:"100px"}}  />
            <div className="course__body">
                <div className="course__title">{props.title}</div>
                <div className="course__description">{props.discription} </div>
            </div>
        </article>

    );
}

