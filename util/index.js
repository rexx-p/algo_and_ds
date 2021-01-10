const clone = x => {
    return JSON.parse(JSON.stringify(x));
}

export { clone };