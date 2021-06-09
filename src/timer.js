import React from "react";

function TimerComponent() {
  const [time, seTime] = React.useState(0);
  console.log("컴포넌트 업데이트");
  function updateTime() {
    seTime(time + 1);
  }
  return (
    <div>
      <h3>{time}초</h3>
      <button onClick={updateTime}>1씩올려주세요</button>
    </div>
  );
}
export default TimerComponent;
