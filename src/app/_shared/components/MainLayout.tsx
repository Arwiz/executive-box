import React, {FunctionComponent, useState} from 'react';
import SideMenu from "./SideMenu";
import HeaderMenu from "./header";
import {
    Button, Form, FormControl, Nav, Navbar, NavDropdown, Container,
    Col, Row
} from "react-bootstrap";

interface MainProps {
}

const MainLayout: FunctionComponent<MainProps> = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const isSideMenuOpen = (flag: boolean) => {
        setIsOpen(flag);
    }
    return (<div className="container-fluid">
            <div className="row">
                <div className={ isOpen ? "w-25" : "w-10"}>
                    <SideMenu isOpen={isOpen} isSideMenuOpen={isSideMenuOpen}/>
                </div>
                <div className="flex-fill m-0">
                    <HeaderMenu  isOpen={isOpen} isSideMenuOpen={isSideMenuOpen}/>
                </div>
            </div>
        </div>
    );
}

export default MainLayout;
