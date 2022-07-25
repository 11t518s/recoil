import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { choiceTryCatchFood, deepThinking } from "../state";

const TryCatchAndLoading = () => {
  const [loading, setLoading] = useState(false);
  const [choice, setChoice] = useRecoilState(choiceTryCatchFood);

  const selecting = async () => {
    setLoading(true);
    try {
      const response = await deepThinking();
      setChoice(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <button onClick={selecting}>메뉴 고민하기 버튼</button>
      <br />
      <br />
      <br />
      {loading ? <div>심각하게 고민중</div> : <div>{choice}</div>}
    </>
  );
};

export default TryCatchAndLoading;
