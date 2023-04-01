const LiftList = (props) => {

  const lifts = props.lifts;

  return (
    <div>
      {lifts.map((lift) => (
        <div key={lift.id}>
          <h2>{ lift.name }</h2>
          <h2>{ lift.weight }</h2>
          <h2>{ lift.date }</h2>
        </div>
      ))}
    </div>
  );
}
 
export default LiftList;