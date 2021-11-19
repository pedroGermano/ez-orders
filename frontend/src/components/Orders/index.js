import { useEffect, useState } from "react";
import { Container, Card } from "./styles";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3001/orders");
      const orders = await res.json();
      setOrders(orders);
    })();
  }, []);

  return (
    <>
      <Container>
        {orders.map((order) => (
          <Card key={order._id} status={order.status}>
            <header>
              <h3>
                Pedido <strong>#{order._id.substr(0, 15)}</strong>
              </h3>
              <small>Mesa #{order.table}</small>
            </header>
            <p>{order.description}</p>
            <select select={order.status}>
              <option value="PEDING">Pendente</option>
              <option value="PREPARING">Preparando</option>
              <option value="DONE">Finalizado</option>
            </select>
          </Card>
        ))}
      </Container>
    </>
  );
}
