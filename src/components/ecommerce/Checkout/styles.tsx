import styled from 'styled-components';

export const ULList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const LIList = styled.li`
  width: 330px;
  height: auto;
  cursor: pointer;
  animation: all 0.3s ease-in-out;
  margin: 8px;
  list-style: none;
  border: 2px solid grey;
`;

export const Heading = styled.h2`
  color: black;
  text-align: left;
`;

export const SkuName = styled.div`
  color: #464646;
  margin-bottom: 10px;
`;

export const SkuDetails = styled.div`
  color: #464646;
`;

export const AddButton = styled.button`
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(224, 41, 41);
  border-radius: 10px;
  padding: 0 12px;
  font-size: 16px;
  font-weight: 600;
  outline: 0 !important;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 120px;
  color: rgb(255, 72, 0);
  text-align: center;
  cursor: pointer;
`;

export const TotalPrice = styled.div`
  width: 100%;
  max-width: 1000px;
`;

export const EcommerceRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const EcommerceSku = styled.span`
  width: 120px;
  text-align: left;
  cursor: pointer;
`;

export const EcommerceSpace = styled.span`
  width: 10px;
  text-align: left;
  cursor: pointer;
`;
