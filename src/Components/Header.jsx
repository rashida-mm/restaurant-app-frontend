import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
    return (
        <div>
            <MDBNavbar light bgColor='light' className='text-dark'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href=''>
                        <img
                        src='https://ps.w.org/wp-cafe/assets/icon-256x256.gif?rev=2701311'
                        height='50px'    
                        alt=''
                        loading='lazy'
                        />
                        Eat Advisor
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header