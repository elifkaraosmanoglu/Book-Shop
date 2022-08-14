import React from "react";
import {Container, Image, Title} from '@mantine/core';
import aboutPage from "../../img/about.jpg";
import '../HomePage/styles';




const textf =
    "Kitapçı sayesinde artık Amazon'dan kitap satın almak için hiçbir neden yok.\n" +
    "\n" +
    "\n" +
    "Görevimiz: Yerel, bağımsız kitapçıların e-ticaret çağında gelişmesine yardımcı olmak. Vizyonumuz: Okurları dünyanın her yerindeki bağımsız kitapçılarla buluşturmak için çalışıyoruz.\n" +
    "\n" +
    "Yerel kitapçıların kültürü, merakı ve okuma sevgisini besleyen temel topluluk merkezleri olduğuna inanıyoruz ve onların hayatta kalmasına ve gelişmesine yardımcı olmaya kararlıyız. \n" +
    "\n" +
     "Platformumuz, bağımsız kitapçılara çevrimiçi rekabet edebilmeleri için araçlar ve yerel topluluklarda varlıklarını sürdürmelerine yardımcı olmak için finansal destek sağlar. \n" +
    "Bizim hikayemiz: Bookshop.org, giderek daha fazla insanın kitaplarını çevrimiçi satın aldığı bir zamanda kitapçıları ve topluluklarını desteklemeye yardımcı olmak için bir fikir olarak başladı. \n" +
    "Sosyal açıdan bilinçli çevrimiçi alışveriş yapanlar için Amazon'a bir alternatif oluşturma fırsatı gördük. Amazon, ABD'deki tüm kitapların %60'ından fazlasını satıyor ve büyüyor. \n" +
     "Bu değişim kitapçıların geleceğini tehdit ediyor ve kitaplar için çeşitli, sağlıklı bir ekosisteme güvenen okuyuculara, yazarlara ve yayıncılara zarar verecek. Daha iyi bir fikrimiz vardı - bağımsız kitapçıları desteklerken okuyuculara çevrimiçi alışverişin rahatlığını sağlamak.\n" +
    "Ocak 2020'de, yalnızca 88 kitapçı ortağı ve dört tutkulu kitapçıdan oluşan bir ekiple yola çıktık.\n" +
    
    "COVID-19 pandemisi arttıkça, büyüyen platformumuz, bağımsız kitapçılar topluluğumuzun kapanmalardan kurtulmasına yardımcı oldu. O bahar, Bookshop.org'a gelen trafik tek bir günde 1 milyon kullanıcıya ulaştı. 2020'nin sonunda 1.000'den fazla kitapçıya ulaştık, kar paylaşım havuzumuz için on milyon doların üzerinde para topladık ve müşterilerimizin %78'i geçiş yapmadan önce Amazon'dan düzenli olarak kitap aldıklarını söyledi. \n" +
    
    "Bookshop.org o zamandan beri uluslararası olarak genişledi ve Bookshop.org UK ve Bookshop.org İspanya'yı başlattı. Bir İklim Nötr şirketi olarak, sürdürülebilir bir şekilde çalışmayı taahhüt ediyoruz. B Corp sertifikasına sahip Bookshop.org, misyonumuzu ve kamu yararını finansal çıkarların üzerine koyarak kar marjımızın %80'den fazlasını bağımsız kitapçılara veriyor. Yönetim belgelerimizde şirketi asla Amazon'a veya herhangi bir büyük ABD perakendecisine satmayacağımız yazılıdır. \n" +

    "Bookshop.org sayesinde, yaşayabilirliğimiz konusunda endişelenmiyorum ... Sadece hayatta kalmak yerine gelişebilirim... Noëlle Santos \n" 


const texts = "Bizi Tercih Ettiğiniz İçin Teşekkür Ederiz"
const About = () => {
    return (
        <>
            <Container>
                <Title  className="title"
                order={1}>Biz Kimiz</Title>
                {textf}
                
                {texts}
                <Image
                    height={550}
                    width={900}
                    src={aboutPage}
                    alt=""
                />
            </Container>


        </>
    );
};

export default About;