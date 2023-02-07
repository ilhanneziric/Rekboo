import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { deleteMeal } from '../redux/actions/mealsActions'

const DeleteVerificationModal = ({show, handleClose, deleteFunction, deleteId}) => {
    const disptach = useDispatch();

    const onSubmitForm = async e => {
        e.preventDefault();
        disptach(deleteFunction(deleteId));
    }

  return (
    <>
        <Modal show={show} onHide={handleClose} centered={true} dialogClassName="modal-md">
            <Modal.Header>
                <Modal.Title>Brisanje</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="deleteModalBody">Potvrdite brisanje!</div>
            </Modal.Body>
            <Modal.Footer>
                <button className="editBtn" onClick={handleClose}>ODBIJ</button>
                <button className="deleteBtn" onClick={onSubmitForm}>POTVRDI</button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default DeleteVerificationModal