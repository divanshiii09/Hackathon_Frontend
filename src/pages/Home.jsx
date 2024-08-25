// src/pages/Home.jsx
import React from 'react';
import { Container } from '../components/index'; // Import the Container component

function Home() {
    return (
        <div className='w-full py-8 mt-4 text-center'>
            <Container>
                <div className='flex flex-wrap'>
                    <div className='p-2 w-full'>
                        <h1 className='text-2xl font-bold hover:text-gray-500'>
                            Login to access more features
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home;
