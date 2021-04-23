import React, {ChangeEvent} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 600,
    },
});

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: Array<number>) => void
    valueArr?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        valueArr,
        onChangeRange
        // min, max, step, disable, ...
    }
) => {
    const classes = useStyles();

    const onChangeRangeCallback2 = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number[]);

    };

    return (
        <div className={classes.root}>
            <Slider
                value={valueArr}
                onChange={onChangeRangeCallback2}
                valueLabelDisplay="on"
                aria-labelledby="range-slider"
            />
        </div>
    );
}

export default SuperDoubleRange;
