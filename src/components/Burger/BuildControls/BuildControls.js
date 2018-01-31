import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => {
    const container = props.forElements.map(ing => {
        return (
            <BuildControl
                key={ing}
                label={ing}
                addClick={() => props.ingredientAdder(ing)}
                removeClick={() => props.ingredientRemover(ing)}
                disableButton={props.disable[ing]}
            />
        )
    })
    return (
        <div className={classes.BuildControls}>
            {container}
        </div>
    );
}
export default buildControls;
