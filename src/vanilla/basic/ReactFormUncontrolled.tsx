import React from 'react';

const ReactForm = () => {
  const firstNameRef = React.createRef<HTMLInputElement>();
  const lastNameRef = React.createRef<HTMLInputElement>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formState = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
    };

    alert(JSON.stringify(formState, null, 2));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input type="text" id="firstName" name="firstName" ref={firstNameRef} defaultValue="" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" id="lastName" name="lastName" ref={lastNameRef} defaultValue="" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReactForm;
