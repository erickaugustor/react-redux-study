import axios from 'axios';

const instace = axios.create({
  baseURL: 'https://react-project-fbee2.firebaseio.com/',
});

export default instace;