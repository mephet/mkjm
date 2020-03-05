import React from 'react';
import { Row, Col, Statistic, Card } from 'antd';

function OptimizedPortfolioStatistic({ txns, aumTurnover, gaps }) {

    return (
        <Card>
            <Row gutter={20}>
                <Col span={6}>
                    <Statistic title="Optimized L2 Asset Gaps" value={`${gaps * 100}%`} />
                </Col>
                <Col span={6}>
                    <Statistic title="AUM Turnover" value={`${aumTurnover * 100}%`} />
                </Col>
                <Col span={6}>
                    <Statistic title="# of txns" value={txns} />
                </Col>
            </Row>
        </Card>
    )
}

export default OptimizedPortfolioStatistic;