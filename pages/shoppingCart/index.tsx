import { NextPage} from 'next';
import { Product } from 'app/types';
import { useState, useEffect} from 'react';
import { MainLayout} from 'components';
import ModalPayment from 'components/products/payments/ModalPayment';
import ProductOnCart from 'components/products/ProductOnCart'
import styles from 'styles/ShoppingCart.module.css'
import useLocalStorage from 'use-local-storage';
import Image from 'next/image';
import EmptyCart from "public/xempty-cart.png"
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'


const Cart : NextPage = withPageAuthRequired(() => {
    // let products : Product[] = [];
    const [cartProducts, setCartProducts] = useState<Product[]>([])
    const [products, setProducts] = useLocalStorage<Product[]>("cartProducts", [])
    // if (typeof window !== 'undefined') {
        //     var [cartProducts, setCartProducts] = useState<Product[]>(() => {
            //         const saved = localStorage.getItem("cartProducts")
            //         const products = JSON.parse(saved!);
            //         return products
            //     })
            
    //}
    // const setLocalStorageAtComponentMount = () => {
    //     setCartProducts(() => {
    //         // const saved = localStorage.getItem("cartProducts")
    //         // const products = JSON.parse(saved!);

    //         return products
    //     })
    // }
    const handleAddToCart = (clickedItem: Product) => {
        
        if(!clickedItem.amount) clickedItem.amount=0
        setCartProducts(prev => {
          // is the item already added in the cart
          const isItemInCart = prev.find(item => item.id === clickedItem.id); 
          
          if (isItemInCart) {
            return prev?.map(item => 
              item.id === clickedItem.id 
              ? { ...item, amount: item.amount! + 1, stock: item.stock-1 } 
              : item 
            );
          };
          
          // first time the item is added 
          return [...prev, {...clickedItem, amount: 1, stock: clickedItem.stock-1}];
      
        })        
    };
    const handleRemoveFromCart = (id: string) => {
        setCartProducts(prev => 
        prev.reduce((acc, item) => {
        if (item.id === id) {
            if (item.amount === 1) return acc;
            return [...acc, {...item, amount: item.amount! - 1, stock: item.stock + 1}]
        } else {
            return [...acc, item]; 
        }
        },  [] as Product[])
    )
    };
    const getTotalPrice = () => {
        return cartProducts.reduce(
          (acc, product) => acc + product.amount! * product.price,
          0
        );
    };

    useEffect(() => {
        setCartProducts(products)
    }, [])
    
    useEffect(() => {
        // storing input cartProducts
        if(cartProducts.length){            
            setProducts(cartProducts)
        }
        else{
            setProducts([])
        }
        
    }, [cartProducts]);

    const priceToPay = getTotalPrice();  
    
    return (
        <MainLayout title="Pawsitive - Carrito">
            <div className={styles.cartContainer}>
                <h1 className="text-3xl font-bold">Carrito de compras</h1>
                <br />
                <div className={styles.container}>
                    {cartProducts.length === 0 ? (
                        <Image
                            src={EmptyCart}
                            alt="not found"
                        />
                    ) : (
                        <div className="body">
                            <div className={styles.header}>
                                <div>Imagen</div>
                                <div>Producto</div>
                                <div>Precio unitario</div>
                                <div>Cantidad</div>
                                <div>Agregar/Remover</div>
                                <div>Precio total producto</div>
                            </div>
                            {cartProducts.map((product: Product) => (
                                <ProductOnCart
                                    key={product.id}
                                    product={product}
                                    addToCart={handleAddToCart}
                                    removeFromCart={handleRemoveFromCart}
                                />
                            ))}
                        </div>
                    )}
                    <hr />
                    <div className={styles.total}>
                        <h3>Total compra: $ </h3>
                        <h3>{getTotalPrice()}</h3>
                    </div>
                    <ModalPayment price={priceToPay} />
                    {/* <button className={styles.paybutton}>Pagar</button>                                                */}
                </div>
            </div>
        </MainLayout>
    )
});

export default Cart;
