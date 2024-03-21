import styled from 'styled-components';

const ProductTable = () => {
  const products = [
    {
      model: 'H705A',
      title: 'Govee RGBIC Permanent Outdoor Lights',
      colors: 'RGBIC',
      length: '100ft (30m)',
      controlMethods: 'APP, Voice Control',
      voiceControl: 'Google Assistant & Alexa',
      waterproof: 'String Lights--IP67, Control Box & Adapter--IP65',
      voltage: '36V',
      wattage: '72W',
      lumens: '26 Lumen',
      appConnectivity: '2.4GHz Wi-Fi + Bluetooth',
      specialFeatures: 'Energy Efficient, Dimmable, Waterproof, Color Changing, Water Resistant',
    }
  ];

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Model</Th>
            <Th>Product Title</Th>
            <Th>Colors</Th>
            <Th>Length</Th>
            <Th>Control Methods</Th>
            <Th>Voice Control</Th>
            <Th>Waterproof</Th>
            <Th>Voltage</Th>
            <Th>Wattage</Th>
            <Th>Lumens</Th>
            <Th>App Connectivity</Th>
            <Th>Special Features</Th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              {Object.values(product).map((value, index) => (
                <Td key={index}>{value}</Td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;


const TableContainer = styled.div`
  overflow-x: auto;
  margin: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const Th = styled.th`
  background-color: #ffffff;
  color: #000000;
  padding: 15px;
  text-align: left;
`;

const Td = styled.td`
  padding: 12px; /* Adjusted padding */
  text-align: left;
  border: 1px solid #ddd;
`;