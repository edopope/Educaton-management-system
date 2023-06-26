        function foo() {
        return new Promise((fulfill, reject) => {
        try
        {
        // do something
        fulfill("it was a success");
        }
        catch(e){
        reject("insufficent funds");
        }
        });
       }
      
