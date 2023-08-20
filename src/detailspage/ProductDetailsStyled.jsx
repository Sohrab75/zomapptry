import { Row } from "react-bootstrap";
import { styled } from "styled-components";

const ProductDetailsStyled = styled(Row)`
    .details-column{
        border:1px solid black;
        .wrapper{
            display:flex;
            button{
                height:32px;
                margin:5px;
            }
        }
        div.card{
            width:200px;
            margin:10px;
        }
    }
`;
export default ProductDetailsStyled;