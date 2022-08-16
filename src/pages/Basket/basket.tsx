import React, {useEffect} from "react";
import {AcceptButtonContainer, BasketItemContainer, Container, SummaryContainer} from "./styles";
import {ChevronRight} from "tabler-icons-react";
import Button from "src/components/Button/Button";
import BasketItem from "./BasketItem";
import BasketSummary from "./BasketSummary";
import {useState} from "react";

const Basket = () => {
    const books = JSON.parse(localStorage.getItem('basketItems') ?? "[]");
    const [updatedBooks, setUpdatedBooks] = useState(books);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const setProducts = () => {
            const books = JSON.parse(localStorage.getItem('basketItems') ?? "[]");
            setUpdatedBooks(books);
            calculateTotalPrice(books);
        }
        const calculateTotalPrice = (books: any) => {
            let total =0;  
        for (let i = 0; i < books.length; i++) {   
            let price= books[i].price.substring(1);
             total=total+parseFloat(price);
         }
            setTotalPrice(total);
        }
        calculateTotalPrice(books);
         window.addEventListener('storage', setProducts);
        return () => {
            window.removeEventListener('storage', setProducts);
        }
    }, [books]);


    return (
        <Container>
            <BasketItemContainer>
                {updatedBooks?.map((basketItem: { image: string; title: string; rating: number; description: string; price: number; id: number; },
                                      index: any) => {
                    return (
                        <BasketItem
                            key={index}
                            image={basketItem?.image}
                            title={basketItem?.title}
                            price={basketItem?.price}
                            id={basketItem?.id}
                        />
                    );
                })}

                <AcceptButtonContainer>
                    <Button color="#e58f23" rightIcon={<ChevronRight size={20}/>} fullWidth={false}>
                        Sepeti Onayla
                    </Button>
                </AcceptButtonContainer>
            </BasketItemContainer>
            <SummaryContainer>
                <div style={{display: "flex", justifyContent: "end"}}>
                    <div style={{height: "40px", marginBottom: "1rem"}}/>
                </div>
                <BasketSummary totalPrice={totalPrice}/>
            </SummaryContainer>
        </Container>
    );
};

export default Basket;
