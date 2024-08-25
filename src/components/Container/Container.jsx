// src/components/Container/Container.jsx
import React from 'react';

export function Container({ children }) {
    return (
        <div className="container mx-auto">
            {children}
        </div>
    );
}
