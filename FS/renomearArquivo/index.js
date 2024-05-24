const fs = require('node:fs')

const antigoArquivo = 'arquivo.txt'
const novoArquivo = 'novoArquivo.txt'

fs.rename(antigoArquivo, novoArquivo, (err)=>{
 if(err){
  return console.log(err)
 }
 console.log(`O arquivo ${antigoArquivo} foi renomado a ${novoArquivo}`)
 return
})
