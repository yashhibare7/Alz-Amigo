import React from 'react';
import Image from 'next/image';

export default function Project() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5 d-flex justify-content-center'>
                <Image src={'/images/image_01.svg'} height={260} width={260} alt='Logo | In-Memory' />
            </div>

            <div className='container-fluid w-75'>
                <h3 className='text-center'>
                    A grain of sand
                </h3>
                <p className='text-center'>
                    'In Memory' is a project that hosts a series of memory agility games specially designed for individuals facing Alzheimer's disease. These games not only offer entertainment but also exercise and stimulate cognitive functions in a fun way. Anyone can access these games on a variety of devices, adapting them to their comfort and schedule. 'In Memory' not only enriches the lives of patients but also provides support to caregivers. A project that honors memory and promotes quality of life.
                </p>
            </div>
        </React.Fragment>
    );
};
