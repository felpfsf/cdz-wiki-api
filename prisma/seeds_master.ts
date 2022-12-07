import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.master.create({
    data: {
      name: 'Marin',
      alignment: 'Athena',
      charClass: 'Amazona de Prata',
      armour: 'Armadura de Águia',
      imageUrl:
        'https://ik.imagekit.io/jaspionapi/marin-hawk.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670357312800',
      sex: 'male',
      age: 16,
      sign: 'Peixes',
      specie: 'humano',
      saintId: 1
    }
  })
  await prisma.master.create({
    data: {
      name: 'Dohko',
      alignment: 'Athena',
      charClass:
        'Cavaleiro de Bronze,Cavaleiro de Ouro,Guardião do Selo de Atena,Mestre dos Cinco Picos Antigos de Rozan, Grande Mestre',
      armour: 'Armadura de Libra',
      constelation: 'Libra',
      imageUrl:
        'https://ik.imagekit.io/jaspionapi/dohko-libra.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670436422626',
      sex: 'male',
      age: 261,
      sign: 'Libra',
      specie: 'humano',
      saintId: 2
    }
  })
  await prisma.master.create({
    data: {
      name: 'Camus',
      alignment: 'Athena',
      charClass: 'Cavaleiro de Ouro',
      armour: 'Armadura de Aquário',
      constelation: 'Aquarius',
      imageUrl:
        'https://ik.imagekit.io/jaspionapi/camus-aquarius.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670435700352',
      sex: 'male',
      age: 20,
      sign: 'Aquário',
      specie: 'humano',
      saintId: 3
    }
  })
  await prisma.master.create({
    data: {
      name: 'Albiore',
      alignment: 'Athena',
      charClass: 'Cavaleiro de Prata',
      armour: 'Armadura de Cefeu',
      constelation: 'Cepheus',
      imageUrl:
        'https://ik.imagekit.io/jaspionapi/albiore-cepheus.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670436476818',
      sex: 'male',
      specie: 'humano',
      saintId: 4
    }
  })
  await prisma.master.create({
    data: {
      name: 'Guilty',
      alignment: 'Athena',
      charClass: 'Guardião da Ilha da Rainha da Morte, Ex-Cavaleiro',
      imageUrl:
        'https://ik.imagekit.io/jaspionapi/guilty.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670436476704',
      sex: 'male',
      sign: 'Leão',
      specie: 'humano',
      saintId: 5
    }
  })
}

main()
