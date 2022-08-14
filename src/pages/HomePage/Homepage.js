import React from "react";
import {Container} from '@mantine/core';
import {HeadContainer} from "./styles";
import Slider from "src/slider/Slider";


const title =
    "ÇEVRİMİÇİ KİTAP SATIN ALMANIN DAHA İYİ BİR YOLU."
const text =
    "Bookshop.org Nasıl Çalışır:" +
    "Bizim hikayemiz: Bookshop.org, giderek daha fazla insanın kitaplarını çevrimiçi satın aldığı bir zamanda kitapçıları ve topluluklarını desteklemeye yardımcı olmak için bir fikir olarak başladı.." +
    "Sosyal açıdan bilinçli çevrimiçi alışveriş yapanlar için Amazon'a bir alternatif oluşturma fırsatı gördük. Amazon, ABD'deki tüm kitapların %60'ından fazlasını satıyor ve büyüyor. Bu değişim kitapçıların geleceğini tehdit ediyor ve kitaplar için çeşitli, " +
    "sağlıklı bir ekosisteme güvenen okuyuculara, yazarlara ve yayıncılara zarar verecek. Daha iyi bir fikrimiz vardı - bağımsız kitapçıları desteklerken okuyuculara çevrimiçi alışverişin rahatlığını sağlamak."

const text2 =
    "COVID-19 pandemisi arttıkça, büyüyen platformumuz, bağımsız kitapçılar topluluğumuzun kapanmalardan kurtulmasına yardımcı oldu. O bahar, Bookshop.org'a gelen trafik tek bir günde 1 milyon kullanıcıya ulaştı. 2020'nin sonunda 1.000'den fazla kitapçıya ulaştık, " +
    "kar paylaşım havuzumuz için on milyon doların üzerinde para topladık ve müşterilerimizin %78'i geçiş yapmadan önce Amazon'dan düzenli olarak kitap aldıklarını söyledi."


const head = "Her Satın Alma Yerel Kitapçıları Destekler.  Çevrimiçi Kitap Satın Almanın Daha İyi Bir Yolu."

const HomePage = () => {
    return (
        <>
            <Container>
                <HeadContainer>
                    {head}
                    <br/>
                </HeadContainer>
                <br/>
                <Slider/>
                <br/>

                {title}
                <br/>
                {text}
                <br/>
                {text2}
            </Container>
        </>


    );
};

export default HomePage;

