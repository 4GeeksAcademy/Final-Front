import React, { useState, useEffect, useContext } from "react"; // Importación de React y algunos hooks
import { Link } from "react-router-dom"; // Importación de Link para la navegación
import { Context } from "../store/appContext"; // Importación del contexto
import styles from "./Home.module.css"; // Importación de estilos CSS
import Menuadmin from "../component/Menuadmin.jsx";





const Homeadmin = () => {
  return (
    <div>
      <header>
        <h1 className={styles.headerTitle}>Welcome User Admin</h1>
      </header>
      
      <Menuadmin/>  
       
      
    </div>
  );
};

export default Homeadmin;
