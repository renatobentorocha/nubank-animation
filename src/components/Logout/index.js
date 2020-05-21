import React from 'react';

import {Container, Button, LogoutText} from './styles';

export default function Logout({opacity}) {
  return (
    <Container style={{opacity}}>
      <Button>
        <LogoutText>SAIR DA CONTA</LogoutText>
      </Button>
    </Container>
  );
}
