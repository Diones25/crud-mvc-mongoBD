const chalk = require('chalk');
const mongoose = require('mongoose')

async function main() {
  await mongoose.connect(`mongodb://localhost:27017/testedb`)
  console.log(chalk.bgGreenBright.black('Conetado ao MongoDB com sucesso'));
}

main().catch((err) => {
  console.log(chalk.bgRedBright.black(`ERRO: ${err}`))
});

module.exports = mongoose;