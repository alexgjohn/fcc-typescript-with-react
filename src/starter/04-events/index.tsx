import { useState } from "react";

type Person = {
  name: string;
}

function Component() {

  const [text, setText] = useState('');
  const [email, setEmail] = useState('');


  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // console.log(formData);
    // const formData = new FormData(e.target as HTMLFormElement);

    const data = Object.fromEntries(formData);
    // console.log(data)

    const text = formData.get("text") as string;
    // const person: Person = { name: text };
    const person: Person = { name: data.text as string };
  }

  return (
    <section>
      <h2>Events example</h2>
      <form
        className="form"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          className="form-input mb-1"
          value={text}
          name="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-input mb-1"
          value={email}
          name="email"
          onChange={handleEmailChange}
        />
        <button type="submit" className="btn btn-block">Submit</button>
      </form>
    </section>
  );
}
export default Component;
