import React, { Component } from "react";
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import './ItemCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

export default class ItemCard extends Component {

    render() {
        if (this.props.item.includes(":")) {
            return (
                <MDBCard className="item-card">
                    <MDBCardBody className='item-name item-done'><s>{this.props.item.split(":")[0]}</s></MDBCardBody>
                    <button className='icon-btn' onClick={() => this.props.handleDelete(this.props.item)}><FontAwesomeIcon className="trash-icon item-done" icon={faTrash}/></button>
                </MDBCard>
            )
        }
        return (
            <MDBCard className="item-card">
                <MDBCardBody className='item-name'>{this.props.item}</MDBCardBody>
                <button className='icon-btn' onClick={() => this.props.handleDelete(this.props.item)}><FontAwesomeIcon className="trash-icon" icon={faTrash}/></button>
                <button className='icon-btn' onClick={() => this.props.handleCheck(this.props.item)}><FontAwesomeIcon className="check-icon" icon={faCheck}/></button>
            </MDBCard>
        );
    }
}