import {makeStyles} from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    value?: number
    max: number
};

const useStyles = makeStyles({
    root: {
        width: 600,
    },
});

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className, value, max
    }
) => {
    const classes = useStyles();

    const onChangeCallback = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        // @ts-ignore
        onChange && onChange(event); // сохраняем старую функциональность

        onChangeRange && onChangeRange(newValue as number);
    }

    // const finalRangeClassName = `${s.range} ${className ? className : ""}`;

    return (
        <div className={classes.root}>
            <Slider
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay="on"
                aria-labelledby="range-slider"
            />
        </div>
    );
}

export default SuperRange;
