app.get("/clientes", function (req,res) {

    const clientes = [
        {
            id: 1,
            nome: "Carlos"
        },
         
        {
            id: 2,
            nome: "Ana"
        }
    ];

    res.json(clientes);
    
});

