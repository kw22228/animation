import * as s from './Product.style';

const Product = ({ img, title = '' }) => {
    return (
        <s.Item //
            initial={{ filter: 'grayscale(100%)' }}
            whileInView={{ filter: 'grayscale(0%)' }} //viewport안에 들어오는것들
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 'all' }} //once true일시 한번만 실행(되돌아와도 상태유지)
        >
            <img src={img} alt={title} />
            <h1>{title}</h1>
        </s.Item>
    );
};
export default Product;
