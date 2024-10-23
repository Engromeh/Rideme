import { Rate, Space, Table, Typography } from "antd";
import { useState } from "react";
function Inventory() {
  const [loading] = useState(false);
  const [dataSource] = useState([
    {
      key: "1",
      driverId: "001",
      firstName: "John",
      lastName: "Doe",
      rating: 4.5,
      carPlates: "ABC123",
      carModel: "Toyota Camry",
      category: "Sedan",
      blockDriver: "No",
    },
    {
      key: "2",
      driverId: "002",
      firstName: "Jane",
      lastName: "Smith",
      rating: 4.8,
      carPlates: "XYZ456",
      carModel: "Honda Civic",
      category: "Sedan",
      blockDriver: "Yes",
    },
    {
      key: "3",
      driverId: "003",
      firstName: "Michael",
      lastName: "Johnson",
      rating: 4.2,
      carPlates: "DEF789",
      carModel: "Ford Focus",
      category: "Sedan",
      blockDriver: "No",
    },
    {
      key: "4",
      driverId: "004",
      firstName: "Emily",
      lastName: "Williams",
      rating: 4.6,
      carPlates: "GHI012",
      carModel: "Nissan Altima",
      category: "Sedan",
      blockDriver: "Yes",
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
        Drivers
      </Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "DriverId",
            dataIndex: "driverId",
          },
          {
            title: "FirstName",
            dataIndex: "firstName",
          },
          {
            title: "LastName",
            dataIndex: "lastName",
          },
          {
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled />;
            },
          },
          {
            title: "CarPlates",
            dataIndex: "carPlates",
          },
          {
            title: "CarModel",
            dataIndex: "carModel",
          },
          {
            title: "Category",
            dataIndex: "category",
          },
          {
            title: "BlockDriver",
            dataIndex: "blockDriver",
          },
        ]}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
        style={styles.table}
      />
    </Space>
  );
}

export default Inventory;
