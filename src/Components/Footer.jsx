import React from 'react';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { GoChevronDown } from "react-icons/go";

const Footer = () => {
  return (
    <footer className='border-t border-t-foreground'>
        <div className='flex flex-col md:flex-row justify-evenly text-center md:text-start gap-4 mt-6 mb-16'>
            <div className='space-y-2'>
            <h4 className='text-xl font-extrabold'>About</h4>
            <ul className='text-sm text-foreground space-y-3'>
                <li><a>About MyFeedback</a></li>
                <li><a>Investor Relations</a></li>
            </ul>
            </div>
            <div className='space-y-2'>
                <h4 className='text-xl font-extrabold'>MyFeedback</h4>
                <ul className='text-sm text-foreground space-y-3'>
                    <li><a>MyFeedback for business</a></li>
                    <li><a>Collections</a></li>
                    <li><a>Talk</a></li>
                    <li><a>Events</a></li>
                    <li><a>MyFeedback blog</a></li>
                    <li><a>Support</a></li>
                    <li><a>Developers</a></li>
                </ul>
            </div>
            <div className='space-y-4'>
            <div className='space-y-2'>
                <h4 className='text-xl font-extrabold'>Languages</h4>
                <div className='text-sm text-foreground'>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant='none'>English <GoChevronDown /></Button>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem>Bangla</DropdownItem>
                            <DropdownItem>Arabic</DropdownItem>
                            <DropdownItem>Hindi</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <div className='space-y-2'>
                <h4 className='text-xl font-extrabold'>Countries</h4>
                <div className='text-sm text-foreground'>
                <Dropdown>
                        <DropdownTrigger>
                            <Button variant='none'>Singapour <GoChevronDown /></Button> 
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem>Canada</DropdownItem>
                            <DropdownItem>kuala lumpur</DropdownItem>
                            <DropdownItem>New York</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            </div>
        </div>
        <p className='text-center text-sm font-bold px-12 py-7'>Copyright &copy; Septembre 2024 myfeedback, designed by scott</p>
    </footer>
  );
};

export default Footer;