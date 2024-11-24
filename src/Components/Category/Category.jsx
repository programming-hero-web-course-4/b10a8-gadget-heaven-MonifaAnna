

const Category = ({item}) => {

    console.log(item);
    const {product_image,price,product_title} = item
    return (
        <div className=" border-2 border-[] my-4 card bg-base-100  shadow-xl justify-center items-center">
        <figure  className="w-[300px] h-[250px] p-5 ">
          <img
         
            src={product_image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>${price} </p>
          <div className="">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    );
};

export default Category;