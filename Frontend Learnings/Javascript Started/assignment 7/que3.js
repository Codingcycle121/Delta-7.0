const object={
    message:"Hello world!",
    logMessage(){
        console.log(this.message);
    }
};
object.logMessage();
setTimeout(object.logMessage, 1000);