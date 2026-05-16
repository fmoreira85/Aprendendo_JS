app.get("/produtos", function (req,res) {

    const produtos = [
        {nome: "Arroz"},
        {nome: "Feijão"}
    ];

    res.json(produtos);
    
});