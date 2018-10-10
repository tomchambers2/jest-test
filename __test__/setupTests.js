const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

console.log(enzyme);
console.log(Adapter);

enzyme.configure({ adapter: new Adapter() });
