module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { name, description, price, imageurl } = req.body;

        dbInstance.create_product([ name, description, price, imageurl ])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      },
    
    getOne: (req, res, next) => {
        const dbInstance= req.app.get('db');
        const { params } = req;

        dbInstance.read_product([ params.id ])
            .then( () => res.sendStatus(200).send(product) )
            .catch( err => {
              res.status(500).send({errorMessage: "error retrieving product"})
              console.log(err)
            } );
    },
    
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');
        

        dbInstance.read_products()
            .then( () => res.sendStatus(200).send(products) )
            .catch( err => {
                res.status(500).send({errorMessage: "error retrieving all products"})
                console.log(err)
            } );
    },
     
    update: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;

        dbInstance.update_product([ params.id, query.desc ])
            .then( () => res.sendStatus(200) )
            .catch( err => {
                res.status(500).send({errorMessage: "failed to retrieve"})
                console.log(err)
            });
    },
    
    
    delete:(req,res, next) => {
        const dbInstance= req.app.get('db');
        const { params } = req;

        dbInstance.delete_product([params.id])
            .then( () => res.sendStatus(200)  )
            .catch( err => {
            res.status(500).send({errorMessage: "failed to delete"})
            console.log(err)
                }
            )}
}