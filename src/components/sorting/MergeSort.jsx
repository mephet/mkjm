import React from 'react';
import { connect } from 'react-redux';
import { Container, Col, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';
import SortingVisual from './SortingVisual';
import { beginMergeSort } from '../controllers/SortingController';

const MergeSort = props => {

    const { array } = props

    let testArr = [2, 7, 3, 23, 5, 76];
    const test = array => {
        const output = beginMergeSort(array)
        console.log(array);
        console.log(output);
    }

    return (
        <Container>
            <Col>
                <Sidebar sortType="mergesort" />
            </Col>
            <SortingVisual array={array} />
            <Button onClick={() => test(testArr)}>Test sort</Button>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        array: state.sortingArray
    }
}

export default connect(mapStateToProps, null)(MergeSort);