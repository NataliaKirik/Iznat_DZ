import React, {useState} from "react";
import {requestApi} from "./RequestAPI";

function Request() {
    let [requestText, setRequestText] = useState<string>('')
    let [checked, setChecked] = useState<boolean>(false)
    const onClickRequest = (checked: boolean) => {
        requestApi.postRequest(checked)
            .then(res => {
                // console.log(res)
                setRequestText(res.data.errorText)
            })
            .catch(error => {
                // console.log(error.response ? error.response.data.errorText : error.message);
                setRequestText(error.response.data.errorText)
            })
    }
    const onChangeCheckBox = () => {
        setChecked(!checked)
    }


    return (
        <div>
            <button onClick={() => {
                onClickRequest(checked)
            }}>Request
            </button>
            <input type="checkbox" checked={checked} onChange={onChangeCheckBox}/>
            <div>{requestText}</div>
        </div>
    )
};


export default Request