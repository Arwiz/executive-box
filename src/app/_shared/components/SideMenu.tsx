import React, {useState} from 'react';


const SideMenu = (props: any)=> {

    const toggleNavbar =()=> {
        console.log('clickeed Me ');
    }

    return ( <div className="app-background-color cr-sidebar-close vh-100" >
            This Side Menu {props.isOpen ? 'Open': 'Close'}
        {/*<div className={ props.isOpen ? "app-background-color cr-  vh-100"  :  "app-background-color w-100 vh-100" }>*/}
        {/*    This Side Menu {props.isOpen ? 'Open': 'Close'}*/}
    </div>);
}
export default SideMenu;
