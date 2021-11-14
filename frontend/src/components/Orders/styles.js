import styled from "styled-components";

export const Container = styled.div`
    margin-top: 42px;

    display: grid;
    grid-gap: 1.6rem;
    grid-template-columns: 1fr 1fr;

`;

export const Card = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

  header {
    display: flex;
    justify-content: space-between;

    h3{
      font-weight: 500;
      font-size: 18px;
    }

    small{
      padding: 4px 8px;
      background: #ccc;
      color: #fff;
      border-radius: 5px;
      font-weight: bold;
      font-size: 12px;
    }
  }

  p{
    font-size: 14px;
    margin-top: 16px;
  }

  select{
    height: 45px;
    margin-top: 8px;
    padding: 0 8px;
    width: 100%;
    border-radius: 5px;
    font-size: 14px;
    border: 2px solid #ccc;
    background: #fff;
  }
`;
