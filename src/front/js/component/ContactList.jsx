import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

export const ContactList = () => {
    // 1. Desestructuro un objeto y obtengo las claves store y actions
    // 2. Utilizando el hooks useContext para extraer esas claves del objeto Context definido en el archivo appContext.js
    // 3. El context está obteniendo los datos store y action del archivo flux.js

    const {store, actions} = useContext(Context);

    return (
        <div className="container">
            <h1>Este es el contact list</h1>
            <p>{store.user}</p>
        </div>
    )
}