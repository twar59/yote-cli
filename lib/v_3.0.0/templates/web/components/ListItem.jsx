

// import primary libraries
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import global components

// import services
import { use__PascalName__FromMap } from '../__camelName__Service';

const __PascalName__ListItem = ({ id }) => {
  const __camelName__ = use__PascalName__FromMap(id);

  if(!__camelName__) return <Skeleton />;
  return (
    <li className="list-none p-2 block">
      <Link to={`/__kebabNamePlural__/${__camelName__?._id}`}>{__camelName__?.name}</Link>
    </li>
  )
}

// custom loading skeleton for this component, by defining it right here we can keep it synced with any changes we make to the actual component above
// Use placeholder text of the same length as the expected content to avoid layout shifting
const Skeleton = () => {
  return (
    <li className="animate-pulse list-none p-2 block cursor-default select-none">
      <p className='bg-gray-600 text-gray-600 w-fit' href="#"> __PascalName__ Name</p>
    </li>
  )
}
// add the skeleton to the component so we can access it in other components (__PascalName__List in this case)
__PascalName__ListItem.Skeleton = Skeleton;

__PascalName__ListItem.propTypes = {
  id: PropTypes.string.isRequired
}

export default __PascalName__ListItem;