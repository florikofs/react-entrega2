import Button from 'react-bootstrap/Button';

const ButtonMain = ({ label, ...rest }) => {
    return (
        <div>
            <Button variant="primary" {...rest}>{label}</Button>
        </div>
    )
}

export default ButtonMain