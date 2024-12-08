import Container from "@/app/components/Container";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import OrdersClient from "./OrdersClient";
import getOrdersByUserId from "@/actions/getOrdersByUserID";

const Orders = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <NullData title="OOPS !!! Acess denied" />;
  }

const orders = await getOrdersByUserId(currentUser.id);

if(!orders){
    return <NullData title="OOPS! No Orders Yet...!"/>
}

  return (
    <div className="pt-8">
      <Container>
        <OrdersClient orders={orders} />
      </Container>
    </div>
  );
};

export default Orders;
