import React from 'react';
import { useState } from 'react';
import {BsFillCartDashFill ,BsWhatsapp ,BsFacebook,BsMessenger ,BsInstagram ,BsFillPersonFill, BsSearch} from 'react-icons/bs'
import {MdOutlineBookmarkBorder,MdOutlineFavoriteBorder} from 'react-icons/md'
import {SearchInput}  from "../../components/SearchInput.js"
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';

export default function Exam() {
    const [isopen , setisopen] = useState(false)
 
  const togglefunction = ()=> {
   setisopen(v => !v)
  }
    return (
      <div>
        <Navbar  light expand="md" className='px-0 bg-gray-50  '>
          <NavbarBrand href="/"><img src='/logo/images.png' className='w-12 h-12 md:w-20 md:h-20' alt="logo" /></NavbarBrand>
          <NavbarBrand href="/" className='md:hidden'>
          <SearchInput value={<BsSearch className='h-6'/>} className={"shadow-md h-full   flex relative left-15 w-[50vw] lg:w-[350px] placeholder:text-[4px]"}/> 
          </NavbarBrand>
          <NavbarToggler onClick={togglefunction}  />
          <Collapse isOpen={isopen} navbar className=''>
           <SearchInput value={<BsSearch className='h-6'/>} className={"shadow-md h-full  hidden md:flex mt-2 relative left-15 w-[240px] lg:w-[350px] "}/> 
            <Nav className="ml-auto " navbar>
            
              <UncontrolledDropdown nav inNavbar className=''>
                <DropdownToggle nav caret className='secondary'>
                Communication
                </DropdownToggle>
                <DropdownMenu end className='w-40'>
                <DropdownItem   className='flex items-center justify-around '>
                     <BsFillPersonFill className='ml-2'/> Your Profaile 
                  </DropdownItem>
                  <DropdownItem className='flex items-center justify-around '>
                    <BsWhatsapp />Whatsapp 
                  </DropdownItem>
                  <DropdownItem className='flex items-center justify-around '>
                  <BsFacebook /> FaceBook
                  </DropdownItem>
                  <DropdownItem  className='flex items-center justify-around '>
                  <BsInstagram />Instagram
                  </DropdownItem>
                  <DropdownItem   className='flex items-center justify-around '>
                  <BsMessenger />Massenger
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className='opacity-0 md:hidden'>
               ...
              </NavItem>
              <NavItem className='mx-3 flex items-center  secondary  '>
                Order<MdOutlineBookmarkBorder className='ml-2' />
              </NavItem>
              <NavItem className='opacity-0 md:hidden'>
               ...
              </NavItem>
              <NavItem className='mx-3 flex items-center secondary  '>
                 Cart<BsFillCartDashFill className='ml-2'  />
              </NavItem>
              <NavItem className='opacity-0 md:hidden'>
               ...
              </NavItem>
              <NavItem className='mx-3 flex items-center secondary  '>
                Favorite <MdOutlineFavoriteBorder className='ml-2 '  /> 
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  
}