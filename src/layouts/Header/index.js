import Link from 'next/link';
import { Flex, Button } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex w="100vw" background="var(--gray-800)" h="8rem" pt="12px">
      <Flex htmlFor="">
        <img
          style={{ width: '13.75rem', marginTop: '-60px' }}
          src="/imagens/xsolar.png"
        />
      </Flex>
      <Flex ml='-6' mt="8">
        <Link htmlFor="" href="/cadastros">
          <Button  _hover={{bg:'gray.600'}} boxShadow='6.48483px 12.4075px 0px rgba(0, 0, 0, 0.24), 4.7167px 9.02455px 0px rgba(0, 0, 0, 0.19425), 3.28294px 6.28132px 0px rgba(0, 0, 0, 0.162), 2.15316px 4.11969px 0px rgba(0, 0, 0, 0.13875), 1.29697px 2.48151px 0px rgba(0, 0, 0, 0.12), 0.683946px 1.30861px 0px rgba(0, 0, 0, 0.10125), 0.283711px 0.54283px 0px rgba(0, 0, 0, 0.078), 0.0658615px 0.126014px 0px rgba(0, 0, 0, 0.04575);' bg="gray.700" w="8rem" border="none">
            <label
              style={{ marginRight: '50px', color: '#eac74a', margin: 'auto' }}
              className="opcoes"
              htmlFor=""
             
            >
              Cadastros
            </label>
          </Button>
        </Link>
        <Link href="/">
          <Button _hover={{bg:'gray.600'}} boxShadow='6.48483px 12.4075px 0px rgba(0, 0, 0, 0.24), 4.7167px 9.02455px 0px rgba(0, 0, 0, 0.19425), 3.28294px 6.28132px 0px rgba(0, 0, 0, 0.162), 2.15316px 4.11969px 0px rgba(0, 0, 0, 0.13875), 1.29697px 2.48151px 0px rgba(0, 0, 0, 0.12), 0.683946px 1.30861px 0px rgba(0, 0, 0, 0.10125), 0.283711px 0.54283px 0px rgba(0, 0, 0, 0.078), 0.0658615px 0.126014px 0px rgba(0, 0, 0, 0.04575);' bg='gray.700' border='none' ml="2">
            <label
              style={{  color: '#eac74a', margin: 'auto' }}
              className="opcoes"
              id="home"
              htmlFor=""
            >
              Home
            </label>
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}