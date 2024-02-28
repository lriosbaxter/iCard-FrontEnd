import React from 'react'
import "./SideMenu.scss"
import { Menu, Icon } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';

export function SideMenu(props) {
    const { children } = props;
    const { pathname } = useLocation();
  return (
    <div className='side_menu_admin'>
        <MenuLeft pathname={pathname}/>
        <div className='content'>{children}</div>
    </div>
  )
}

function MenuLeft(props) {
    const { pathname } = props;

    return (
        <Menu className='side' fixed='left' borderless vertical >
            <Menu.Item as={Link} to={'admin/'} active={pathname === '/admin'}>
                <Icon name='home'/>Scripts
            </Menu.Item>
            <Menu.Item as={Link} to={'admin/users/'} active={pathname === '/admin/users'}>
                <Icon name=''/>Users
            </Menu.Item>
            <Menu.Item as={Link} to={'/bgp'} active={pathname === '/bgp'}>
                <Icon name=''/>BGP Script
            </Menu.Item>
            <Menu.Item as={Link} to={'/nwa-scripts'} active={pathname === '/nwa-scripts'}>
                <Icon name=''/>NWA Scripts
            </Menu.Item>
            <Menu.Item as={Link} to={'/sw-scripts'} active={pathname === '/sw-scripts'}>
                <Icon name=''/>SW Scripts
            </Menu.Item>
        </Menu>
    )
}
