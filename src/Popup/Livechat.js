import MessModal from "./MessModal";

const LiveChat = (props) => {
  return (
    <MessModal onClose={props.onClose}>
      <div className="border-bottom d-flex justify-content-between mb-3">
        <h5>Customer Support</h5>
        <p className="bg-secondary text-white p-2">Let's Chat App</p>
      </div>
      <div className="fw-light">
        <p className="text-white client text-end">Xin chào</p>
        <p className="text-white client text-end">
          Làm thế nào để xem các sản phẩm
        </p>
        <p className="admin">ADMIN: Chào bạn</p>
        <p className="admin mb-5">
          ADMIN: Bạn có thể vào danh mục Shop để xem các sản phẩm
        </p>
      </div>
      <div className="border-top pt-3 shop">
        <input type="text" placeholder="Enter Message!" className="ipmes" />
      </div>
    </MessModal>
  );
};

export default LiveChat;
