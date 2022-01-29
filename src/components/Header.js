import React, { useState, useEffect } from 'react';

const Header = (props) => {
  const [title, setTitle] = useState('Hello!');
  const updateTitle = () => {
    if (props.title) {
      setTitle(props.title);
    }
  };
  useEffect(updateTitle, []);
  return <h1>{title}</h1>;
};
export default Header;
