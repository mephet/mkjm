import React from 'react';
import { isMobile } from 'react-device-detect';
import * as d from './PortfolioSeed.json';
import MyResponsivePie from './AllocationChart.jsx/index.js';

const PortfolioOptimization = () => {

    const l2AssetClassList = ['AXJ_EQ,', 'CASH', 'CN_HK_EQ', 'EUXUK_EQ', 'GLB_EQ', 'INC_ALTV',
        'INC_DMHY_BOND', 'INC_DMIG_BOND', 'INC_EM_BOND', 'INC_GLOBAL_DIV', 'INC_MULTI_ASSET',
        'JP_EQ', 'NA_EQ', 'OTHER_EM_EQ', 'OTHERS', 'THEMATIC_COMM', 'THEMATIC_EQ', 'THEMATIC_OTHERS', 'UK_EQ'];

    const { client_portfolio } = d;
    console.log(client_portfolio)

    

    const data = [
        {
            "id": "sass",
            "label": "sass",
            "value": 223,
            "color": "hsl(267, 70%, 50%)"
        },
        {
            "id": "erlang",
            "label": "erlang",
            "value": 326,
            "color": "hsl(84, 70%, 50%)"
        },
        {
            "id": "stylus",
            "label": "stylus",
            "value": 385,
            "color": "hsl(280, 70%, 50%)"
        },
        {
            "id": "php",
            "label": "php",
            "value": 583,
            "color": "hsl(354, 70%, 50%)"
        },
        {
            "id": "lisp",
            "label": "lisp",
            "value": 482,
            "color": "hsl(202, 70%, 50%)"
        }
    ];



    const styles = {
        containerStyle: {
            marginTop: '64px',
            fontFamily: `'roboto', 'sans-serif'`,
            paddingTop: '5em',
            marginLeft: isMobile ? null : '20em',
            marginRight: isMobile ? null : '20em'
        },
    }

    return (
        <div style={styles.containerStyle}>
            <h1>Test</h1>
            <div style={{ height: 400 }}>
                <MyResponsivePie data={data} />
            </div>
            <h1>End</h1>
        </div>
    )


}

export default PortfolioOptimization;