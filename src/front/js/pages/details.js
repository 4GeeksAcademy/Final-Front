import React, { useEffect, useContext, useState } from "react";
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext.js";
import { ModalAlquilar } from "../component/modalalquilar.js";
import "../../styles/home.css";

export const Details = () => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);
    const params = useParams();

    const addOrRemove = () => {
        if (!isFavorite) {
            actions.addFav(store.details.id)
        } else {
            actions.removeFav(store.details.id)
        }
    }

    useEffect(() => {
        if (store.favorites.length !== 0) {
            const isFav = store.favorites.some((favorite) => favorite.id == params.id);
            setIsFavorite(isFav);
        }
    }, [store.favorites]);

    useEffect(() => {
        actions.getDetails(params.id);
        actions.getVehicles();
    }, []);

    return (
        <>
            <div className="container justify-content-center">
                <div id="carouselExample" className="carousel slide mt-5 justify-content-center align-items-center">
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_700/MjAxNzE0ODI3NTE1NjY4MjQ0/how-to-buy-cars-cheaply-and-sell-them-at-a-profit.jpg" className="d-block w-100 text-center" alt="..." />
                        </div>
                        <div className="carousel-item active">
                            <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=road-car-vehicle-170811.jpg&fm=jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item active">
                            <img src="https://techservicecenter.nl/wp-content/uploads/2022/11/Hoog-olieverbruik-Audi-A5.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <>
                <div className="container justify-content-center">
                    <div className="principal mb-5 mx-3 me-3 mt-5 border-top border-bottom">
                        <div className="d-flex mt-3 rounded-end justify-content-between">
                            <h1 className="ms-3">{store.details.marca_modelo?.toUpperCase()}</h1>
                            <button className={`corazon btn btn-outline-success`} onClick={addOrRemove}>
                                <i className={`fa-heart ${isFavorite ? "fas text-success" : "far"}`}></i>
                            </button>
                        </div>
                        <div className="d-flex pb-2 mt-5">
                            <div className="propiedadVehiculo mt-4">
                                <h6>
                                    MATRICULA
                                </h6>
                                <p>
                                    {store.details.matricula?.toUpperCase()}
                                </p>
                            </div>
                            <div className="propiedadVehiculo mt-4">
                                <h6>
                                    TIPO DE MOTOR
                                </h6>
                                <p>
                                    {store.details.motor?.toUpperCase()}
                                </p>
                            </div>
                            <div className=" propiedadVehiculo mt-4 ">
                                <h6>
                                    TIPO DE CAMBIO
                                </h6>
                                <p>
                                    {store.details.tipo_cambio?.toUpperCase()}
                                </p>
                            </div>
                            <div className="propiedadVehiculo mt-4">
                                <h6>
                                    N° ASIENTOS
                                </h6>
                                <p>
                                    {store.details.asientos?.toUpperCase()}
                                </p>
                            </div>
                            <div className="propiedadVehiculo mt-4">
                                <h6>
                                    PRECIO POR DIA
                                </h6>
                                <p>
                                    {store.details.precio?.toUpperCase()}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end mt-auto mb-5 pb-5">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <ModalAlquilar />
                    </div>
                </div>
            </>
        </>
    );
};