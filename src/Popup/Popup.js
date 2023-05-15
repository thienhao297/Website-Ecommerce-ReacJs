import Modal from "./Modal";

const Popup = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <h1>Check Popup</h1>
    </Modal>
  );
};

export default Popup;
