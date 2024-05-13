import React,{useState,useEffect} from "react";


const Pomodoro = () => {

    const [minutes, setMinutes] = useState(0); // time adjust
    const [seconds, setSeconds] = useState(5); // time adjust
    const [displayMessage, setDisplayMessage] = useState(false);
    const [shutup, setShutup] = useState(true);

    useEffect(() =>{
        let interval = setInterval(()=>{
            clearInterval(interval);

            if(seconds === 0){
                if (minutes !== 0){
                    setSeconds(59);
                    setMinutes(minutes-1);
                } else{
                    let minutes = displayMessage ? 24 : 0; // time adjust
                    let seconds = 3; // time adjust

                    setSeconds(seconds);
                    setMinutes(minutes);
                    setShutup(!shutup);
                    setDisplayMessage(!displayMessage);
                }
            }else {
                setSeconds(seconds-1);
            }

        },1000)
    },[seconds]);


    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return <div className="pomodoro">
        <div className="message">
            {displayMessage && <div>Break time. Next session starts in: </div>}
        </div>
        <div className="timer">{shutup && <div>Shut up</div>}<div>{timerMinutes}:{timerSeconds}</div></div>
    </div>
}



export default Pomodoro;
