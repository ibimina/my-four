

function App() {
const lit =[]

 for (let i = 0; i <= 31; i++) {

   let flag = true;
   for (let y = 2; y <= i - 1; y++) {
     if (i === 0) flag = false;
     if (i % y === 0) {
       flag = false;
       break;
     }
   }
    if (i%2===0 && !flag) {
     lit.push(
       <div style={{ backgroundColor: "green" }} className="box" key={i}>
         {i}
       </div>
     );
   } else if (flag) {
     lit.push(
       <div style={{ backgroundColor: "red" }} key={i} className="box">
         {i}
       </div>
     );
   } else if (!i % 2 === 0 && !flag) {
     lit.push(
       <div style={{ backgroundColor: "yellow" }} className="box" key={i}>
         {i}
       </div>
     );
   }
 }
  return (
    <div className="App">
      <h1>30 days of React Number Generator</h1>
     
        <div className="number">{lit}</div>
     
    </div>
  );
}

export default App;
