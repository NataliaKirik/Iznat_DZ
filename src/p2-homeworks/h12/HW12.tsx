import React, {useCallback} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeC} from "./bll/themeReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";

const themes = ['green', 'blue', 'red'];


function HW12() {
    const theme = useSelector((state: AppStoreType) => state.theme.selectedTheme);

    const dispatch = useDispatch();

    const onChangeCallback = useCallback((option: string) => {
        dispatch(changeThemeC(option))
    }, [dispatch])


    return (
        <div className={s[theme]}>
            <hr/>
            <span className={`${s[theme + '-text']} ${s.text}`}>
                homeworks 12
            </span>

            <SuperSelect options={themes} onChangeOption={onChangeCallback}/>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <hr/>
        </div>
    );
}

export default HW12;
