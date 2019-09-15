import React from 'react';
import Bar from './Bar';

const SortingVisual = props => {
    const { array, stepElements, stepType } = props;

    let sortingVisualStyle = {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    }

    return (
        <div style={sortingVisualStyle}>
            {array.map((num, index) => {
                if (stepType) {
                    if (stepElements && stepType === 'comparison' && stepElements.includes(num)) {
                        return <Bar key={index} length={num} bgc={'yellow'} />
                    }
                    if (stepElements && stepType === 'movement' && stepElements.includes(num)) {
                        return <Bar key={index} length={num} bgc={'red'} />
                    }
                }
                return <Bar key={index} length={num} bgc={'lightblue'} />
            })}
        </div>
    )
}

export default SortingVisual;