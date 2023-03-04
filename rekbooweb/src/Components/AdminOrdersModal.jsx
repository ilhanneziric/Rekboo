import { Modal } from "react-bootstrap"

const AdminOrdersModal = ({show, handleClose, order = null}) => {
  return (
    <Modal show={show} onHide={handleClose} dialogClassName="modal-md">
            <Modal.Header>
                <Modal.Title>Detalji o narudžbi</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="adminOrdersModalDataContainer">
                <div className="adminOrdersModalDataLabel">Naručioc: </div>
                <div className="adminOrdersModalData">{order?.user.firstName} {order?.user.lastName}</div>
              </div>                            
              <div className="adminOrdersModalDataContainer">
                <div className="adminOrdersModalDataLabel">Broj telefona: </div>
                <div className="adminOrdersModalData">{order?.user.phone}</div>
              </div>        
              <div className="adminOrdersModalDataContainer">
                <div className="adminOrdersModalDataLabel">Email: </div>
                <div className="adminOrdersModalData">{order?.user.email}</div>
              </div>
              <div className="adminOrdersModalDataContainer">
                <div className="adminOrdersModalDataLabel">Grad: </div>
                <div className="adminOrdersModalData">{order?.user.city}</div>
              </div>
              <div className="adminOrdersModalDataContainer">
                <div className="adminOrdersModalDataLabel">Adresa: </div>
                <div className="adminOrdersModalData">{order?.user.address}</div>
              </div>

              <br />
              <div className="adminOrdersModalDataContainer">
                <div className="adminOrdersModalDataLabel">Plan: </div>
                <div className="adminOrdersModalData">{order?.tags?.join(', ')}</div>
              </div>
              <div className="adminOrdersModalDataContainer">
                <div className="adminOrdersModalDataLabel">Jela: </div>
                {
                  order?.meals.map((m, index) => <div key={index} className="adminOrdersModalDataListItem">- {m}</div>)
                }
              </div>
              <div className="adminOrdersModalDataContainer">
                <div className="adminOrdersModalDataLabel">Broj osoba: </div>
                <div className="adminOrdersModalData">{order?.numberOfPeople}</div>
              </div>              
              <div className="adminOrdersModalDataContainer">
                <div className="adminOrdersModalDataLabel">Broj jela: </div>
                <div className="adminOrdersModalData">{order?.numberOfRecipes}</div>
              </div>              
              <div className="adminOrdersModalDataPriceContainer">
                <div className="adminOrdersModalDataLabel">Ukupna cijena narudžbe: </div>
                <div className="adminOrdersModalData">40KM</div>
              </div>              
            </Modal.Body>
            <Modal.Footer>
                <div className="activeBtnModal" onClick={handleClose}>U REDU</div>
            </Modal.Footer>
        </Modal>
  )
}

export default AdminOrdersModal