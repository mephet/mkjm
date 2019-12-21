import React from 'react';
import { Card } from 'antd';

const HomeComponent1 = props => {

    return (
        <div>
            <Card title="Card title" bordered={true} style={styles.containerStyle} >
                <p>dsfasdfajfoasidjfoasdfosandfnasdifnoasifdndaofinasonaosdfinasokdcnacnliawn</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    )
}

const styles = {
    containerStyle: {
        height: '90%',
        width: '100%',
        background: '#ECECEC',
    }
}

export default HomeComponent1;