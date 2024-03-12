// nodejs and express load balancing solutions

//laod balancing can be done using internal(cluster) and external(Ngnix) applications and cloud based load balancing(AWS)

//

// cluster module
const cluster = require('cluster');
const os = require('os');

if(cluster.isMaster){
  const noofcpus = os.cpus().length;
  for(let i=0;i<noofcpus;i++){
    cluster.fork();
  }
}

cluster.on('exit', (worker,code,signal) => {
  console.log(`Worker ${worker.pid} died. Forking a new one....`);
  cluster.fork();
}) else {
  require('/app.js')
}

//In a cluster we create a child process in a single instance

//it is similar to horizontal scaling on a single server

//Ngnix application 

//distributes incoming traffic among multiple servers using various load balancing algorithms.


