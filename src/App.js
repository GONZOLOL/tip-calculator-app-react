import  { useEffect, useState } from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function App() {
  let [bill, setBill] = useState("");
  let [tip, setTip] = useState("");
  let [people, setPeople] = useState("");
  let [tipAmount, setTipAmount] = useState("0.00");
  let [total, setTotal] = useState("0.00");

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

  useEffect(() => {

    
    if (bill && tip && people) {
      if (bill <= 0) {
        document.getElementById("bill").style.border = "2px solid red";
      } else if (people <=0 || people % 1 !== 0) {
          document.getElementById("people").style.border = "2px solid red";
      } else if (tip < 0) {
        document.getElementById("custom").style.border = "2px solid red";
      } 
      else { 
        setTipAmount((((tip*bill)/100) / people).toFixed(2));
        setTotal((((tip*bill)/100) + bill / people).toFixed(2));

        document.getElementById("bill").style.border = "none";
        document.getElementById("people").style.border = "none";
        }
    }
  },[bill,tip,people]);

      
  return (
    <div>
      <div>
        <h1>S P L I <br/>T T E R</h1>
        <div className='block'>
          <div className='container'>
              <div className='col1'>
                <div>
                  <div className='errorBlock' id='error1'>
                    <span className='headers'>Bill</span>
                    {bill && bill <= 0 ? <div className='error' dangerouslySetInnerHTML = {{ __html: "Can't be 0" }} /> : ""}
                  </div>

                  <div className='input-group' id="bill">
                    <div className='input-group-text dollar'>
                      <AttachMoneyIcon />
                    </div>
                    <div>
                      <input type="number" placeholder="0" name="bill" value={bill} min="1" pattern="^[0-9]+" required onChange={handleBillChange}/>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='errorBlock' id='error1'>
                  <span className='headers'>Select Tip %</span>
                  {tip && tip < 0 ?  <div className='tipError' dangerouslySetInnerHTML = {{ __html: "Can't be less than zero" }} /> : ""}
                  </div>
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

                      <input type="number" placeholder="Custom" id="custom" min="0" max="100" pattern="^[0-9]+" className='custom boton2' onChange={handleCustomTip}/>
                  </div>
                </div>
                <div>
                  <div className='errorBlock' id='error2'>
                    <span className='headers'>Number of People</span>
                    {people && (people <=0 || !people % 1 !== 0) ?  <div className='error' dangerouslySetInnerHTML = {{ __html: "Can't be zero or decimal" }} /> : ""}
                  </div>
                  <div className='input-group' id="people">
                    <div className='input-group-text dollar'>
                      <AttachMoneyIcon />
                    </div>
                    <div>
                      <input type="number" placeholder="0" name="people" value={people} min="1" pattern="^[0-9]+" required onChange={handlePeopleChange}/>
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
                        <div className='tip-amount'>
                        {{tipAmount} ?  <> <AttachMoneyIcon fontSize='string'/> {tipAmount} </> : <><AttachMoneyIcon fontSize='string'/> "0.00"</>}
                          
                        </div>
                      </div>
                      <div className='columna1'>
                        <p className='headers'>Total</p>
                        <p className='low-headers'>/ person</p>
                      </div>
                      <div className='columna2'>
                        <div className='total'>
                        {{total} ?  <> <AttachMoneyIcon fontSize='string'/> {total} </> : <><AttachMoneyIcon fontSize='string'/> "0.00"</>}
                        </div>
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
