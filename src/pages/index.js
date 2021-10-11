import { useEffect, useState } from 'react';
import {
  Flex,
  Input,
  Button,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
 
} from '@chakra-ui/react';

import { FaRegTrashAlt } from 'react-icons/fa';
import Header1 from '../layouts/Header1';


/* eslint-disable @next/next/no-html-link-for-pages */
export default function Cadastro() {
  function removeTasks(id) {
    const deleteTasks = tasks.filter((task) => task.id !== id);
    setTasks(deleteTasks);
    alert('excluído com sucesso! Não esqueça de SALVAR')
  }

  function salvarStorage() {
    localStorage.setItem('users1', JSON.stringify(tasks));
    window.location.reload();
  }

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const localStorageTasks = JSON.parse(localStorage.getItem('users1'));
    const tasks =
      localStorage.getItem('users1') !== null ? localStorageTasks : [];
    console.log(tasks);

    setTasks([...tasks]);
  }, []);

  return (
    <>
    <Header1 />
    <Flex justifyContent='center' flexDirection='column'>
      
      <Flex w='100%'>
        <Table >
          <Thead >
            <Tr>
              <Th color='gray.300'>Nome </Th>
              <Th color='gray.300'>E-mail </Th>
              <Th color='gray.300'>CPF </Th>
              <Th color='gray.300'>Telefone </Th>
              <Th color='gray.300'>Endereço</Th>
              <Th color='gray.300'>Endereço2</Th>
              <Th></Th>
            </Tr>
          </Thead>

          {tasks.map((task, key) => (
            <Tbody key={key}>
              <Tr>
                <Td>{task.title}</Td>
                <Td>{task.email} </Td>
                <Td>{task.cpf}</Td>
                <Td>{task.telefone}</Td>
                <Td>{task.endereco}</Td>
                <Td>{task.endereco}</Td>
                <Td>
                  <Flex
                    cursor="pointer"
                    type="button"
                    color="red.900"
                    onClick={() => removeTasks(task.id)}
                  >
                    <FaRegTrashAlt />
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          ))}
          <Flex>
            <Button
              boxShadow="6.48483px 12.4075px 0px rgba(0, 0, 0, 0.24), 4.7167px 9.02455px 0px rgba(0, 0, 0, 0.19425), 3.28294px 6.28132px 0px rgba(0, 0, 0, 0.162), 2.15316px 4.11969px 0px rgba(0, 0, 0, 0.13875), 1.29697px 2.48151px 0px rgba(0, 0, 0, 0.12), 0.683946px 1.30861px 0px rgba(0, 0, 0, 0.10125), 0.283711px 0.54283px 0px rgba(0, 0, 0, 0.078), 0.0658615px 0.126014px 0px rgba(0, 0, 0, 0.04575);"
              type="button"
              colorScheme="green"
              border="none"
              onClick={salvarStorage}
              borderRadius='0px 8px 12px 0'
            >
              salvar
            </Button>
          </Flex>
        </Table>
      </Flex>
      
    </Flex>
    </>
  );
}
