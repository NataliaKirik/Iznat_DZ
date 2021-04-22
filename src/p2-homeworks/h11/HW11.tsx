import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import RangeSlider from "./Slider";

function HW11() {
    const [value1, setValue1] = useState(5);
    const [value2, setValue2] = useState(40);

    let arrayValue: [number, number] = [value1, value2]

    function onChangeRangeCallback(value: number) {
        setValue1(value)
    }


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange onChangeRange={onChangeRangeCallback}
                            value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>
            <RangeSlider valueArr={arrayValue}/>

            {/*<div>*/}
            {/*    <span>{value1}</span>*/}
            {/*    <SuperDoubleRange*/}
            {/*        // сделать так чтоб value1 и value2 изменялось*/}
            {/*    />*/}
            {/*    <span>{value2}</span>*/}
            {/*</div>*/}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
