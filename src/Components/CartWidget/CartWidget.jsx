import Badge from 'react-bootstrap/Badge';

function CartWidget () {
    return <div>
        <i className="fa-solid fa-cart-shopping" style={{ color: 'rgb(255, 255, 255)' }}></i>
        <Badge bg="secondary">0</Badge>
    </div>
}

export default CartWidget;