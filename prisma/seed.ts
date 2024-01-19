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
}





createUsers().then(() => createOrg())

