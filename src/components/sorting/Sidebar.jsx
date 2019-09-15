import React from 'react';
import { Container, Jumbotron, Button, Col, InputGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

import { updateSortingArray, updateArraySize } from '../../actions/sortingAction';
import { reshuffleArray } from '../controllers/SortingController';


const Sidebar = props => {
    const { arraySize, updateArraySize, updateSortingArray } = props;

    const generateNewArray = () => {
        const out = reshuffleArray(arraySize, 1, 300)
        updateSortingArray(out);
    }

    return (
        <Jumbotron>
            <p>This is the flavour text for the mergesort showcase</p>
            <Container>
                <Col md={4}>
                    <InputGroup>
                        <FormControl
                            aria-label="elements"
                            defaultValue={arraySize}
                            onChange={(e) => updateArraySize(e.target.value)}
                        >
                        </FormControl>
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={generateNewArray} >Reshuffle</Button>
                        </InputGroup.Append>

                    </InputGroup>
                </Col>

                <Col></Col>
                <Col><Button variant="primary">Start sort</Button></Col>
            </Container>
        </Jumbotron >
    )
}

const mapStateToProps = state => {
    return {
        arraySize: state.arraySize
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateArraySize: newSize => dispatch(updateArraySize(newSize)),
        updateSortingArray: newArray => dispatch(updateSortingArray(newArray))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);