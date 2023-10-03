import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Data from "./data.json";
import "../public/css/bootstrap.css";

const Footer = () => {
    return (
        <footer className="bg-white text-black d-flex justify-content-center py-4 mt-5">
            <div className="container">
                <div className="row">
                    <hr />
                    <br /><br />
                    <div className="container-fluid d-flex justify-content-center w-75">
                        <Image src={Data.logo} height={70} width={70} alt="Logo | In-Memory" />
                    </div>

                    <h5 className="text-center mt-2">In-Memory</h5>

                    <div className="col-md-6 text-md-left mb-3 mb-md-0 mt-4 justify-content-center">
                        <h5 className='text-center'>Creator</h5>
                        <div className='d-flex justify-content-center'>
                            <Link href="https://bulssola.vercel.app/" passHref legacyBehavior target='_blank'>
                                m0rniac
                            </Link>
                        </div>
                    </div>

                    <div className='container-fluid d-flex justify-content-end'>
                        <a href="#top">Back to top</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;