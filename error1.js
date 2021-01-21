setInterval(() => {
    console.log('시작');
    try{
        throw new Error('down server!!');
    }catch(err){
        console.error(err);
    }
}, 1000);