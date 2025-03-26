import React from 'react';
import { features } from '../constant/data';

const Cards = () => {
  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">

      {/* Heading Section */}
      <div className="text-center mb-12">
        <p className="text-xl font-semibold uppercase tracking-wide text-gray-800">
          WHY CHOOSE AU SHOP?
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
          Sparkles and Joy, Now Made Hassle-Free!
        </h2>
      </div>

      {/* Features Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2"
          >
            <feature.icon className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Cards;
