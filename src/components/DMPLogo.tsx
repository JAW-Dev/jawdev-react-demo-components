// Import packages
import React from 'react';
import styled from 'styled-components';

interface Props {
  logo?: string
}

const StyledDMPLogo = styled.h1`
  font-size: 1.2rem;
  margin-right: 1rem;
`;

const DMPLogo: React.FC<Props> = ({ logo }) => {
  let name: string = logo!.replace(/-/g, ' ').toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');

  if (name.includes('Jawdev')) {
    name = name.replace('Jawdev', '@JAWDev');
  }

  if (name.includes('Example')) {
    name = name.replace('Example', '');
  }

  return (
    <StyledDMPLogo className='dmp__logo'>
      {name}
    </StyledDMPLogo>
  );
};

export default DMPLogo;
