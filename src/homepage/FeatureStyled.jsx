import { Row } from "react-bootstrap";
import { styled } from "styled-components";

const FeatureStyled = styled(Row)`
    margin-top:50px;
    padding:5px 60px;
    h1{
        font-style: Bold;
        text-align:center;
    }
    div.card{
        width:350px;
        margin-right:20px;
        .card-img{
            height:250px;
        }
    }

`;

export default FeatureStyled;  