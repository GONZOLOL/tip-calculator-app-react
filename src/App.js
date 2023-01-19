import  { useState } from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

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

  function refreshPage() {
    window.location.reload(false);
  }
  

  return (
    <div>
      
      <div>
        <h1>S P L I</h1>
        <h1>T T E R</h1>
        <div className='block'>
          
          <div className='container'>

              <div className='col1'>
                <div>
                  <span className='headers'>Bill</span>
                  <div className='input-group'>
                    <div className='input-group-text dollar'>
                      <AttachMoneyIcon />
                    </div>
                    <div>
                      <input type="number" id="bill" placeholder="0" name="tipAmount" value={bill} min="1" pattern="^[0-9]+" required onChange={handleBillChange}/>
                    </div>
                  </div>
                </div>

                <div>
                  <span className='headers'>Select Tip %</span>
                  <div className='btn-container'>
                      <input type="radio" id="btn-1" value="5" name="tip" autoComplete="off" className='btn-check' onChange={handleClick} />
                      <label className='boton1 btn' htmlFor="btn-1">5%</label>
                      <input type="radio" id="btn-2" value="10" name="tip" autoComplete="off" className='btn-check' onChange={handleClick} />
                      <label className='boton1 btn' htmlFor="btn-2">10%</label>
                      <input type="radio" id="btn-3" value="15" name="tip" autoComplete="off" className='btn-check' onChange={handleClick} />
                      <label className='boton1 btn' htmlFor="btn-3">15%</label>
                      <input type="radio" id="btn-4" value="25" name="tip" autoComplete="off" className='btn-check' onChange={handleClick} />
                      <label className='boton2 btn' htmlFor="btn-4">25%</label>
                      <input type="radio" id="btn-5" value="50" name="tip" autoComplete="off" className='btn-check' onChange={handleClick} />
                      <label className='boton2 btn' htmlFor="btn-5">50%</label>
                      <input type="number" placeholder="Custom" id="custom" min="1" max="100" pattern="^[0-9]+" className='custom boton2' onChange={handleCustomTip}/>
                  </div>
                </div>
                <div>
                  <span className='headers'>Number of People</span>
                  <div className='input-group'>
                    <div className='input-group-text dollar'>
                      <AttachMoneyIcon/>
                    </div>
                    <div>
                      <input type="number" id="people" placeholder="0" name="people" value={people} min="1" pattern="^[0-9]+" required onChange={handlePeopleChange}/>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col2 inner-block'>
                <div className='sub-container'>
                      <div className='columna1'>
                        <p className='headers'>Tip Amount</p>
                        <p className='low-headers'>/ person</p>
                      </div>
                      <div className='columna2'>
                        <p className='tip-amount' id="tip-amount">$0.00</p>
                      </div>
                      <div className='columna1'>
                        <p className='headers'>Total</p>
                        <p className='low-headers'>/ person</p>
                      </div>
                      <div className='columna2'>
                        <p className='total' id="total">$0.00</p>
                      </div>
                    <button className='reset' onClick={refreshPage}>Reset</button>
                </div>

              </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
