import {Card, Image, Text, Group} from '@mantine/core';
import Button from "src/components/Button/Button";


export function ShopCard({image, title, description, price}) {

    function addToBasket() {
        const items = JSON.parse(localStorage.getItem('basketItems'));
        if (items) {
            items.push({image: image, title: title, description: description, price: price});
            localStorage.setItem('basketItems', JSON.stringify(items));
            window.dispatchEvent(new Event('storage'));
        } else {
            localStorage.setItem('basketItems', JSON.stringify([{
                image: image,
                title: title,
                description: description,
                price: price
            }]));
            window.dispatchEvent(new Event('storage'));
        }
    }

    return (
        <Card shadow="sm" p="lg" radius="md" withBorder
              style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <Card.Section>
                <Image
                    src={image}
                    height={200}
                    fit={"contain"}
                    alt=""
                    withPlaceholder
                />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={400}>{title}</Text>

            </Group>


            <Text size="sm" color="dimmed">
                {description}
            </Text>
            <Text size={"xl"} color="red" weight={600}>
                {price}
            </Text>

            <Button variant="light" color="orange" fullWidth mt="md" radius="md" onClick={addToBasket}>
                Add to Basket
            </Button>
        </Card>
    );

}