import ServiceHeader from "../components/ServiceHeader";
import DisplayServices from "../content/DisplayServices";
import Table from "../components/Table"

const ServicesPage = () => {
  return (<>
    <ServiceHeader />
    <DisplayServices one={true} two={true} />
    <Table />

  </>);
}

export default ServicesPage;