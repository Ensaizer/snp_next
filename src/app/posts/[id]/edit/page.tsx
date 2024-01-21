import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import prisma from "@/app/keke/prismaClient";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const getData = async (id) => {
    const product = await prisma.product.findFirst({where: { id: +id }});
    return product;
}


const EditProductPage = async ({params}) => {
    const data = await getData(params.id);
    const updateProduct = async ( id, formData:FormData) =>{
        'use server'
        const {name, multiplicity, deliveryTime, stock, price, description } = Object.fromEntries(formData);
        const data = { name, multiplicity: +multiplicity, deliveryTime:new Date(deliveryTime), price: +price, description, stock:+stock };

        await prisma.product.update({
            where: {id: +id},
            data
        })

        revalidatePath(`/posts`);
        redirect(`/posts/${id}`);
    }
    const handleSubmit = updateProduct.bind(null, data.id);

    return (
            <Box sx={{
                display:'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly'
            }}>
                <Typography variant="h3" mt={2}>
                    Краточка товара №{data.id}
                </Typography>
                <Box component="form" action={handleSubmit} >
                    <Box mb={6} mt={2} sx={{
                        display:'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap:'20px'
                    }}>
                        <TextField name="name" label="название" type="text" required defaultValue={data.name}/>
                        <TextField name="multiplicity" label="multiplicity" type="text" required
                                   defaultValue={data.multiplicity}/>
                        <TextField name="article" label="артикл" type="article" required defaultValue={data.article}/>
                    </Box>
                    <Box mb={6} mt={2} sx={{
                        display:'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap:'20px'
                    }}>
                        <TextField name="deliveryTime" label="время доставки" type="date" required
                                   defaultValue={data.deliveryTime}/>
                        <TextField name="stock" label="остаток на складе" type="number" required defaultValue={data.stock}/>
                        <TextField name="price" label="цена" type="number" required defaultValue={data.price}/>
                    </Box>

                    <Box mb={6}>
                        <TextField name="description" label="описание" type="text" required sx={{width:'100%'}}
                                   defaultValue={data.description}/>
                    </Box>

                    <Button type="submit" variant="contained" sx={{marginBottom: '20px'}}>Изменить данные</Button>
                </Box>
            </Box>
    )
};

export default EditProductPage;
