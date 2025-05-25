import styles from "./Loader.module.css"
import { Row, Col } from "react-bootstrap"

const Loader = () => {
    return (
        <div>
            <Row className="m-5">
                <Col className="col-6">
                    <Row className="mb-5">
                        <span className={styles.loader}></span>
                    </Row>
                    <Row>
                        <h5>Cargando...</h5>
                    </Row>
                </Col>

            </Row>
        </div>
    )
}

export default Loader