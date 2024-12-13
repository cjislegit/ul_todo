import { Card, Flex } from '@chakra-ui/react';
import Todos from './components/Todos';

function App() {
  return (
    <Flex justify='center' align={'center'} pt={'10vh'}>
      <Card.Root>
        <Card.Body>
          <Card.Title mb={'20px'}>UL To Do List</Card.Title>
          <Todos />
        </Card.Body>
      </Card.Root>
    </Flex>
  );
}

export default App;
