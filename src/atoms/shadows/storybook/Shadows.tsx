import shadow from 'atoms/shadows/shadows';
import container from 'atoms/spacing/containers';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Paragraph from 'quarks/Paragraph';

import { objectKeys } from 'utils/typeUtils';

const Shadows = () => {
  const shadowArr = objectKeys(shadow);

  return (
    <Container>
      <Heading as="h1" marginBottom={20}>
        Shadows
      </Heading>
      <Paragraph
        maxWidth={container.md}
        textColor={{ light: 'gray-900', dark: 'gray-500' }}
        marginTop={8}
        marginBottom={32}
      >
        Shadows allow you to add depth and realism to designs by positioning elements on a z-axis.
      </Paragraph>
      <Flex display="flex" flexWrap="wrap" gap="64px" paddingBottom={64}>
        {shadowArr.map(shadowName => (
          <Container key={shadowName}>
            <Heading as="h6">{shadowName}</Heading>
            <Container
              minWidth="160px"
              minHeight="160px"
              backgroundColor={{ light: 'common-white', dark: 'common-white' }}
              boxShadow={shadowName}
            />
          </Container>
        ))}
      </Flex>
    </Container>
  );
};

export default Shadows;
