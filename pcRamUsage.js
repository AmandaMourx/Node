const os = require("os");

//essa função setInterval recebe dois parametros, uma função,
//e a quantidade de tempo em que ele vai demorar para executar essa função novamente, em milisegundos
// colocando 1000 milisegundos, quer dizer que ele vai executar essa função novamente a cada 1s

//ver o uso da memoria ram em tempo real

setInterval(() => {
  const { arch, platform, totalmem, freemem } = os;
  const tRam = totalmem() / 1024 / 1024;
  const fRam = freemem() / 1024 / 1024;
  const usage = 100 - ((fRam/tRam) * 100);

  const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRAM: `${parseInt(tRam)}: MB`,
    FreeRAM: `${parseInt(fRam)}: MB`,
    UsageRAM: `${usage.toFixed(2)}%`, 
    //toFixed() é uma função que vai limitar o numero de casas 
    //deois do ponto, parametro numero que é a quantidade de casas que vc quer ver
  };

  console.clear();
  console.table(stats);
  exports.stats = stats;
}, 1000);