import { Container, Card } from "./styles";

export default function Orders() {
  return (
    <>
      <Container>
       <Card>
         <header>
          <h3>Pedido <strong>#9123123123</strong></h3>
          <small>Mesa #01</small>
         </header>
         <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Corrupti sapiente cupiditate iusto est voluptatum fugiat recusandae eum!
         </p>
         <select>
           <option value="PEDING">Pendente</option>
           <option value="PREPARING">Preparando</option>
           <option value="DONE">Finalizado</option>
         </select>
        </Card>

        <Card>
         <header>
          <h3>Pedido <strong>#9123123123</strong></h3>
          <small>Mesa #01</small>
         </header>
         <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Corrupti sapiente cupiditate iusto est voluptatum fugiat recusandae eum!
         </p>
         <select>
           <option value="PEDING">Pendente</option>
           <option value="PREPARING">Preparando</option>
           <option value="DONE">Finalizado</option>
         </select>
        </Card>
      </Container>
    </>
  );
}




