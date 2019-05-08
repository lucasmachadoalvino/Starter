import React, { Component } from 'react';
import { Section, Container, Content, Aside, Footer } from './style';

class Layout extends Component {
  render() {
    const { children, aside, footer } = this.props;
    return (
      <Section>
        <Container>
          <Content>{children}</Content>
          {aside && <Aside active>{aside}</Aside>}
        </Container>
        {footer && <Footer>{footer}</Footer>}
      </Section>
    );
  }
}

export default Layout;
