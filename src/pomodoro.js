import React,{useState,useEffect} from "react";


const Pomodoro = () => {

    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);

    useEffect(() =>{},[seconds]);


    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return <div className="pomodoro">
        <div className="messege">
            {displayMessage && <div>Break time. Next session starts in: </div>}
        </div>
        <div className="timer">{timerMinutes}:{timerSeconds}</div>
    </div>
}



export default Pomodoro;