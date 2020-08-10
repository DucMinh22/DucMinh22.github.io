import React, { useState } from "react";
import Modal from "antd/lib/modal/Modal";

function Adloading(props) {
  const { notice } = props;
  const [visible, setVisible] = useState(true);
  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  return (
    <div>
      <Modal visible={visible} footer={null} onCancel={handleCancel}>
        <div>
          <img
            className="img-fluid"
            src="https://cf.shopee.vn/file/3be5f6a9d1f3fb2f434f9ea123110094_xxhdpi"
            alt=""
          />
        </div>
      </Modal>
    </div>
  );
}

export default Adloading;
