try {
    if(true) {throw "Error";}
} catch (e) {
    console.error(e);
    return 0;
}

console.log("No Errors.");