import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there 👋, I'm <br/>
        Tom Mathews
      </SectionTitle> 
      <SectionText>
        Experienced Software Developer In Test with a demonstrated history of working in the internet industry. Experienced in designing and developing automation frameworks from the scratch to validate different customer facing products. Actively developing and improving skills in the Machine Learning and Artificial Intelligence field.
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}> Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;