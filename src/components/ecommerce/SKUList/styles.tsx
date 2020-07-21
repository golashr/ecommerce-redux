import styled from 'styled-components';

export const AppHeader = styled.h1`
  background-color: #5735d3;
  padding: 20px;
  text-align: left;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 2;
  min-height: 60px;
`;

export const Heading = styled.h1`
  color: white;
`;

export const InputBox = styled.div`
  justify-content: center;
`;

export const InputText = styled.input`
  width: 50%;
  margin: 0 20px;
  text-align: center;
  border-radius: 2px;
  border: none;
  padding: 6px;
`;

export const ThumbnailGallery = styled.div`
  width: 100%;
  border: 1ps solid yellow;
  text-align: center;
  position: relative;
  padding: 30px;
`;
