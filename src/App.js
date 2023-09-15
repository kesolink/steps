import {useState} from 'react';
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  return(
    <Steps />
    
  )
}


 function Steps() {
  const [step, setStep] = useState(1);
  // const [text, setText] = useState({name: "keso"});
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious(){
    if(step > 1) setStep(step - 1)
  }
  function handleNext(){
    if(step < 3) setStep(step + 1)
    // setText({name: "kingsely"});
  }
  
  return (
    <>
    <button className='close' onClick={() => setIsOpen(!isOpen)}> &times;</button>
    {isOpen &&(
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      {/* <p className="message">step{step}: {messages[step - 1]} </p> */}
      <StepMessage step={1}>
      {messages[step - 1]}
      </StepMessage>
      

      <div className="buttons">
        <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={handlePrevious}>Previous</button>
        <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={handleNext} >Next</button>
      </div>
    </div>
    )}
    </>
  );
}
function StepMessage({step, childern}){
  return(
    <div className="message">
      <h3>step {step}</h3>
      {childern}
    </div>
  )
}

