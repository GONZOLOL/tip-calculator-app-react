import  { useEffect, useState } from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Person2Icon from '@mui/icons-material/Person2';

function App() {
  let [bill, setBill] = useState("");
  let [tip, setTip] = useState("");
  let [people, setPeople] = useState("");
  let [tipAmount, setTipAmount] = useState("0.00");
  let [total, setTotal] = useState("0.00");

  let [boton, setBoton] = useState("");

  const link = document.querySelectorAll('.btn');

  console.log(bill, tip, people, boton);

  const handleBillChange = (event) => {
    setBill(event.target.value);
  };
  const handleClick = (event) => {
    setTip(event.target.value);
    setBoton(event.target.id);
  };

  const handlePeopleChange = (event) => {
    setPeople(event.target.value);
  };
  const handleCustomTip = (event) => {
    setTip(event.target.value);
  };

  const resetButtons = () => {
    link.forEach(y => y.classList.remove('active'));
  }

  function refreshPage() {
    setBill("");
    document.getElementById("bill").style.outline = "none";
    setTip("");
    document.getElementById("custom").style.outline = "none";
    document.getElementById("custom").value = "";
    resetButtons();
    setPeople("");
    document.getElementById("people").style.outline = "none";
    setTipAmount("0.00");
    setTotal("0.00");
    setBoton("");
  }

  useEffect(() => {
    if (boton) {
      link.forEach(y => y.classList.remove('active'));
      document.getElementById(boton).classList.add('active');
      document.getElementById("custom").value = "";
      setBoton("");
    }
    
    if (bill && tip && people) {
      if (bill <= 0) {
        document.getElementById("bill").style.outline = "2px solid red";
      } else {document.getElementById("bill").style.outline = "none";}

      if (people <=0 || people % 1 !== 0) {
          document.getElementById("people").style.outline = "2px solid red";
      } else {document.getElementById("people").style.outline = "none";}
      
      if (tip < 0 || tip > 100) {
        document.getElementById("custom").style.outline = "2px solid red";
      } else {document.getElementById("custom").style.outline = "none";}

      if (bill && tip && people && bill > 0 && people > 0 && people % 1 === 0 && tip >= 0 && tip < 100) {
        setTipAmount((((tip*bill)/100) / people).toFixed(2));
        setTotal((((tip*bill)/100) + bill / people).toFixed(2));
      }
    }
  },[bill,tip,people]);

  return (
  <>
    <h1>S P L I <br/>T T E R</h1>
    <div className='block'>
      <div className='container'>
          <div className='col1'>
            <div>
              <div className='errorBlock' id='error1'>
                <span className='headers'>Bill</span>
                {bill && bill <= 0 ? <div className='error' dangerouslySetInnerHTML = {{ __html: "Can't be 0" }} /> : ""}
              </div>

              <div className='input-wrapper'>
                  <input id="bill" type="number" placeholder="0" name="bill" value={bill} min="1" pattern="^[0-9]+" required onChange={handleBillChange}/>
                  <div className='input-icon'>
                    <AttachMoneyIcon color='disabled' />
                  </div>
              </div>

            </div>
            <div>
              <div className='errorBlock' id='error1'>
              <span className='headers'>Select Tip %</span>
              {tip && (tip < 0 || tip > 100) ?  <div className='tipError' dangerouslySetInnerHTML = {{ __html: "The number must be (0-100)" }} /> : ""}
              </div>
              <div className='btn-container'>
                  <button id="btn1" value="5" name="tip" autoComplete="off" className='btn' onClick={handleClick}>5%</button>
                  <button id="btn2" value="10" name="tip" autoComplete="off" className='btn' onClick={handleClick}>10%</button>
                  <button id="btn3" value="15" name="tip" autoComplete="off" className='btn' onClick={handleClick}>15%</button>
                  <button id="btn4" value="25" name="tip" autoComplete="off" className='btn' onClick={handleClick}>25%</button>
                  <button id="btn5" value="50" name="tip" autoComplete="off" className='btn' onClick={handleClick}>50%</button>

                  <input type="number" placeholder="Custom" id="custom" min="0" max="100" pattern="^[0-9]+" className='custom' onClick={resetButtons} onChange={handleCustomTip} />
              </div>
            </div>
            <div>
              <div className='errorBlock' id='error2'>
                <span className='headers'>Number of People</span>
                {people && (people <=0 || !people % 1 !== 0) ?  <div className='error' dangerouslySetInnerHTML = {{ __html: "Can't be zero or decimal" }} /> : ""}
              </div>
              <div className='input-wrapper'>
                <input id="people" type="number" placeholder="0" name="people" value={people} min="1" pattern="^[0-9]+" required onChange={handlePeopleChange}/>
                  <div className='input-icon'>
                    <Person2Icon color='disabled' />
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
  </>
  );
}
export default App;
