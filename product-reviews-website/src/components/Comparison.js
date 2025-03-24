import React from 'react';

const Comparison = ({ products }) => {
    return (
        <div className="comparison">
            <h2>Product Comparison</h2>
            <table>
                <thead>
                    <tr>
                        <th>Feature</th>
                        {products.map(product => (
                            <th key={product.id}>{product.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {products[0].features.map((feature, index) => (
                        <tr key={index}>
                            <td>{feature.name}</td>
                            {products.map(product => (
                                <td key={product.id}>{product.features[index].value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Comparison;