import React, { useCallback } from 'react';
import { MDBContainer} from 'mdb-react-ui-kit';
import { MDBDataTable } from 'mdbreact';

const basicData = {
    columns: ['FullName', 'MotherName', 'Status', 'Nationality', 'FamilyStatus', 'Gender','Edit/Delete'],
    rows: [
      ['Rasha Sinno', 'Manal Saab', 'Nothing', 'Lebanese', 'Single', 'Female','Edit/Delete'],
      ['Joey Yazbeck', 'Marie Sargi', 'Wanted', 'Lebanese', 'Married', 'Male','Edit/Delete'],
      ['Marc Srouji', 'Jaqueline Nakad', 'Arrested', 'Lebanese', 'Single', 'Male','Edit/Delete'],
    ],
};

export default function Search() {
  const search = useCallback((value) => {
    let [phrase, columns] = value.split(' in:').map((str) => str.trim());

    if (columns) {
      columns = columns.split(',').map((str) => str.toLowerCase().trim());
    }

    return {phrase, columns};
  }, []);

  return (
    <MDBContainer className='mt-5'>
      <MDBDataTable data={basicData} advancedSearch={search} />
    </MDBContainer>
  );
}