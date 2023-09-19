import axios from 'axios'
const deadlines = await axios.get('http://127.0.0.1:3400/deadline');


export default deadlines.data.data;