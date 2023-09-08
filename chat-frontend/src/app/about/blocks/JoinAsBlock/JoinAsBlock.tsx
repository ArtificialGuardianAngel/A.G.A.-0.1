import { useContext } from 'react';
import { Button } from '../../components';
import StageContext from '../../context/StageContext';
import FormContext from '../../context/FormContext';
import styles from './JoinAsBlock.module.scss';

const JoinAsBlock = () => {
  const { setStage } = useContext(StageContext);
  const { setRole } = useContext(FormContext);

  const onClick = (role: string) => {
    setRole(role);
    setStage(16);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Click below to join as:</h2>
      <div className={styles.grid}>
        <Button onClick={() => onClick('Individual coder')}>
          Individual coder
        </Button>
        <Button onClick={() => onClick('Coding company')}>
          Coding company
        </Button>
        <Button onClick={() => onClick('University')}>University</Button>
        <Button onClick={() => onClick('Scientist')}>Scientist</Button>
        <Button onClick={() => onClick('Sponsor')}>Sponsor</Button>
        <Button onClick={() => onClick('Influencer')}>Influencer</Button>
        <Button onClick={() => onClick('Volunteer')}>Volunteer</Button>
        <Button onClick={() => onClick('Data provider')}>Data provider</Button>
        <Button onClick={() => onClick('Donor / Investor')}>
          Donor / Investor
        </Button>
        <Button onClick={() => onClick('Campus provider')}>
          Campus provider
        </Button>
      </div>
    </div>
  );
};

export default JoinAsBlock;
