import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    let arrayValue: [number, number] = [value1, value2]

    function setValueOne(value: number) {
        setValue1(value)
    }

    function setValueTwo(value: Array<number>) {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.padding}>
                <SuperRange onChangeRange={setValueOne}
                            value={value1}
                            max={value2}
                />
            </div>

            <div className={s.padding}>
                <SuperDoubleRange valueArr={arrayValue} onChangeRange={setValueTwo}/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
