import React from "react";
import Recipes from "../components/Recipes";
import greekSalad from "../assets/greek_salad.jpg"
import Swal from 'sweetalert2';


const RecipesMenu = () =>{

    const handleOrder = (e) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Your order has been processing.",
                icon: "success"
              });
            }
          });
    }

    return(
        <section name="RecipesMenu" className="container recipes-menu">

            <div className="title">
            
                <h2>This weeks specials!</h2>
                <button>Order Menu</button>

            </div>

            <div className="card">

                {
                    Recipes.map(e => {

                        return(

                        <div className="card-content">

                            <img className="card-image" src={greekSalad}/>

                            <div className="card-text" key={e.id}>
                                
                                <div className="price">
                                    <p><b>{e.title}</b></p>
                                    <p>{e.price}</p>
                                </div>
                                
                                <p>{e.description}</p>   

                                <button type="button" onClick={handleOrder}>Order Now</button>      

                            </div>


                        </div>
                        )
                    }
                    )
                }
            </div>
        </section>


    )
}

export default RecipesMenu;