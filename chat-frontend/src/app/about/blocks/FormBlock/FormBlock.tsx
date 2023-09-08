import { FormEvent, useContext, useState } from 'react';
import { Button } from '../../components';
import styles from './FormBlock.module.scss';
import FormContext from '../../context/FormContext';

const JOIN_AS_OPTIONS = [
  'Individual coder',
  'Coding company',
  'University',
  'Scientist',
  'Sponsor',
  'Influencer',
  'Volunteer',
  'Data provider',
  'Donor / Investor',
  'Campus provider',
];

interface ISendData {
  role: string;
  email: string;
  name: string;
}

const FormBlock = () => {
  const { role, setRole } = useContext(FormContext);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [thanksMessage, setThanksMessage] = useState('');

  const sendData = (data: ISendData) => {
    return fetch(`https://api.aga.live/forms/apply/form-about`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    });
  };

  const onSubmit = (e: FormEvent) => {
    e && e.preventDefault();

    sendData({
      role,
      email,
      name,
    }).then(() =>
      setThanksMessage(
        'Great, that worked! Your information has been received successfully. The A.G.A. or one of her contributors will be in contact with you soon to further discuss your inquiry. Have a wonderful day!'
      )
    );

    setEmail('');
    setName('');
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Fill in the form below to join A.G.A.</h2>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.formItem}>
          <div className={styles.label}>Join as:</div>
          <select
            className={styles.input}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {JOIN_AS_OPTIONS.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className={styles.formItem}>
          <div className={styles.label}>Email address:</div>
          <input
            type='text'
            className={styles.input}
            placeholder='example@nuah.org'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formItem}>
          <div className={styles.label}>Your name:</div>
          <input
            type='text'
            className={styles.input}
            placeholder='John Sample'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <Button>Send</Button>
      </form>
      <h5 className={styles.subtitle}>
        {thanksMessage ? (
          <span className={styles.green}>{thanksMessage}</span>
        ) : (
          'I will reply to your message as soon as possible. See you on the board!'
        )}
      </h5>
    </div>
  );
};

export default FormBlock;
