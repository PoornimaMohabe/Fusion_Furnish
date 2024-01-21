// import { useEffect, useState } from "react";
// import { addToCart, getSofas, getsingleSofa } from "../Products/productRedux/productAction";

// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// // import styles from "../Products/productDetails.module.css";
// import styles from "./AdminProductDetails.module.css";
// export default function AdminProductDetails() {
//     const dispatch = useDispatch();
//     const {id} = useParams();
//     // const state = useSelector(state => state.product);

//     // console.log(state);
//     const {sofa} = useSelector(state=>state.product);
//     useEffect(() => {
//         dispatch(getsingleSofa(id));
//     }, [id])

//     return (
//         <div>
//         <div className={styles.container}>
//           <div className={styles.main}>
//             <div className={styles.left}>
//               <div>
//                 <img src={sofa.image} />
//               </div>
//               <div className={styles.leftDown}>
//                 <div>
//                   <img src={sofa.url1} />
//                 </div>
//                 <div>
  
//                   <img src={sofa.url2} />
//                 </div>
//               </div>
//               <div className={styles.description}>
//                 <h2 style={{fontFamily:"sans-serif"}}>Specification:-</h2>
//                 <p>Elevate your space with our sleek and modern {sofa.title}. {sofa.title} is meticulously crafted to seamlessly blend style and functionality, creating a contemporary aesthetic that complements any decor.</p>
//                 <p>Our {sofa.type} are created with your relaxation in mind, offering a perfect balance of style and coziness.</p>
//               </div>
//             </div>
//             <div className={styles.right}>
//               <div>
//                 <h1>{sofa.title}</h1>
//               </div>
//               <div>
//                 <p> {sofa.type} {" >"} </p>
//                 <h2>Price:- Rs. {sofa.price}</h2>
//               </div>
//               <div>
//                 <p>Fabric texture and color:</p>
//                 <div className={styles.fabric}><img src="https://api.woodfans.ru/storage/uploads/images/kn8iLsymSOppqND13mAoHryqp0tODnZzhp53hIJO_cropped_2013_753.webp" /></div>
//               </div>
//               <div>
//                 <p>Select size:</p>
//                 <div className={styles.select}>
//                   <select className={styles.custom_arrow}>
//                     <option>Big</option>
//                     <option>Average</option>
//                     <option>Small</option>
//                   </select>
//                   <select>
//                     <option>1</option>
//                     <option>2</option>
//                     <option>3</option>
//                     <option>4+</option>
//                   </select>
//                 </div>
//               </div>
//               <div>
//                 <p>Softness of {sofa.type} cushions:</p>
//                 <select className={styles.custom_arrow}>
//                   <option>Tough</option>
//                   <option>Average</option>
//                   <option>Soft</option>
//                 </select>
//               </div>
//               <div>
//                 <button className={styles.submit} onClick={() => {addToCart({ ...sofa, qty: 1 },dispatch)}}>Add To Cart</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
// }

import { useEffect, useState } from "react";
import { updateSofa , getsingleSofa } from "../Products/productRedux/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./AdminProductDetails.module.css";

export default function AdminProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    image: "",
    url1: "",
    url2: "",
    url3: "",
    price: 0,
    id: null,
    category: "",
  });

  const { sofa } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getsingleSofa(id));
  }, [id]);

  useEffect(() => {
    // Update the form data when sofa changes
    setFormData({
      title: sofa.title,
      type: sofa.type,
      image: sofa.image,
      url1: sofa.url1,
      url2: sofa.url2,
      url3: sofa.url3,
      price: sofa.price,
      id: sofa.id,
      category: sofa.category,
    });
  }, [sofa]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("hello")
    // Dispatch the action to update the sofa data
    dispatch(updateSofa(id, formData));
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.main}>
        <h1 style={{"fontSize": "20px",
      "text-align": "center",
      "font-weight": "bold"}}>Update The Data</h1>
          {/* ... (existing JSX code) */}
          <form onSubmit={handleFormSubmit} className={styles.form}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Type:
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Image URL:
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
              />
            </label>
            <label>
              URL 1:
              <input
                type="text"
                name="url1"
                value={formData.url1}
                onChange={handleInputChange}
              />
            </label>
            <label>
              URL 2:
              <input
                type="text"
                name="url2"
                value={formData.url2}
                onChange={handleInputChange}
              />
            </label>
            <label>
              URL 3:
              <input
                type="text"
                name="url3"
                value={formData.url3}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </label>
            <label>
              ID:
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
                disabled
              />
            </label>
            <label>
              Category:
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="">Select Category</option>
                <option value="ArmChair">ArmChair</option>
                <option value="ChildrenFurniture">Children Furniture</option>
                <option value="Beds">Beds</option>
                <option value="Sofas">Sofas</option>
              </select>
            </label>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

