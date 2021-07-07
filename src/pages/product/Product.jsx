import { Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './product.css'
import Chart from './../../components/chart/Chart'
import { productData } from '../../dummyData'

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="https://picsum.photos/100/150" alt="" className="productInfoImg" />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoButtom">
            <div className="proudctInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="proudctInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">4560</span>
            </div>
            <div className="proudctInfoItem">
              <span className="productInfoKey">Price</span>
              <span className="productInfoValue">240</span>
            </div>
            <div className="proudctInfoItem">
              <span className="productInfoKey">Active:</span>
              <span className="productInfoValue">Yes</span>
            </div>
            <div className="proudctInfoItem">
              <span className="productInfoKey">In Stock:</span>
              <span className="productInfoValue">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpods" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://picsum.photos/100/150"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}
