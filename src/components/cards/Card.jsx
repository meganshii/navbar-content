// Card.js
import React from 'react';

const Card = ({ id, title, description, imageUrl, checked, onChange }) => {
  return (
    <>
    <input
      type="radio"
      name="slide"
      id={id}
      className="hidden"
      checked={checked}
      onChange={() => onChange(id)}
    />
    <label
      htmlFor={id}
      className={`card relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-600 ease-in-out shadow-lg hover:w-96 ${
        checked ? 'w-96' : 'w-20'
      }`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="row flex items-end text-white p-4">
        <div className="icon bg-gray-900 text-white rounded-full w-12 h-12 flex items-center justify-center m-4">
          {id}
        </div>
        <div
          className={`description flex flex-col justify-center overflow-hidden h-20 w-full transform transition-all duration-300 delay-300 ease ${
            checked ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h4 className="uppercase">{title}</h4>
          <p className="text-gray-400 pt-1">{description}</p>
        </div>
      </div>
    </label>
  </>
  );
};

export default Card;
