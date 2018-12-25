import React from 'react';

const NestedPage = ({match}) => (
    <div><h3>Welcome to the Nested route page id is  {match.params.id}!!</h3></div>
)
export default NestedPage;