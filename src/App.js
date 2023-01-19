import  { useState } from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function App() {
  let [bill, setBill] = useState("");
  let [tip, setTip] = useState("val");
  let [people, setPeople] = useState("");

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
  if (bill,tip,people) {
    if (bill <= 0) {
      document.getElementById("error1").innerHTML = "Introduzca un numero mayor a 0";
      document.getElementById("bill").style.border = "2px solid red";
    }
    else if (people <=0 || people % 1 != 0) {
      document.getElementById("error2").innerHTML = "El numero de personas no es valido";
      document.getElementById("people").style.border = "2px solid red";

    } else { 
      document.getElementById("error1").innerHTML = "";
      document.getElementById("error2").innerHTML = "";
      document.getElementById("bill").style.border = "none";
      document.getElementById("people").style.border = "none";

      let tip_amount = ((tip*bill)/100) / people
      let total = ((tip*bill)/100) + bill / people;
      
      document.getElementById("tip-amount").innerHTML ="$" + tip_amount.toFixed(2);
      document.getElementById("total").innerHTML ="$" + total.toFixed(2);
      
      console.log("esto funciona");
    }
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
                  <div className='input-group' id="bill">
                    <div className='input-group-text dollar'>
                      <AttachMoneyIcon />
                    </div>
                    <div>
                      <input type="number" placeholder="0" name="bill" value={bill} min="1" pattern="^[0-9]+" required onChange={handleBillChange}/>
                    </div>
                  </div>
                  <div id='error1'></div>
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
                  <div className='input-group' id="people">
                    <div className='input-group-text dollar'>
                      <AttachMoneyIcon/>
                    </div>
                    <div>
                      <input type="number" placeholder="0" name="people" value={people} min="1" pattern="^[0-9]+" required onChange={handlePeopleChange}/>
                    </div>
                  </div>
                  <div id='error2'></div>
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
