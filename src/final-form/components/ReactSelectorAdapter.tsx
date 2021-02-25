import React from 'react';
import Select from 'react-select';

const ReactSelectAdapter = ({ input, ...rest }) => {
  const selectedOption = rest.options.find((option) => input.value === option.value);
  return (
    <Select
      {...input}
      {...rest}
      value={selectedOption}
      getOptionValue={(option) => option.value}
      onChange={(selected) => input.onChange(selected?.value)}
    />
  );
};

export default ReactSelectAdapter;
