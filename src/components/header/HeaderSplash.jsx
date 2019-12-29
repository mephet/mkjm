import React from 'react';
import { Button, Icon, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const styles = {
    headerSplash: {
        flex: 1
    },
    headerButtonStyle: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#0D206A',
    },
    logoStyle: {
        flex: 1,
        paddingTop: '0.14em',
        fontSize: '1.7em',
    },
    textStyle: {
        flex: 1,
        fontSize: '1.7em',
        color: 'white',
    }

}

const HeaderSplash = props => {
    return (
        <div style={styles.headerSplash}>
            <Link to="/">
                <Button
                    style={styles.headerButtonStyle}
                    type="ghost"
                >
                    <Icon type="rocket" theme="twoTone" style={styles.logoStyle} />
                    <Title style={styles.textStyle}>MKJMWorld</Title>
                </Button>
            </Link>
        </div>
    )

}

export default HeaderSplash;