import React, { useState } from "react";
import { isMobile } from "react-device-detect";
// import AllocationChart from './AllocationChart.jsx';
import AllocationBarChart from "./AllocationBarChart.jsx";
import { sendClientAllocation, test } from "../../controllers/PortfolioRequestController.js";

import { connect } from "react-redux";
import FundDataConfiguration from "./EditableTables/FundDataConfiguration.jsx";
import ClientHoldingsConfiguration from "./EditableTables/ClientHoldingsConfiguration.jsx";
import ModelPortfolioConfiguration from "./EditableTables/ModelPortfolioConfiguration.jsx";
import { Button, Collapse, Icon, Spin } from "antd";
import PortfolioStatistic from "./PortfolioStatistic.jsx";
import { getL2Gaps } from "./Util.js";

const { Panel } = Collapse;

const PortfolioOptimization = props => {
  const { fundList, clientPortfolio, modelPortfolio } = props;

  const [allocation, setAllocation] = useState(null);
  const [loadingOp, setLoadingOp] = useState(false);

  const handleResponse = () => {
    setLoadingOp(true);
    sendClientAllocation(toOptimizer).then(response => {
      setAllocation(response);
      setLoadingOp(false);
    });
  };

  const gaps = getL2Gaps(clientPortfolio, modelPortfolio, fundList)

  const toOptimizer = {
    clientJson: clientPortfolio,
    fundJson: fundList,
    modelJson: modelPortfolio
  };

  const styles = {
    containerStyle: {
      marginTop: "64px",
      fontFamily: `'roboto', 'sans-serif'`,
      paddingTop: "5em",
      marginLeft: isMobile ? null : "20em",
      marginRight: isMobile ? null : "20em"
    },
    graphContainerStyle: {
      display: "flex",
      flexDirection: "column",
      height: "50em"
    },
    barChartStyle: {
      height: "50em"
    },
    pieChartStyle: {
      height: "20em"
    }
  };

  const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

  return (
    <div style={styles.containerStyle}>
      <PortfolioStatistic gaps={gaps} clientPortfolio={clientPortfolio} />
      <Collapse defaultActiveKey={['1']}>
        <Panel header="Client Portfolio" key="1">
          <ClientHoldingsConfiguration />
        </Panel>
        <Panel header="Model Portfolio" key="2">
          <ModelPortfolioConfiguration />
        </Panel>
        <Panel header="Fund Data" key="3">
          <FundDataConfiguration />
        </Panel>
      </Collapse>
      <h1>Allocation</h1>
      <Button type="primary" onClick={handleResponse}>
        Optimize Portfolio
      </Button>
      <div style={styles.graphContainerStyle}>
        {loadingOp ? <Spin indicator={antIcon} /> : (allocation === null ? null : <AllocationBarChart data={allocation} />)}
      </div>
      <Button onClick={() => console.log(fundList)}>log</Button>
      <Button onClick={test}>Test</Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    l2AssetClassList: state.optimizationDetails.l2AssetClassList,
    fundList: state.optimizationDetails.fundList,
    clientPortfolio: state.optimizationDetails.clientPortfolio,
    modelPortfolio: state.optimizationDetails.modelPortfolio
  };
};

export default connect(mapStateToProps)(PortfolioOptimization);
