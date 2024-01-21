import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import prisma from "@/app/keke/prismaClient";
import Link from "next/link";


const getData = async (id:string) => {
   const product = await prisma.product.findFirst({where: { id: +id }});
   return product;
};


export default async function MediaCard({params}: { params: { id: string }}) {
    const id = params.id;
    const data = await getData(id);
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/logo.png"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.description}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ padding: '5px 0', fontWeight: 'bold'}}>
                    {data.price} рублей
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" sx={{ padding: '5px 0'  }}>
                    Осталось на складе: {data.stock}
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent:'space-evenly'}}>
                <Button size="small" variant="contained">Купить</Button>
            </CardActions>
            <CardActions sx={{justifyContent:'space-evenly'}}>
                <Button size="small" variant="outlined" color="error">DELETE</Button>
                <Button size="small" variant="contained" color="secondary">
                    <Link href={`http://localhost:3000/posts/${data.id}/edit`}>UPDATE</Link>
                </Button>
            </CardActions>
        </Card>
    );
}
