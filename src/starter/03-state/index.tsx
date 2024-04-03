import { useState } from "react";


type Link = {
  id: number;
  url: string;
  text: string;
}

const navLinks: Link[] = [
  {
    id: 1,
    url: "some url",
    text: "some text",
  },
  {
    id: 2,
    url: "some url",
    text: "some text",
  },
  {
    id: 3,
    url: "some url",
    text: "some text",
  },
]

function Component() {

  //by default, ts will infer the type when using useState
  const [text, setText] = useState('click me')
  const [number, setNumber] = useState(33);
  //however, this won't work with something like an empty array, which will default to type never
  //this is why you must use the generic here
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);

  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button className="btn btn-center" onClick={() => {
        setText('clicked!');
        setNumber(number + 1);
        setList([...list, 'hello']);
        setLinks([...links, { id: 4, url: "hello", text: "wheee" }])
      }}>
        {text}
      </button>
    </div>
  );
}
export default Component;
