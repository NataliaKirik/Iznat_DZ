import React, {ChangeEvent} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

type RangeSliderPropsType = {
    onChangeRange?: (value: [number, number]) => void
    valueArr?: number[]
    // min, max, step, disable, ...
}


const RangeSlider: React.FC<RangeSliderPropsType> = (
    {
        valueArr
    }
) => {


    const classes = useStyles();

    // const [value, setValue] = React.useState(valueArr);

    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        // setValue(newValue as number[]);
    };

    return (
        <div className={classes.root}>
            <Slider
                value={valueArr}
                onChange={handleChange}
                valueLabelDisplay="on"
                aria-labelledby="range-slider"

            />
        </div>
    );
}
export default RangeSlider;
