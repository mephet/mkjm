import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const HomeComponent1 = props => {

    return (
        <Jumbotron style={styles.jumbotronStyle}>
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
                    </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
    )
}

const styles = {
    jumbotronStyle: {
        height: '90%',
        width: '100%',
        // marginBottom: '10%'
    }
}

export default HomeComponent1