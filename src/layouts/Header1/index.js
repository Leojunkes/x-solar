import Link from 'next/link';
import { Flex, Button } from '@chakra-ui/react';

export default function Header1() {
  return (
    <Flex w="100%" h="8rem" pt="12px">
      <Flex htmlFor="">
        <img
          style={{
            boxShadow:
              '6.48483px 12.4075px 0px rgba(0, 0, 0, 0.24), 4.7167px 9.02455px 0px rgba(0, 0, 0, 0.19425), 3.28294px 6.28132px 0px rgba(0, 0, 0, 0.162), 2.15316px 4.11969px 0px rgba(0, 0, 0, 0.13875), 1.29697px 2.48151px 0px rgba(0, 0, 0, 0.12), 0.683946px 1.30861px 0px rgba(0, 0, 0, 0.10125), 0.283711px 0.54283px 0px rgba(0, 0, 0, 0.078), 0.0658615px 0.126014px 0px rgba(0, 0, 0, 0.04575)',
            width: '13.75rem',
            marginTop: '-40px',
            borderRadius: '0 0 40px 0',
          }}
          src="/imagens/xsolar.png"
        />
      </Flex>
      <Flex ml="-6" mt="8">
        <Link htmlFor="" href="/formulario">
          <Button
            _hover={{ bg: 'gray.600' }}
            boxShadow="6.48483px 12.4075px 0px rgba(0, 0, 0, 0.24), 4.7167px 9.02455px 0px rgba(0, 0, 0, 0.19425), 3.28294px 6.28132px 0px rgba(0, 0, 0, 0.162), 2.15316px 4.11969px 0px rgba(0, 0, 0, 0.13875), 1.29697px 2.48151px 0px rgba(0, 0, 0, 0.12), 0.683946px 1.30861px 0px rgba(0, 0, 0, 0.10125), 0.283711px 0.54283px 0px rgba(0, 0, 0, 0.078), 0.0658615px 0.126014px 0px rgba(0, 0, 0, 0.04575);"
            bg="gray.700"
            w="8rem"
            border="none"
          >
            <label
              style={{ marginRight: '50px', color: '#eac74a', margin: 'auto' }}
              className="opcoes"
              htmlFor=""
            >
              Novo cadastro
            </label>
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
