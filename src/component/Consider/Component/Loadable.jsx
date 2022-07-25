import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { choiceFail, choiceFood } from "../state";

const Loadable = () => {
  // const choice = useRecoilValueLoadable(choiceFail);
  const choice = useRecoilValueLoadable(choiceFood);

  switch (choice.state) {
    case "hasValue":
      return <div>{choice.contents}</div>;
    case "loading":
      return <div>Loading...</div>;
    case "hasError":
      return <div>에..에러가...에러가 발생했다..!</div>;
  }
};

export default Loadable;
