import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Form, Row, Col, Button, } from "react-bootstrap";
import { useParams } from "react-router-dom";

const EditClasses = () => {
    const { actions, store } = useContext(Context);
    const params = useParams()

    useEffect(() => {

    }, [])

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        dateTime_class: "",
        start_time: "",
        duration_minutes: "",
        available_slots: ""

    });

    const handleChange = (e) => {

        setFormData({ ...formData, [name]: value });

    };

    const handleSubmit = () => {

    }
    console.log(store.currentEdit)
    return (

        <div>Componente de Edicion de Clases de entrenamiento
            <h3>{store.currentEdit.name}</h3>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Nombre de la clase</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" name="name"
                                 value={formData.name} onChange={handleChange}
                                required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="text" placeholder="Descripción" name="description"
                                 value={formData.description} onChange={handleChange}
                                required />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">

                    <Col>
                        <Form.Group>
                            <Form.Label>Fecha y hora de inicio</Form.Label>
                            <Form.Control type="datetime-local" name="dateTime_class"
                                 value={formData.dateTime_class} onChange={handleChange}
                                required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Hora de inicio</Form.Label>
                            <Form.Control type="time" name="start_time"
                                  value={formData.start_time} onChange={handleChange}
                                required />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Duración (minutos)</Form.Label>
                            <Form.Control type="number" name="duration_minutes"
                                  value={formData.duration_minutes} onChange={handleChange}
                                required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Plazas disponibles</Form.Label>
                            <Form.Control type="number" name="available_slots"
                                 value={formData.available_slots} onChange={handleChange}
                                required />
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="primary" type="submit">Crear Clase(s)</Button>
            </Form>

        </div>
    )
}

export default EditClasses;
