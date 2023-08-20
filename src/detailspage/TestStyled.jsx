import { Row } from "react-bootstrap";
import { styled } from "styled-components";

const TestStyled = styled(Row)`
    padding: 40px;
    div.card{
        width:150px;
        margin-right:20px;
        .card-img{
            height:80px;
        }
        button{
            height:32px;
            border-radius:25px;
            margin-bottom: 5px;
            text-align: center;
            padding:2px 8px;
        }
    }
`;

export default TestStyled;