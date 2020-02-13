import React from 'react';
import { isMobile } from 'react-device-detect';
import * as initialSeedData from './PortfolioSeed.json';
import AllocationChart from './AllocationChart.jsx';
import { getL2Allocation, constructBarDataFromMap, OptimizationFormatter } from './Util.js';
import AllocationBarChart from './AllocationBarChart.jsx';
import { Button } from 'antd';
import { sendClientAllocation } from '../../controllers/PortfolioRequestController.js';

const PortfolioOptimization = () => {

    const l2AssetClassList = ['AXJ_EQ', 'CASH', 'CN_HK_EQ', 'EUXUK_EQ', 'GLB_EQ', 'INC_ALTV',
        'INC_DMHY_BOND', 'INC_DMIG_BOND', 'INC_EM_BOND', 'INC_GLOBAL_DIV', 'INC_MULTI_ASSET',
        'JP_EQ', 'NA_EQ', 'OTHER_EM_EQ', 'OTHERS', 'THEMATIC_COMM', 'THEMATIC_EQ', 'THEMATIC_OTHERS', 'UK_EQ'];

    const { client_portfolio: clientPortfolio, fund_list: fundList, model_portfolio: modelPortfolio } = initialSeedData;

    let output = clientPortfolio.holdings.map(h => {
        return { id: h.fund_name, label: h.fund_name, value: h.percent * 100 }
    })

    let clientAllocMap = getL2Allocation(l2AssetClassList, clientPortfolio.holdings, fundList);
    let clientBarData = constructBarDataFromMap(clientAllocMap);
    const clientJson = OptimizationFormatter.toClientDfFormat(clientPortfolio.holdings);
    const fundJson = OptimizationFormatter.toFundDfFormat(fundList, l2AssetClassList);
    const modelJson = OptimizationFormatter.toModelDfFormat(modelPortfolio.model_allocation, l2AssetClassList);

    const toOptimizer = {
        clientJson,
        fundJson,
        modelJson
    }

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
        graphContainerStyle: {
            display: 'flex',
            flexDirection: 'column',
            height: '50em'
        },
        barChartStyle: {
            height: '50em'
        },
        pieChartStyle: {
            height: '20em'
        }
    }

    return (
        <div style={styles.containerStyle}>
            <h1>Test</h1>
            <Button type="primary" onClick={() => sendClientAllocation(toOptimizer)}>Client Allocation</Button>
            <div style={styles.graphContainerStyle}>
                <AllocationChart data={output} />
                <AllocationBarChart data={clientBarData} keys={l2AssetClassList} />
                <Button type="primary">Client Allocation</Button>
            </div>
            <h1>End</h1>
        </div>
    )


}

export default PortfolioOptimization;