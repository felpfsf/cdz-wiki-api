import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.saint.create({
    data: {
      name: 'Seiya',
      alignment: 'Athena',
      charClass: 'Cavaleiro de Bronze',
      armour: 'Armadura de Pégaso',
      constelation: 'Pegasus',
      imageUrl:
        'https://ik.imagekit.io/jaspionapi/seiya-pegasus.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670354499920',
      sex: 'male',
      age: 13,
      sign: 'Sagitário',
      specie: 'humano'
    }
  })
  await prisma.saint.create({
    data: {
      name: 'Shiryu',
      alignment: 'Athena',
      charClass: 'Cavaleiro de Bronze',
      armour: 'Armadura de Dragão',
      constelation: 'Draco',
      imageUrl:
        'https://ik.imagekit.io/jaspionapi/shiryu-draco.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670354535951',
      sex: 'male',
      age: 14,
      sign: 'Libra',
      specie: 'humano'
    }
  })
  await prisma.saint.create({
    data: {
      name: 'Hyoga',
      alignment: 'Athena',
      charClass: 'Cavaleiro de Bronze',
      armour: 'Armadura de Cisne',
      constelation: 'Cygnus',
      imageUrl:
        'https://ik.imagekit.io/jaspionapi/hyoga-cygnus.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670354499226',
      sex: 'male',
      age: 14,
      sign: 'Libra',
      specie: 'humano'
    }
  })
  await prisma.saint.create({
    data: {
      name: 'Shun',
      alignment: 'Athena',
      charClass: 'Cavaleiro de Bronze',
      armour: 'Armadura de Andrômeda',
      constelation: 'Andrômeda',
      imageUrl:
        'https://ik.imagekit.io/jaspionapi/shun-andromeda.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670354502904',
      sex: 'male',
      age: 13,
      sign: 'Virgem.pngVirgem',
      specie: 'humano'
    }
  })
  await prisma.saint.create({
    data: {
      name: 'Ikki',
      alignment: 'Athena',
      charClass: 'Cavaleiro de Bronze',
      armour: 'Armadura de Fênix',
      constelation: 'Fênix',
      imageUrl:
        'https://ik.imagekit.io/jaspionapi/ikki-phoenix.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670354500068',
      sex: 'male',
      age: 15,
      sign: 'Leão',
      specie: 'humano'
    }
  })
  await prisma.saint.create({
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
      specie: 'humano'
    }
  })
  await prisma.saint.create({
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
      specie: 'humano'
    }
  })
  await prisma.saint.create({
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
      specie: 'humano'
    }
  })
  await prisma.saint.create({
    data: {
      name: 'Albiore',
      alignment: 'Athena',
      charClass: 'Cavaleiro de Prata',
      armour: 'Armadura de Cefeu',
      constelation: 'Cepheus',
      imageUrl:
        'https://ik.imagekit.io/jaspionapi/albiore-cepheus.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670436476818',
      sex: 'male',
      specie: 'humano'
    }
  })
  await prisma.saint.create({
    data: {
      name: 'Guilty',
      alignment: 'Athena',
      charClass: 'Guardião da Ilha da Rainha da Morte, Ex-Cavaleiro',
      imageUrl:
        'https://ik.imagekit.io/jaspionapi/guilty.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670436476704',
      sex: 'male',
      sign: 'Leão',
      specie: 'humano'
    }
  })
}

main()
