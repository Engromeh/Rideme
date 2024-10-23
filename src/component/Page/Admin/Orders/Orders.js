import { Space, Table, Typography } from "antd";
import { useState } from "react";

function Orders() {
  const [loading] = useState(false);
  const [dataSource] = useState([
    {
      key: "1",
      title: "Ride #1",
      price: 25.5,
      driverName: "John Doe",
      passengerName: "Alice Smith",
      source: "123 Main St",
      destination: "456 Elm St",
      status: "Completed",
    },
    {
      key: "2",
      title: "Ride #2",
      price: 30.75,
      driverName: "Jane Smith",
      passengerName: "Bob Johnson",
      source: "789 Oak St",
      destination: "101 Pine St",
      status: "Cancelled",
    },
    {
      key: "3",
      title: "Ride #3",
      price: 20.0,
      driverName: "Michael Johnson",
      passengerName: "Eva Green",
      source: "555 Cedar St",
      destination: "777 Maple St",
      status: "Ongoing",
    },
    {
      key: "4",
      title: "Ride #4",
      price: 40.25,
      driverName: "David Brown",
      passengerName: "Sophia Taylor",
      source: "888 Oak St",
      destination: "999 Pine St",
      status: "Completed",
    },
    {
      key: "5",
      title: "Ride #5",
      price: 35.5,
      driverName: "Emily Williams",
      passengerName: "Oliver Davis",
      source: "333 Elm St",
      destination: "444 Cedar St",
      status: "Ongoing",
    },
  ]);

  const styles = {
    container: {
      padding: "20px",
    },
    title: {
      marginBottom: "20px",
    },
    table: {
      border: "1px solid #ddd",
      borderRadius: "5px",
    },
    tableHeader: {
      backgroundColor: "#f0f0f0",
      padding: "10px",
    },
    tableCell: {
      padding: "10px",
    },
  };

  return (
    <Space size={20} direction="vertical" style={styles.container}>
      <Typography.Title level={4} style={styles.title}>
        Rides
      </Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "RideId",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "DriverName",
            dataIndex: "driverName",
            render: (value) => <span>{value}</span>,
          },
          {
            title: "PassengerName",
            dataIndex: "passengerName",
            render: (value) => <span>{value}</span>,
          },
          {
            title: "Source",
            dataIndex: "source",
          },
          {
            title: "Destination",
            dataIndex: "destination",
          },
          {
            title: "Status",
            dataIndex: "status",
          },
        ]}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
        style={styles.table}
      />
    </Space>
  );
}

export default Orders;
