import React, { Suspense, useState } from "react";
import axios from "axios";

import "./App.css";
import Context from "./component/Context";
import TodoList from "./component/Recoil/Component/TodoList";
import FoodList from "./component/Recoil/Component/FoodList";
import FoodAndTodo from "./component/Recoil/Component/FoodAndTodo";
import FoodAtomFamily from "./component/Recoil/Component/FoodContainer";
import Loading from "./component/Consider/Component/Loading";
import Error from "./component/Consider/Component/Error";
import { ErrorBoundary } from "./component/ErrorBoundary";
import Loadable from "./component/Consider/Component/Loadable";
import TryCatchAndLoading from "./component/Consider/Component/TryCatchAndLoading";

function App() {
  console.log("리렌더링부모");

  const sectionList = [
    { name: "렌더링테스트", id: 0 },
    { name: "selector사용하기", id: 1 },
    { name: "family사용하기", id: 2 },
    { name: "AtomEffect", id: 3 },
    { name: "고민1 suspense", id: 4 },
    { name: "고민2 errorBoundary", id: 5 },
    { name: "고민3 loadable", id: 6 },
    { name: "기존대로 tryCatchAndLoading", id: 7 },
  ];
  const [section, setSection] = useState(0);
  const handleChangeSection = (sectionId) => {
    setSection(sectionId);
  };

  return (
    <div className="App">
      {sectionList.map((item) => (
        <button onClick={() => handleChangeSection(item.id)} key={item.id}>
          {item.id + 1}: {item.name}
        </button>
      ))}
      <br />
      <br />
      <br />
      <br />
      <br />
      {section === 0 ? (
        <>
          콘솔 켜서 확인해보면 context는 제출할 떄 food에 해도, todo에 해도 두곳
          모두 리렌더링 되는 것을 볼 수 있고
          <br />
          atom을 활용해서 구현한 recoil은 각각 원하는 곳에서만 리렌더링 되는
          것을 확인할 수 있습니다.
          <br />
          <hr />
          <br />
          <br />
          <Context />
          <br />
          <br />
          <hr />
          <div>reocil</div>
          <div>todo리스트</div>
          <TodoList />
          <div> food리스트</div>
          <FoodList />
        </>
      ) : section === 1 ? (
        <>
          위쪽은 atom을 각각연결해둔 것이고 아래쪽은 selector로 food만 변화를 줄
          수 있게 코드를 구현했습니다.
          <br />
          <br />
          FoodAndTodo 컴포넌트를 확인하면 읽기전용, 양방향 셀렉터를 구현해놨고,
          <br />
          atom에서 default를 selector로 구현하는 코드도 작성해두신걸 확인할 수
          있습니다!
          <hr />
          <div>todo리스트</div>
          <TodoList />
          <div> food리스트</div>
          <FoodList />
          <hr />
          <FoodAndTodo />
        </>
      ) : section === 2 ? (
        <>
          그런데 코드를 짜면 배열구조가 많이나오는데요, <br />
          배열 하나만 수정해도 그 배열을 바라보는 모든 컴포넌트가 리렌더링
          일어나면 그 역시 비효율을 발생시킵니다.
          <br />
          <br />
          이럴 때는 family를 사용해서 해줄 수 있습니다! <br />
          atomFaily를 사용하여서 구현 예시를 올려뒀고,
          <br /> 그리고 atomFamily에 default를 selectorFamily로 구현해뒀습니다.
          <FoodAtomFamily />
        </>
      ) : section === 3 ? (
        <>여기는 아직 제가 바르게 이해하지 못했습니다!</>
      ) : section === 4 ? (
        <>
          <h1>이제 생기는 고민은 비동기를 어떻게 처리해야할까 입니다.</h1>
          비동기 코드를 바라볼 때 중요한 것은 <br />
          <br /> 1. 비동기 코드가 동작하고 있는 시간동안 유저가 어떤 화면을
          바라보게 할 것인가?
          <br />
          2. 비동기 코드가 실패하면 유저는 어떤 화면을 바라보게 할 것인가?
          <br />
          <br />
          먼저 지금 확인하실 것은 1번에 대한 리코일의 답인 Suspense라는
          리엑트에서 제공하는 loading기능입니다. 이 기능을 사용하면
          <br />
          <br />
          <code>const [loading, setLoading] = useState(false)</code>
          <br />
          <br />를 토글해주는 일도 많이 줄어들게 됩니다!
          <br />
          혹시 아래 치킨만 보이신다면 새로고침하고 다시 여기 페이지로
          와주세요..!
          <br />
          <br />
          <br />
          <br />
          <br />
          <Suspense fallback={<div>신중하게 메뉴 고르는중,,,</div>}>
            <Loading />
          </Suspense>
        </>
      ) : section === 5 ? (
        <>
          이번의 기능은 Suspense는 아까 정의한 1번 문제를 해결해준다면
          <br /> 2번 문제의 해결방안인 error가 발생할 때 잡아주는
          ErrorBoundary라는 해결책입니다!
          <br />
          <br />이 기능은 react의 메서드인지 알았는데 그건 아니건 따로
          만들어줘야하는 컴포넌트입니다!
          <br />
          <br />
          역시 마찬가지로 변화를 못느끼셨다면 새로고침하고 다시 와주세요..!
          <br />
          <br />
          <br />
          <br />
          <Suspense fallback={<div>신중하게 메뉴 고르는중,,,</div>}>
            <ErrorBoundary>
              <Error />
            </ErrorBoundary>
          </Suspense>
        </>
      ) : section === 6 ? (
        <>
          이렇게 Suspense와 ErrorBoundary 로 비동기 처리해주는 것 이외에도
          recoil에서는 rodable이라는 선택지도 줍니다.
          <br />
          <br />
          코드에 성공과 실패를 따로 구현 해둬서 확인해보고싶은 분은 주셕을
          바꿔보셔도 괜찮고,
          <br /> 그렇지 않아도 충분히 예측 가능한 코드 입니다!
          <br />
          근데 이건 아직 불안정한 api라고 합니다!
          <br />
          <br />
          <br />
          <Loadable />
        </>
      ) : section === 7 ? (
        <>
          <div>구관이 명관이라 생각하고 다시 try catch</div>
          <br />
          <br />
          <TryCatchAndLoading />
        </>
      ) : null}
    </div>
  );
}

export default App;
