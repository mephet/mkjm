import React from 'react';
import { Button, Icon, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const styles = {
    headerSplash: {
        height: 50
    },
    headerButtonStyle: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColo: 'darkblue',
    },
    logoStyle: {
        flex: 1,
        fontSize: '30px',
    },
    textStyle: {
        flex: 1,
        fontSize: '20px',
        marginTop: 8,
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