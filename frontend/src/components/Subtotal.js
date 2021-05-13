import React from 'react'
import '../stylings/Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../provider/StateProvider';
import { BasketTotal } from '../provider/Reducer';

function Subtotal() {

    const[{basket},dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText= {(value)=>(
                    <>
                        <p style={{marginTop: '-8px'}}>Subtotal ({basket.length} items) : <strong>{`${value}`}</strong></p><br></br>
                        <p className="subtotal__gift">
                            <input className="subtotal__input" type="checkbox"/>This order contains gift
                        </p>
                    </>
                )}
                decimalScale={2}
                value={BasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€ "}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
