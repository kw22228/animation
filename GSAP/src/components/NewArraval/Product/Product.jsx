import * as s from './Product.style';

const Product = ({ img, title = '' }) => {
    return (
        <s.Item>
            <img src={img} alt={title} />
            <h1>{title}</h1>
        </s.Item>
    );
};
export default Product;
