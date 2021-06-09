function ChildComponent(props) {
  const { name, age } = props;
  return (
    <div>
      <p>
        {name}는 {age}살이다
      </p>
    </div>
  );
}
export default ChildComponent;
