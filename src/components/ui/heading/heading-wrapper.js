import styled from "styled-components"
import { Heading as rHeading } from "rebass"

export const Heading = styled(rHeading)`
  &&& {
    display: flex;
    justify-content: center;
    font-size: 30px;
    margin-bottom: 1.45rem;
    padding: 20px;
    color: white;
    background: rebeccapurple;
  }
`
