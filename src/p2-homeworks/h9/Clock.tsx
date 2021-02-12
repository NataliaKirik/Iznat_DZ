import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Clock.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        // stop
        clearTimeout(timerId)
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
        }, 1000);

        setTimerId(id);
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    };
    const onMouseLeave = () => {
        // close
        setShow(false)
    };

    const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }
    const stringTime = date.toLocaleString("ru", timeOptions); // fix with date
    const stringDate = date.toLocaleString("ru", dateOptions); // fix with date

    return (
        <div className={s.mainWrapper}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={s.timeWrapper}
            >
                {stringTime}
            </div>

            {show && (
                <div className={s.dateWrapper}>
                    {stringDate}
                </div>
            )}

            <div className={s.buttonsWrapper}><
                SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>

        </div>
    );
}

export default Clock;
