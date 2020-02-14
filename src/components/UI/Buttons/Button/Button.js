import React from 'react';

const button = props => (
  <a
    href={props.link}
    className="bg-black text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
    type="button"
    rel="noopener noreferrer"
    target="_blank"
    style={{ transition: 'all .15s ease' }}>
    {props.children}
  </a>
)

export default button;