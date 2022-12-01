import React from 'react';
import { Link } from 'react-router-dom';
import { useQueryForms } from '@ff-client/queries/forms';

import { Card, Subtitle, Title, Wrapper } from './index.styles';

export const List: React.FC = () => {
  const { data, isFetching, isError, error } = useQueryForms();

  if (!data && isFetching) {
    return <div>fetching forms...</div>;
  }

  if (isError) {
    return <div>ERROR {error.message}</div>;
  }

  return (
    <div>
      <h1>
        Forms
        {isFetching && <span>is fetching</span>}
      </h1>
      <Wrapper>
        <Card>
          <Title>
            <Link to="new">Create new Form</Link>
          </Title>
          <Subtitle>click me</Subtitle>
        </Card>

        {data.map((form) => (
          <Card key={form.id}>
            <Title>
              <Link to={`${form.id}`}>{form.properties.name}</Link>
            </Title>
            <Subtitle>{form.properties.handle}</Subtitle>
          </Card>
        ))}
      </Wrapper>
    </div>
  );
};