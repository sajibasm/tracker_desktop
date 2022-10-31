import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Button, Grid, IconButton, Input } from '@chakra-ui/react';
import { useState } from 'react';
import icon from '../../../assets/icon.svg';
import AppButton from './common/AppButton';

const Login = () => {
  const [field, setField] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: { target: { value: any; name: any } }) => {
    const { value, name } = e.target;
    setField((prevState) => ({ ...prevState, [name]: value }));
    // console.log(field);
  };

  const handleSubmit = () => {
    console.log(field.username);
  };

  return (
    <Box px="4" my="auto" style={{ maxHeight: '100vh', margin: 'auto' }}>
      <IconButton aria-label="icon" icon={<ArrowBackIcon />} size="md" />
      <h1>Login</h1>
      <Box display="flex" flexDirection="column" style={{ gap: '10px' }}>
        <Input
          placeholder="Username"
          value={field.username}
          name="username"
          onChange={handleChange}
        />
        <Input
          placeholder="Password"
          value={field.password}
          name="password"
          onChange={handleChange}
        />
        <Box p={0} display="flex" justifyContent="space-between">
          <Button
            onClick={handleSubmit}
            variant="solid"
            size="md"
            colorScheme="telegram"
          >
            Login
          </Button>
          <Button variant="link" size="md" p={0}>
            Forgot Password
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
