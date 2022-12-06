const parseArgs = () => {
    const Args = process.argv.slice(2)
    const cliArguments = Args.reduce((acc,arg,index,arr) => {
        const valueCandidate = arr[index+1]
        if(valueCandidate && arg.startsWith('---')){
            const newArgs = arg.slice(2)
            const newCliArguments = `${newArgs} is ${valueCandidate}`;
            acc.push(newCliArguments)
        }
        return acc
    },[]) 
    console.log(cliArguments.join(', '))
};

parseArgs();