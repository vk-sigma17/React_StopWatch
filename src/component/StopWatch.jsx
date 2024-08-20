import React from "react";

export default function StopWatch(){
    const [time, setTime] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(false);

    

    React.useEffect(() => {
        let interValid;
        if(isRunning === true){
            interValid = setInterval(() => {
                // setTime(prevTime => prevTime + 1)
                setTime(prevTime =>  prevTime+1 )
            }, 10)
        }
        return () => clearInterval(interValid);

    }, [isRunning])



        const hours = Math.floor(time/360000);
        const minutes = Math.floor((time%360000)/6000);
        const  seconds = Math.floor((time%6000)/100);
        const  miliSeconds = Math.floor(time % 100);
  
       
        

    function StartAndStop(){
        setIsRunning(prevRun => !prevRun)
    }
    function Reset(){
        setTime(0);
        setIsRunning(false);
    }

    return (
        <div className="watch-content">
            <p className="watchtime">{hours.toString().padStart(2, 0)}:{minutes.toString().padStart(2, 0)}:{seconds.toString().padStart(2, 0)}:{miliSeconds.toString().padStart(2, 0)}</p>
            <div className="watch-buttons">
                <button className="watch-button one" onClick={StartAndStop}>{isRunning ? "Stop" : "Start"}</button>
                <button className="watch-button two" onClick={Reset}>Reset</button>
            </div>
        </div>
    )
}