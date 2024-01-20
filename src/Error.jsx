import React from 'react';

import Header from './Header'

export default function Error() {
  return  (
    <div style={{ position: 'absolute', top: 0, left: 20, right: 20 }}>
    <Header/>
      <h1>Oups! Something went wrong</h1>
</div>
    
    ) ;
    
};