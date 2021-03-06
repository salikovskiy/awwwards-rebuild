import styled from 'styled-components'

export const Nav = styled.div`
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     display: block;
     background: ${props => props.theme.red};
     color: #000;
     z-index: 100;
     overflow: hidden;
`

export const NavHeader = styled.div`
     top: 72px;
     position: relative;
     h2 {
          color: ${props => props.theme};
     }
`

export const ClosedNav = styled.div`
     button {
          transform-origin: center;
          border: none;
          padding: 20px;
          background: none;
          outline: none;
          span {
               width: 36px;
               height: 8px;
               display: block;
               background: ${props => props.theme};
               margin: 8px;
          }
     }
`

export const NavList = styled.div`
     height: 100%;
     width: 100%;
     display: flex;
     align-items: center;
     ul {
          padding: 0;
          li {
               list-style: none;
               font-size: 3rem;
               text-tranform: uppercase;
               font-weight: 900;
               height: 96px;
               line-height: 96px;
               overflow: hidden;
               .link {
                    color: ${props => props.background};       
                    position: relative;
                    display: flex;
                    align-items: center;
                    .arrow {
                         height: 76px;
                         margin-right: 8px;
                    }        
               }
          }
     }
`

export const NavFooter = styled.div``