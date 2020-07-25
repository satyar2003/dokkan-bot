module.exports = {
    name: "test",
    execute(message, args){
        var length = args.length;
        var sub = args[0];
        //message.channel.send(length);
        switch(true)
        {
            case length == 0:
                message.channel.send(length)
            default:
                message.channel.send(sub);
        }
    }
}