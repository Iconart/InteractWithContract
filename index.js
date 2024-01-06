require('dotenv').config();
const ethers = require('ethers');

const address = '0xcc99D26061559e47F8330ee9C059cCBc9a18054b';
const abi = [{"inputs":[{"internalType":"string","name":"taskName","type":"string"}],"name":"addTask","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"deleteTask","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllTask","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"bool","name":"isDone","type":"bool"}],"internalType":"struct Todo.TodoList[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"markDoneTask","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"string","name":"_name","type":"string"}],"name":"updateTask","outputs":[],"stateMutability":"nonpayable","type":"function"}];
//new ethers.providers.AlchemyProvider( [ network = "homestead" , [ apiKey ] ] )
const provider = new ethers.providers.AlchemyProvider('goerli', process.env.API);

function main() {
    //new ethers.Contract{ address, abi, signerOrProvider}
    const todoContract = new ethers.Contract(address, abi, provider)
}
