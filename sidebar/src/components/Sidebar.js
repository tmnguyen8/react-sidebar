import React, {useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import {SidebarData} from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
    background: #15171C;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const SideBarNav = styled.nav`
    background: #15171C;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar? '0': '-100%')};
    transition: 350ms;
    z-index: 10;
`

const SideBarWrap = styled.div`
    width: 100%;
`

const Sidebar = () => {

    const [sidebar, setsidebar] = useState(false);

    const showSideBar = () => setsidebar(!sidebar);

    return (
        <div>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSideBar}/>
                    </NavIcon>
                </Nav>
                <SideBarNav sidebar={sidebar}>
                    <SideBarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose onClick={showSideBar}/>
                        </NavIcon>
                        {SidebarData.map((item, index) => {
                            return (
                                <SubMenu item = {item} key={index}/>
                            )
                        })}
                    </SideBarWrap>
                </SideBarNav>
            </IconContext.Provider>
        </div>
        
    )
}

export default Sidebar
