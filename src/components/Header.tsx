import React, { useState, useEffect } from 'react';
interface IHeader {
  title: String
}
const Header = (props: IHeader) => {
  const [title, setTitle] = useState<String>('Hello!');
  const updateTitle = () => {
    if (props.title) {
      setTitle(props.title);
    }
  };
  useEffect(updateTitle, []);
  return <h1>{title}</h1>;
};
export default Header;
