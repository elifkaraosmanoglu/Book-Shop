import React from "react";
import {ShopCard} from "../../components/Card/ShopCard";
import {useState, useEffect} from 'react';
import {Pagination, SimpleGrid, LoadingOverlay} from '@mantine/core';
import {SearchBox} from "../../components/Search-Box/searchBox";


const Shop = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);


    const [query, setQuery] = useState("db");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const checkCharacterLength = (searchInput) => {
        if (searchInput.length >= 3) {
            loadData(1);
        }
    };

    useEffect(() => {
        checkCharacterLength(query);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);


    useEffect(() => {
        loadData(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadData = (pageNumber) => {
        setLoading(true);
        fetch(`https://api.itbook.store/1.0/search/${query}/${pageNumber}`)
            .then((data) => data.json())
            .then((response) => {
                setBooks(response.books);
                setLoading(false)
            })
            .catch(() => {
                setLoading(false);
            });
    };

    const onChange = (pageNumber) => {
        loadData(pageNumber);
    }
    return (

        <div style={{width: "100%", position: 'relative'}}>

            <SearchBox onChange={(e) => setQuery(e.target.value)}/>

            <LoadingOverlay visible={loading} overlayBlur={2}/>


            <SimpleGrid cols={2} spacing={50} style={{marginTop: '30px'}}>
                {books?.map((book) => {
                        return (
                            <ShopCard image={book.image} title={book.title}
                                      description={book.subtitle} price={book.price}
                            />
                        );
                    }
                )
                }

            </SimpleGrid>

            <Pagination color="orange" position={"center"} align={"center"} onChange={onChange} total={8}
                        size={"lg"} spacing={"md"} style={{margin: "3rem"}}/>

        </div>

    );
};

export default Shop;