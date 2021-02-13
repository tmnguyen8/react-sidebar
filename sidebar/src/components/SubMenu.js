import React, { useState } from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const SideBarLink = styled(Link)`
    display: flex;
    color: white;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`

const SideBarLabel = styled.span`
    margin-left: 16px;
`

const DropDownLink = styled(Link)`
    background: #414757;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 18px;

    &:hover {
        background: #632ce4;
        cursor: pointer
    }
`

const SubMenu = ({item}) => {
    const [subNav, setSubNav] = useState(false);

    const showSubNav = () => setSubNav(!subNav)

    return (
        <div>
            <SideBarLink to={item.path} onClick={item.subNav && showSubNav}>
                <div>
                    {item.icon}
                    <SideBarLabel>{item.title}</SideBarLabel>
                </div>
                <div>
                    {(item.subNav && subNav)? (item.iconOpened): (item.subNav? item.iconClosed : null)}
                </div>
            </SideBarLink>
            {subNav && item.subNav.map((item, index) => {
                return (
                    <DropDownLink 
                        to={item.path}
                        key={index}
                    >
                        {item.icon}
                        <SideBarLabel>{item.title}</SideBarLabel>
                    </DropDownLink>
                )
            })}
        </div>
    )
}

export default SubMenu
