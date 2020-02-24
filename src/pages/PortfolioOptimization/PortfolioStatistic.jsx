import React from 'react';
import { Row, Col, Statistic, Card } from 'antd';

const PortfolioStatistic = ({ gaps, clientPortfolio }) => {

    // console.log(clientPortfolio);
    const numOfFunds = clientPortfolio.length


    const clientAllocation = clientPortfolio.map(c => c["Fund Allocation"])
                                            .reduce((total, curr) => total + curr);
    console.log(clientAllocation)

    return (
        <Card>
            <Row gutter={20}>
                <Col span={6}>
                    <Statistic title="L2 Asset gaps" value={`${Number(gaps.toFixed(2)) * 100}%`} />
                </Col>
                <Col span={6}>
                    <Statistic title="# Client Allocated funds" value={numOfFunds} />
                </Col>
                <Col span={6}>
                    <Statistic title="Client Allocation" value={`${clientAllocation * 100}%`} />
                </Col>
            </Row>
        </Card>
    )
}

export default PortfolioStatistic;