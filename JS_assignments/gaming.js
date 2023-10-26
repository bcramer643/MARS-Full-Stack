function calcSales() {

    const sales = [

        { item: "PS4 Pro", stock: 3, original: 399.99 },

        { item: "Xbox One X", stock: 1, original: 499.99, dicount: 0.1 },

        { item: "Nintendo Switch", stock: 4, original: 299.99 },

        { item: "PS2 Console", stock: 1, original: 299.99, dicount: 0.8 },

        { item: "Nintendo 64", stock: 2, original: 199.99, dicount: 0.65 }

    ];

    sales.forEach(sale => {

        const { original, dicount = 0.0, stock } = sale;

        sale["sale"] = original - dicount * original;

        sale["total"] = original * stock - original * stock * dicount;

    });

    console.log(sales);

}


calcSales();