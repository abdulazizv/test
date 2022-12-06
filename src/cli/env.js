const parseEnv = () => {
    Object.entries(process.env).reduce((acc,[key,value]) => {
        if(key.startsWith('RSS_')) console.log(`${key}=${value}`)
    })
};

parseEnv();