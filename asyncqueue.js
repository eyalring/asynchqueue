const list = require('./linkedList')

  class fileUploadQueue{
      constructor(){
       this.list = new list.LinkedList();
       this.stop = false;

       this.uploadFile = (fileName, file) =>
       new Promise(resolve => {
       console.log(`Started uploading: ${fileName} and the file name is ${file}`);
       setTimeout(() => {
         console.log(`Done uploading: ${fileName}`)
         resolve();
       }, 5e3);
     });
      }
   
      async start(){
          let counter = 0;
            while(!this.stop){
                await this.sleepSyncronized();
                if(this.list.size>0){
                    const nameOfFile = this.list.head.value;
                    this.list.removeAt(0)
                    await this.uploadFile(counter++,nameOfFile);
                }
         }
      }
      add(position,nameOfFile){
        this.list.insertAt(parseInt(position),nameOfFile);
      }
      async sleepSyncronized(){
        return new Promise(resolve => {
            console.log(`Started sleep`);
            setTimeout(() => {
              console.log(`Finished sleep`)
              resolve();
            }, 5e3);
          });
      }
      
  }


  module.exports.fileUploadQueue = fileUploadQueue;
  
  

  