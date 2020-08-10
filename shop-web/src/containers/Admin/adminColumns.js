import React from "react";
import { EditOutlined, CheckCircleOutlined } from "@ant-design/icons";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TableColumns = () => {
  const { t } = useTranslation("common");

  const history = useHistory();
  const handleButtonDetails = (id) => {
    history.push({
      pathname: `/bills-detail/${id}`,
    });
  };

  const columns = [
    {
      title: t(`billpage.table.billCode`),
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      width: 25,
    },
    {
      title: t(`billpage.table.createdAt`),
      dataIndex: "createdAt",
      render: (text, record) => {
        const time = moment(record.createdAt).format("DD/MM/YYYY");
        return <div>{time}</div>;
      },
      width: 100,
    },
    {
      title: t(`billpage.table.customer`),
      dataIndex: "username",
      width: 150,
    },
    {
      title: t(`billpage.table.bills`),
      dataIndex: "bills",
      render: (text, record) => {
        return <div>{record.bills.length}</div>;
      },
      width: 50,
    },
    {
      title: t(`billpage.table.status`),
      dataIndex: "status",
      width: 50,
      render: (text, record) => {
        return (
          <div>
            {record.status === "done" ? (
              <div style={{ color: "#52c41a" }}>
                <b>
                  {record.status}
                  <CheckCircleOutlined
                    style={{
                      marginLeft: "3px",
                      marginTop: "5px",
                      position: "absolute",
                    }}
                  />
                </b>
              </div>
            ) : (
              <div style={{ color: "red" }}>{record.status}</div>
            )}
          </div>
        );
      },
    },
    {
      title: t(`billpage.table.action`),
      width: 25,
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <EditOutlined
          onClick={() => handleButtonDetails(record.id)}
          style={{ fontSize: "18px" }}
        />
      ),
    },
  ];
  return columns;
};

export default TableColumns;
