import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''; // need to fix with (?:)

    return (
        <div>
            <SuperInputText value={name} placeholder="Enter your name" onChange={setNameCallback}
                   className={`${inputClass} ${s.input}`}/>
            <SuperButton onClick={addUser} className={s.buttonAdd}>add</SuperButton>
            {error && <div className={s.errorClass}>{error}</div>}
            <div className={s.totalUsers}>Total users : <span className={s.totalUsersNumber}>{totalUsers}</span></div>
        </div>
    );
}

export default Greeting;
