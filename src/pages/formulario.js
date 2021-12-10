import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Flex, Input, Button, Stack } from '@chakra-ui/react';
import Header from '../layouts/Header/index';

export default function Home() {
  useEffect(() => {
    const localStorageTasks = JSON.parse(localStorage.getItem('users1'));
    const tasks =
      localStorage.getItem('users1') !== null ? localStorageTasks : [];
    console.log(tasks);

    setTasks([...tasks]);
  }, []);

  const [tasks, setTasks] = useState([]);



  const [newTaskCpf, setNewTaskCpf] = useState('');

  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateTask(e) {
    e.preventDefault();

    const newTask = {
      id: Math.random(),
      title: newTaskTitle,

      cpf: newTaskCpf,


      isComplete: false,
    };
    console.log(tasks);

    if (!newTask) return;

    alert('usuário criado, não esqueça de clicar em SALVAR!');

    setTasks((oldstate) => [...oldstate, newTask]);


  }
  function salvarStorage() {
    localStorage.setItem('users1', JSON.stringify(tasks));
  }

  return (
    <>
      <Header />
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Head>
          <title>X-solar</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Flex
          as="form"
          flexDirection="column"
          onSubmit={handleCreateTask}
          background="var(--gray-700)"
          border="1px solid #eba417"
          alignItems="center"
          mt="-30px"
          borderRadius="8px"
          width="22rem"
          h="20rem"
          boxShadow="6.48483px 12.4075px 0px rgba(0, 0, 0, 0.24), 4.7167px 9.02455px 0px rgba(0, 0, 0, 0.19425), 3.28294px 6.28132px 0px rgba(0, 0, 0, 0.162), 2.15316px 4.11969px 0px rgba(0, 0, 0, 0.13875), 1.29697px 2.48151px 0px rgba(0, 0, 0, 0.12), 0.683946px 1.30861px 0px rgba(0, 0, 0, 0.10125), 0.283711px 0.54283px 0px rgba(0, 0, 0, 0.078), 0.0658615px 0.126014px 0px rgba(0, 0, 0, 0.04575);"
        >
          <label style={{ marginTop: '10px' }} htmlFor="">
            <big style={{ color: '#eac74a' }}>Formulário</big>
          </label>

          <Flex mt="4" flexDirection="column">
            <Stack spacing="2">
              <label className="email" htmlFor="">
                Nome
              </label>
              <Input
                id="title"
                color="gray.100"
                className="inputGroup"
                type="text"
                placeholder=""
                onChange={(e) => setNewTaskTitle(e.target.value)}
                value={newTaskTitle}
                focusBorderColor="yellow.200"
              />




              <label className="email" htmlFor="">
                CPF
              </label>

              <Input
                color="gray.100"
                className="inputGroup"
                type="numbers"
                placeholder=""
                onChange={(e) => setNewTaskCpf(e.target.value)}
                value={newTaskCpf}
                focusBorderColor="yellow.200"
              />




              <Flex justifyContent="space-between" w="100%">
                <Button
                  border="none"
                  color="colors.800"
                  colorScheme="yellow"
                  type="submit"
                  boxShadow="6.48483px 12.4075px 0px rgba(0, 0, 0, 0.24), 4.7167px 9.02455px 0px rgba(0, 0, 0, 0.19425), 3.28294px 6.28132px 0px rgba(0, 0, 0, 0.162), 2.15316px 4.11969px 0px rgba(0, 0, 0, 0.13875), 1.29697px 2.48151px 0px rgba(0, 0, 0, 0.12), 0.683946px 1.30861px 0px rgba(0, 0, 0, 0.10125), 0.283711px 0.54283px 0px rgba(0, 0, 0, 0.078), 0.0658615px 0.126014px 0px rgba(0, 0, 0, 0.04575);"
                >
                  Cadastrar
                </Button>
                <Link href="/">
                  <Button
                    boxShadow="6.48483px 12.4075px 0px rgba(0, 0, 0, 0.24), 4.7167px 9.02455px 0px rgba(0, 0, 0, 0.19425), 3.28294px 6.28132px 0px rgba(0, 0, 0, 0.162), 2.15316px 4.11969px 0px rgba(0, 0, 0, 0.13875), 1.29697px 2.48151px 0px rgba(0, 0, 0, 0.12), 0.683946px 1.30861px 0px rgba(0, 0, 0, 0.10125), 0.283711px 0.54283px 0px rgba(0, 0, 0, 0.078), 0.0658615px 0.126014px 0px rgba(0, 0, 0, 0.04575);"
                    border="none"
                    onClick={salvarStorage}
                    colorScheme="green"
                    type="button"
                    w="50%"
                  >
                    Salvar
                  </Button>
                </Link>
              </Flex>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
