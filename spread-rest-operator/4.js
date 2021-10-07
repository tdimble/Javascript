const filter = (...args) => {

    return args.filter(el => el.name === 'Tushar');

}

console.log(filter({'name':'Tushar'},{'name':'Dimble'}));