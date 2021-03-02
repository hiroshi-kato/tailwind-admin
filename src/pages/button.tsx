import Button from 'components/Button';
import { VFC } from 'react';

const ButtonPage: VFC = () => (
  <div className="p-4">
    <h1 className="text-4xl">Button</h1>
    <main className="p-4">
      <div>
        <h2 className="text-2xl">small</h2>
        <Button onClick={() => ''} size="small">
          Submit
        </Button>
      </div>
      <div>
        <h2 className="text-2xl">medium</h2>
        <Button onClick={() => ''}>Submit</Button>
      </div>
      <div>
        <h2 className="text-2xl">large</h2>
        <Button onClick={() => ''} size="large">
          Submit
        </Button>
      </div>
      <div>
        <h2 className="text-2xl">primary</h2>
        <Button onClick={() => ''} color="primary">
          Submit
        </Button>
      </div>
      <div>
        <h2 className="text-2xl">secondary</h2>
        <Button onClick={() => ''} color="secondary">
          Submit
        </Button>
      </div>
    </main>
  </div>
);

export default ButtonPage;
