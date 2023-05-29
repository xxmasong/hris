import { PaperLayout, PaperLayoutWrapper } from '@/styles/styled';
import { ReactNode } from 'react';

export type PaperContainerAttributes = {
  children: ReactNode;
}

function PaperContainer({ children }: PaperContainerAttributes) {
  return (
    <PaperLayoutWrapper>  
      <PaperLayout variant="outlined" square>
        { children }
      </PaperLayout>
    </PaperLayoutWrapper> 
  );
}


export default PaperContainer;
