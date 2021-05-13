export const initialState ={
    basket :[],
    user: null,
};

export const BasketTotal = (basket)=> basket?.reduce((amount,item)=> item.price + amount, 0);


const reducer = (state,action)=>{
    console.log(action)
    switch(action.type){
        case "SET_USER":
            return{
                ...state, user: action.user,
            };
        case "ADD":
            return{
                ...state,
                basket : [...state.basket,action.item]
            };


        case "REMOVE":
            // let newBasket ={...state.basket}
            // const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            // if(index >= 0){
            //     newBasket.splice(index, 1);
            // }else{
            //     alert("Nothing to remove");
            // }
            // return{...state, basket: newBasket};
            const newBasket = state.basket.filter((item)=>item.id !== action.id);
            return{...state, basket: newBasket}

        default:
            return state;
    }
}
export default reducer;