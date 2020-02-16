import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import AllocationChart from './AllocationChart.jsx';
import { getL2Allocation, constructBarDataFromMap, OptimizationFormatter } from './Util.js';
import AllocationBarChart from './AllocationBarChart.jsx';
import { Button } from 'antd';
import { sendClientAllocation } from '../../controllers/PortfolioRequestController.js';
import FundDataConfiguration from './FundDataConfiguraion.jsx';
import { connect } from 'react-redux';

const PortfolioOptimization = props => {

    const { fundList, l2AssetClassList, clientPortfolio, modelPortfolio } = props;

    console.log(l2AssetClassList);

    let output = clientPortfolio.holdings.map(h => {
        return { id: h.fund_name, label: h.fund_name, value: h.percent * 100 }
    })

    // let clientAllocMap = getL2Allocation(l2AssetClassList, clientPortfolio.holdings, fundList);
    // let clientBarData = constructBarDataFromMap(clientAllocMap);
    const clientJson = OptimizationFormatter.toClientDfFormat(clientPortfolio.holdings);
    const fundJson = fundList;
    const modelJson = OptimizationFormatter.toModelDfFormat(modelPortfolio.model_allocation, l2AssetClassList);

    const toOptimizer = {
        clientJson,
        fundJson,
        modelJson
    }

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
            <h1>Client Allocation</h1>
            <Button type="primary" onClick={() => sendClientAllocation(toOptimizer)}>Client Allocation</Button>
            <h1>Fund Data</h1>
            <FundDataConfiguration />
            <div style={styles.graphContainerStyle}>
                {/* <FundDataConfig2 /> */}
            </div>
            <h1>End</h1>
        </div>
    )


}

const mapStateToProps = state => {
    return {
        l2AssetClassList: state.optimizationDetails.l2AssetClassList,
        fundList: state.optimizationDetails.fundList,
        clientPortfolio: state.optimizationDetails.clientPortfolio,
        modelPortfolio: state.optimizationDetails.modelPortfolio
    }
}

export default connect(mapStateToProps)(PortfolioOptimization);