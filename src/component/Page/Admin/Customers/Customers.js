import { Avatar, Button, Space, Table, Typography } from "antd";
import { useState } from "react";
import "./Customers.css";
function Customers() {
  const [loading] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      address: {
        address: "123 Main St",
        city: "New York",
      },
      rejected: false,
    },
    {
      key: "2",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@example.com",
      phone: "555-123-4567",
      address: {
        address: "789 Elm St",
        city: "Los Angeles",
      },
      rejected: false,
    },
    {
      key: "3",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      firstName: "Michael",
      lastName: "Brown",
      email: "michael.brown@example.com",
      phone: "777-555-1234",
      address: {
        address: "456 Oak St",
        city: "Chicago",
      },
      rejected: false,
    },
    {
      key: "4",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      firstName: "Emily",
      lastName: "Garcia",
      email: "emily.garcia@example.com",
      phone: "111-222-3333",
      address: {
        address: "101 Pine St",
        city: "San Francisco",
      },
      rejected: false,
    },
    {
      key: "5",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      firstName: "David",
      lastName: "Martinez",
      email: "david.martinez@example.com",
      phone: "999-888-7777",
      address: {
        address: "222 Maple St",
        city: "Seattle",
      },
      rejected: false,
    },
  ]);

  const handleReject = (key) => {
    const updatedDataSource = dataSource.map((item) => {
      if (item.key === key) {
        return {
          ...item,
          rejected: true,
        };
      }
      return item;
    });
    setDataSource(updatedDataSource);
  };

  const renderActionButtons = (record) => {
    if (record.rejected) {
      return null;
    }
    return (
      <Space>
        <Button type="primary">Accept</Button>
        <Button type="danger" onClick={() => handleReject(record.key)}>
          Decline
        </Button>
      </Space>
    );
  };

  return (
    <Space size={20} direction="vertical" className="space">
      <Typography.Title level={4} className="Typography">
        Customers
      </Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} className="Avatar" />;
            },
          },
          {
            title: "First Name",
            dataIndex: "firstName",
          },
          {
            title: "Last Name",
            dataIndex: "lastName",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },
          {
            title: "Address",
            dataIndex: "address",
            render: (address) => {
              return (
                <span className="span">
                  {address.address}, {address.city}
                </span>
              );
            },
          },
          {
            title: "Action",
            render: (_, record) => renderActionButtons(record),
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      />
    </Space>
  );
}

export default Customers;
