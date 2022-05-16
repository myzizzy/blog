//import logo from './logo.svg';

// eslint-disabled
import { useState } from 'react';
import './App.css';

function App() {

  let [postTitleArr, postTitleChamgeFunc] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬독학'] ) ;
  let [likeValueArr, setLikeValueArrFunc] = useState([0,2,0]) ;
  let [isViewModal, setViewModal] = useState(true) ;
  let [selectedIdx] = useState(1);
  //let [goodNunArr, setGoodNumArr] = useState([]) ;


  // function initGopodNum() {
  //   let tempArr  = [] ;
  //   for ( let i = 0 ; i < 3 ; i++ ) { // useState 갯수 구하는거 찾아보자 : 귀찮아~~
  //     tempArr.push(0) ;
  //   }
  //   setGoodNumArr(tempArr) ;
  // }
  // //initGopodNum();

  /*
  [1,2,3].map(function (a) { //입력된 값 만큼 반복 수행
    console.log(a) ;
  } )
  */
  
  function titleChangeFunc() { // 타이틀 변경
    let copy = [...postTitleArr] ;
    copy[0] = '여자 코트 추천' ;
    console.log(copy);
    postTitleChamgeFunc(copy) ;
  }

  function titleSortFunc() { // 타이틀 정렬
    let copy = [...postTitleArr] ;
    copy.sort() ;
    postTitleChamgeFunc(copy) ;
  }
  // function actionsetLikeValueArrFunc() { // 추천수 증가
  //   setLikeValueArrFunc( goodNumber + 1 );
  // }
  function actionsetLikeValueArrFunc() { // 추천수 증가~~ 값 전달 방법 확인 필요
    //let copy = [...likeValueArr] ;
    //setLikeValueArrFunc( likeValueArr + 1 );
  }
  function actionSetModel() {
    if ( isViewModal == true ) {
      setViewModal(false) ;
    } else {
      setViewModal(true) ;
    }
  }

  function chageTitle(idx) {

  }

  function titleChangeOntargetFunc( ) { // 타이틀 변경
    let copy = [...postTitleArr] ;
    copy[0] = '여자 코트 추천' ;
    console.log(copy);
    postTitleChamgeFunc(copy) ;
  }
  

  return (
    <div className="App">
      
      {/* <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={ titleChangeFunc }>타이틀 변경</button> <button onClick={ titleSortFunc }>정렬</button> <button onClick={ actionSetModel }>Show/Hide</button>
      <div className='list'>
        <h4>{postTitleArr[0] } <span onClick={ actionsetLikeValueArrFunc } >Good</span> { goodNumber }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ postTitleArr[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ postTitleArr[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}
      
      {
        postTitleArr.map( function(a, i) { // a :값 , i : index
          return (
            <div className='list' key={'div' + i}>
              <h4>{ a }</h4>
              <span onClick={()=> {
                let tempLikeValueArr = [...likeValueArr] ;
                tempLikeValueArr[i] = tempLikeValueArr[i] + 1;
                setLikeValueArrFunc(tempLikeValueArr) ;
              }} >Good</span> { likeValueArr[i] }
              <p>2월 17일 발행</p>
            </div>

          ) 
        })
      }
      {
        //조건식 ? 참일때 실행항 코드 : 거짓일때 사용할 코드
        isViewModal == true ? <Modal postTitleChangeFunc={titleChangeFunc} postTitle={postTitleArr} titleidx={selectedIdx} /> : null 
      }
    </div>
  );
}

//let Modal = () => {} :: 변수로 함수 사용 {지져분해 보여서 별로;;}
function Modal( props ) {
  return (
      <div className='modal'>
        <h4>{props.postTitle[props.titleidx]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={ props.postTitleChangeFunc }>글수정</button>
      </div>
  )
}
export default App;
