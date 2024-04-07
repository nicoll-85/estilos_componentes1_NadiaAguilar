import react from "react";
import styled from "styled-components";
import Button from "./assets/components/Button";
import GridContainer from "./assets/components/GridContainer";
import "./App.css";

function App() {
  return (
    <>
      <h1>Estilos de componentes 1</h1>
      <hr />
      <h2>Ejercicio 1</h2>
      <div>
        <GridContainer>
          <Button>Default</Button>
          <Button type="success">Success</Button>
          <Button type="error">Error</Button>
          <Button type="warning">Warning</Button>
          <Button type="info">Info</Button>
        </GridContainer>
      </div>
    </>
  );
}

export default App;
