const usuarios =  [];

function listar(req,res) {

    res.json(usuarios);
    
}

function criar(req,res) {

    usuarios.push(req.body);

    res.json(usuarios);
    
}

module.exports = {listar,criar};