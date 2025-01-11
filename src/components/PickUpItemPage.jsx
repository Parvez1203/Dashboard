import PickUpItems from "./PickUpItem";
import OrdersDetails from "./OrdersDetails";
import Header from "./Header";

export default function PickUpItemsPage() {
  return (
    <div className="flex-1">
      <Header />
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <PickUpItems />
        </div>
        <div className="col-span-1">
          <OrdersDetails />
        </div>
      </div>
    </div>
  );
}
