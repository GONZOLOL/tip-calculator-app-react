import './App.css';
import  { useState } from 'react';

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("val");
  const [people, setPeople] = useState("");

  console.log(bill, tip, people);

  const handleBillChange = (event) => {
    setBill(event.target.value);
  };
  const handleClick = (event) => {
    setTip(event.target.value);
  };
  const handlePeopleChange = (event) => {
    setPeople(event.target.value);
  };
  const handleCustomTip = (event) => {
    setTip(event.target.value);
  };
  

  return (
    <div>
      
      <div className='align-self-center'>
        <h1>S P L I</h1>
        <h1>T T E R</h1>
        <div className='block'>
          
          <div className='block_container'>

            <div>
              <div>
                <input type="number" id="bill" placeholder="0" name="tipAmount" value={bill} min="1" pattern="^[0-9]+" required onChange={handleBillChange}/>
              </div>
              <div>
                <div>
                  <input type="radio" id="btn-1" value="5" name="tip" autoComplete="off" onChange={handleClick} />
                  <label htmlFor="btn-1">5%</label>
                  <input type="radio" id="btn-2" value="10" name="tip" autoComplete="off" onChange={handleClick} />
                  <label htmlFor="btn-2">10%</label>
                  <input type="radio" id="btn-3" value="15" name="tip" autoComplete="off" onChange={handleClick} />
                  <label htmlFor="btn-3">15%</label>
                  <input type="radio" id="btn-4" value="25" name="tip" autoComplete="off" onChange={handleClick} />
                  <label htmlFor="btn-4">25%</label>
                  <input type="radio" id="btn-5" value="50" name="tip" autoComplete="off" onChange={handleClick} />
                  <label htmlFor="btn-5">50%</label>
                  <input type="number" placeholder="Custom" id="custom" min="1" max="100" pattern="^[0-9]+" onChange={handleCustomTip}/>
                </div>
              </div>
              <input type="number" id="people" placeholder="0" name="people" value={people} min="1" pattern="^[0-9]+" required onChange={handlePeopleChange}/>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
