import { Row } from "react-bootstrap";
import { styled } from "styled-components";

const CategoryStyled= styled(Row)`
    margin-top: 50px;
    padding:10px 40px;
    display:flex;
    flex-wrap: wrap;
    h1{
        font-style: Bold;
        text-align:center;
    }
    div.card{
        width:280px;
        height:auto;
        margin-right:20px;
        .card-img{
            width:max-content;
            height:100px;
        }
        a{
            text-decoration: none;
        }
    }
`;

export default CategoryStyled;