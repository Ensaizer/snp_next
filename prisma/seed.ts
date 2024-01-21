import { PrismaClient, Prisma } from '@prisma/client'
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();


const createUsers = async () => {
    const roles = [
        {
            name: 'customer',
        },
        {
            name: 'partner',
        },
        {
            name: 'admin',
        },
    ];
    for (const role of roles) {
        const roleCreated = await prisma.role.create({
            data: role
        })
        console.log(`Пользователь с id ${roleCreated.id} успешно создан`)
    }


    const users = [
        {
            name: 'Антон',
            email: 'rokunecanton@gmail.com',
            password: await bcrypt.hash('1234', 10),
            phone: '+7-926-707-10-09',
            userType: 'физическое лицо',
            deliveryAddress: 'Московская область Красногорский район д. Путилково ул. Сходненская д.38 кв 147',
            discount: 0,
            roleId: 1,
            isApproved: true
        },
        {
            name: 'Владимир ',
            email: 'vladimir@gmail.com',
            password: await bcrypt.hash('1234', 10),
            phone: '+7-917-906-56-79',
            userType: 'физическое лицо',
            deliveryAddress: 'Московская область Красногорский район д. Путилково ул. Сходненская д.38 кв 147',
            discount: 0,
            roleId: 3,
            isApproved: true
        },
        {
            name: 'Евгения',
            email: 'vgev@gmail.com',
            password: await bcrypt.hash('1234', 10),
            phone: '+7-926-674-89-75',
            userType: 'Юридическое лицо',
            deliveryAddress: 'Москва ул. Строителей д.46 кв 56',
            discount: 0,
            roleId: 2,
            isApproved: true,
        },
        {
            name: 'Анатолий',
            email: 'toly@gmail.com',
            password: await bcrypt.hash('1234', 10),
            phone: '+7-926-674-89-75',
            userType: 'Юридическое лицо',
            deliveryAddress: 'Москва ул. Строителей д.46 кв 56',
            discount: 0,
            roleId: 1,
            isApproved: true,
        },
    ];

    for (const user of users) {
        const userCreated = await prisma.user.create({
            data: user
        })
        console.log(`Пользователь с id ${userCreated.id} успешно создан`)
    }


}

const createOrg = async () => {
    const organizations = [
        {
            userId: 3,
            INN: '9604064697',
            KPP: 'КПП36233401001',
            OGRN: 'ОГРН 306360059589 23.12.2005',
            corrAccount: '50902810716540010359',
            legalAddress: 'Москва улю Сухарева 15',
            currAccount: '60302810716540010359',
        },
        {   userId: 4,
            INN: '9604064697',
            KPP: 'КПП36233401001',
            OGRN: 'ОГРН 306360059589 23.12.2005',
            corrAccount: '50902810716540010359',
            legalAddress: 'Санкт-Петербург ул. Печина 23',
            currAccount: '60302810716540010359',
        }
    ]
    for (const or of organizations) {
        const orCreated = await prisma.organization.create({
            data: or
        })
        console.log(`Пользователь с id ${orCreated.id} успешно создан`)
    }
    const brands = [
        {
            name:'Volvo Construction',
            description: 'одна из производственных компаний, входящих в концерн Volvo. Осуществляет разработку, производство и обслуживание строительно-дорожных машин под маркой Volvo, оборудования для строительной и смежных отраслей.',
            logoPath: './VC.jpg'
        },
        {
            name:'Volvo Penta',
            description: 'Volvo Penta — шведская компания, входящая в Volvo Group, производитель судовых и промышленных двигателей.',
            logoPath: './penta.jpg'
        },
        {
            name:'Volvo Trucks',
            description: 'шведская автомобилестроительная компания, один из мировых лидеров по производству тяжёлых грузовиков. В переводе с латыни «volvo» означает «я кручусь» или «я качусь». Принадлежит второму в мире по величине производителю грузовиков «Volvo Group».',
            logoPath: './trucks.jpg'
        },
    ];

    for (const br of brands) {
        const brandCreated = await prisma.brand.create({
            data: br
        })
        console.log(`Пользователь с id ${brandCreated.id} успешно создан`)
    }

    const categories = [
        {
            name: 'Двигатели'
        },
        {
            name: 'Системы Охлаждения'
        },
        {
            name: 'Сцепления'
        },
        {
            name: 'Мосты и Ось'
        },
        {
            name: 'Датчики и Электродетали'
        },
        {
            name: 'Трансмиссия'
        },
        {
            name: 'Топливная Система'
        },
    ];

    for (const ct of categories) {
        const categoryCreated = await prisma.category.create({
            data: ct
        })
        console.log(`Пользователь с id ${categoryCreated.id} успешно создан`)
    }

    const carts = [
        {
            productId: 1,
            quantity: 1,
            userId: 4
        },
        {
            productId: 2,
            quantity: 1,
            userId: 3
        },
        {
            productId: 3,
            quantity: 3,
            userId: 2
        },
        {
            productId: 4,
            quantity: 2,
            userId: 1
        }
    ]
    for (const crt of carts) {
        const crtCreated = await prisma.cart.create({
            data: crt
        })
        console.log(`Пользователь с id ${crtCreated.id} успешно создан`)
    }
    const products = [
        {
            article: 'TAD1343GE_ORG_',
            brandId: 2,
            categoryId: 1,
            deliveryTime: new Date(),
            name: 'Двигатеь',
            description: 'Новый оригинал Дизельный двигатель Volvo Penta TAD1343GE (Вольво Пента TAD1343GE ) онлайн на snb2b.ru ',
            price: 9930,
            stock: 1,
            cartId: 1,
        },
        {
            article: 'TAD1342GE_ORG_',
            brandId: 2,
            categoryId: 1,
            deliveryTime: new Date(),
            name: 'Двигатель',
            description: 'Новый оригинал Дизельный двигатель Volvo Penta TAD1342GE (Вольво Пента TAD1342GE) онлайн на snb2b.ru',
            price: 70030,
            stock: 2,
            cartId: 1,
        },
        {
            article: '20758814_OEM_',
            brandId: 1,
            categoryId: 2,
            deliveryTime: new Date(),
            name: 'Интеркуллер Радиатора',
            description: 'Новый оригинал MAHLE CI354000P Charge air cooler онлайн на snb2b.ru ',
            price: 77065,
            stock: 3,
            cartId: 1,
        },
        {
            article: '21083292_OEM_',
            brandId: 3,
            categoryId: 2,
            deliveryTime: new Date(),
            name: 'Радиатор',
            description: 'Новый 21229195 Radiator онлайн на snb2b.ru',
            price: 9930,
            stock: 6,
            cartId: 1,
        },
        {
            article: '21615193 _ORG_',
            brandId: 3,
            categoryId: 3,
            deliveryTime: new Date(),
            name: 'Корзина сцепления',
            description: 'Новый оригинал Volvo Trucks 21615193 онлайн на snb2b.ru',
            price: 76600,
            stock: 100,
            cartId: 2,
        },
        {
            article: '82421049_SRP_',
            brandId: 2,
            categoryId: 3,
            deliveryTime: new Date(),
            name: 'Заглушка рамки фары левая',
            description: 'Новый 82421049 онлайн на snb2b.ru',
            price: 12000,
            stock: 100,
            cartId: 1,
        },
    ]
    for (const pr of products) {
        const prCreated = await prisma.product.create({
            data: pr
        })
        console.log(`Пользователь с id ${prCreated.id} успешно создан`)
    }
}




createUsers().then(() => createOrg())

