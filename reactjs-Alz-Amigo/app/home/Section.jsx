import React from 'react';
import Image from 'next/image';

export default function Section() {
    return (
        <React.Fragment>
            <div className='container mt-5 w-75'>
                <hr />
                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <Image src={'/images/image_04.svg'} width={250} height={250} alt='Loading... | @bulssola' />
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h3>What is Alzheimer's?</h3>
                        <p>
                            Alzheimer's disease belongs to the group of disorders known as dementias, which are characterized by the progressive loss of cognitive functions. It manifests through symptoms such as short-term memory loss, confusion, difficulty in performing everyday tasks, language impairment, and loss of orientation in time and space. As it progresses, the disease can also impact personality and behavior, leading to emotional and behavioral changes.
                        </p>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-md-6 order-md-2 d-flex justify-content-center'>
                        <Image src={'/images/image_06.svg'} width={250} height={250} alt='Loading... | @bulssola' />
                    </div>
                    <div className='col-md-6 mt-4 order-md-1'>
                        <h3>Its Causes</h3>
                        <p>
                            Risk factors include advanced age, family history of Alzheimer's, presence of the APOE ε4 gene, previous brain injuries, and certain cardiovascular and metabolic diseases. The exact cause of Alzheimer's disease is not yet fully understood, but it is believed that a combination of genetic, environmental, and lifestyle factors may contribute to its development. It is characterized by the abnormal accumulation of two proteins in the brain: beta-amyloid plaques and tau protein tangles. These accumulations damage nerve cells and hinder communication between them, eventually leading to cell death and loss of brain tissue.
                        </p>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <Image src={'/images/image_02.svg'} width={250} height={250} alt='Loading... | @bulssola' />
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h3>Cure, Medicine, Treatments?</h3>
                        <p>
                            Unfortunately, there is no definitive cure for Alzheimer's disease. Available treatments focus on symptom management and slowing its progression. Some medications, such as cholinesterase inhibitors and memantine, can help improve cognitive function and quality of life during the early and moderate stages of the disease.
                        </p>
                    </div>
                </div>
                <hr />
            </div>

            <div className='container-fluid mt-5 w-75'>
                <div className='container-fluid'>
                    <h2 className='text-center'>
                        In Conclusion
                    </h2>
                    <p className='text-center'>
                        Alzheimer's disease poses profound emotional challenges for both patients and their loved ones. Although there is currently no definitive cure, scientific and medical advancements continue to offer hope for a future in which we can better understand and more effectively treat this devastating disease. Investment in research and awareness about Alzheimer's are essential for improving the quality of life for those affected and their caregivers, and for moving towards more effective solutions in the fight against this neurodegenerative disease.
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};
