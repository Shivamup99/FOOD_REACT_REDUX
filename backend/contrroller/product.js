import Products from '../modals/product.js'

export const createProducts = async(req,res)=>{
    try {
    let image = req.file.path
    const product = new Products({
        title:req.body.title,
        price:req.body.price,
        category:req.body.category,
    })
    product.image = image
    const saveProduct = await product.save()
    res.status(201).json(saveProduct)
    } catch (error) {
      res.status(500).json({message:error.message})  
    }
}

export const getProducts = async(req,res)=>{
    const qCategory = req.query.category
    let product;
    try {
        if(qCategory){
            product = await Products.find({category:{
                $in:[qCategory]
            }})
        } else{
            product = await Products.find().sort({_id:-1})
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})    
    }

}

export const getProduct = async(req,res)=>{
    try {
        let product = await Products.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const deleteProduct = async(req,res)=>{
    try {
     const product = await Products.findByIdAndDelete(req.params.id)
     if(product){
         res.status(200).json('product deleted')
     } else{
         res.status(400).json('product not found')
     }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
 }

 export const updateProduct  = async(req,res)=>{
    try {
        const product = await Products.findByIdAndUpdate(req.params.id,{
            $set: req.body
    },{new:true})
    console.log(req.body)
    res.status(200).json(product)
    console.log(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}