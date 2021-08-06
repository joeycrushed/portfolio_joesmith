import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <div>
    <Section>
      <LeftSection>
        <SectionTitle>
          Welcome to <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Full stack developer ......
        </SectionText>
        <Button onClick={() => window.location = 'www.google.com'}>Learn More</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;