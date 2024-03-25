import DisplayPricing from "../content/DisplayPricing";
import DisplayServices from "../content/DisplayServices";
const PricingPage = () => {
  return (<>
    <DisplayPricing />
    <DisplayServices one={true} />
  </>);
}

export default PricingPage;