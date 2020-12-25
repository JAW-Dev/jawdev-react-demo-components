// Import packages
import React from 'react';
import styled from 'styled-components';

// Import modules
import { parseTable, addCellClasses } from './../modules/RerenderTableCell';

interface Props {
  table?: string,
  name?: string
}

const StyledDMPTable = styled.section`
  padding: 1.5rem;
  margin: 3.5rem 0 0;
  box-sizing: border-box;
  width: 100%;
`;

const StyledDMPTableWrap = styled.div`
  padding: 0.5rem;
  margin: 1rem;
  > table {
    border-collapse: collapse;
  }
  > table > thead > tr > .dmp__table-th,
  > table > tbody > tr > .dmp__table-td {
    box-sizing: border-box;
    border: 1px solid rgb(179, 179, 179);
    padding: 1rem 0.5rem; hyphens: auto;
  }
  > table > thead > tr > .dmp__table-th-2,
  > table > tbody > tr > .dmp__table-td-2,
  > table > thead > tr > .dmp__table-th-4,
  > table > tbody > tr > .dmp__table-td-4 {
    display: none;
  }
  @media (min-width: 380px) {
    > table > thead > tr > .dmp__table-th-4,
    > table > tbody > tr > .dmp__table-td-4 {
      display: table-cell;
    }
  }
  @media (min-width: 600px) {
    > table > thead > tr > .dmp__table-th-2,
    > table > tbody > tr > .dmp__table-td-2 {
      display: table-cell;
    }
  }
`;

const DMPTable: React.FC<Props> = ({ table, name }) => {
  const html: string = parseTable(table!);

  addCellClasses();

  return (
    <StyledDMPTable className='dmp__table'>
      <h2>{name}</h2>
      <StyledDMPTableWrap>
        {html}
      </StyledDMPTableWrap>
    </StyledDMPTable>
  );
};

export default DMPTable;
