import './newProduct.css'

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="newPorductForm">
        <div className="newProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="newProductItem">
          <label htmlFor="">Product Name</label>
          <input type="text" />
        </div>
        <div className="newProductItem">
          <label htmlFor="">Price</label>
          <input type="number" name="" id="" />
        </div>
        <div className="newProductItem">
          <label htmlFor="">In Stock</label>
          <input type="number" name="" id="" />
        </div>
        <div className="newProductItem">
          <label>Active</label>
          <select className="newProductSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  )
}
