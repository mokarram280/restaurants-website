import React from 'react';
import { ImageGallery } from './chain';
import { LuGrip } from "react-icons/lu";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import ImgCarousel from '../ImgCarousel';

const Magnificent = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <div className='w-[80%] mx-auto mt-32 relative'>
        <h2 className='text-4xl font-bold'>Discover our magnificent place in photos</h2>
        <p className='text-foreground max-w-[601px] mt-3'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing.</p>
        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-10'>
            {ImageGallery.map(({gallery},i)=>(
                <div key={i} className={`${i === 0 ? 'lg:col-span-2' : ''} ${ i === 0 ? 'lg:row-span-2' : ''}`}>
                    <img src={gallery} alt="" className='w-full h-full' />
                </div>
            ))}
        </div>
        <div className='my-12'>
        <Button onPress={onOpen} className='w-[227px] h-[47px] font-medium rounded-full bg-white flex items-center justify-center gap-3 absolute bottom-10 left-10'><LuGrip size={20} />View all photos (7)</Button>
        <Modal size={'4xl'} isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
              <ModalBody>
                <ImgCarousel />
              </ModalBody>
          </ModalContent>
        </Modal>
        </div>
    </div>
  );
};

export default Magnificent;