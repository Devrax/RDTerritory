interface GeoRD{
        pais: string;
        provincia: Provincia[];
}

interface Provincia{
    nombre: string;
    capital: string;
    municipio?: Municipio[]
}

interface Municipio{
    nombre: string;
    distrito?: string[]
}

const geoRD: GeoRD = 
    {
       pais:"Republica Dominicana",
       provincia:[
          {
             nombre:"Distrito Nacional",
             capital:"Santo Domingo de Guzmán",
             municipio: [
                {
                   nombre: "Santo Domingo de Guzmán"
                }
             ]
          },
          {
             nombre:"Azua",
             capital:"Azua de Compostela",
             municipio:[
                {
                   nombre:"Azua de Compostela",
                   distrito:[
                      "Barreras ",
                      "Barro Arriba ",
                      "Clavellina ",
                      "Emma Balaguer Viuda Vallejo ",
                      "Las Barías-La Estancia ",
                      "Las Lomas ",
                      "Los Jovillos ",
                      "Puerto Viejo"
                   ]
                },
                {
                   nombre:"Estebanía"
                },
                {
                   nombre:"Guayabal"
                },
                {
                   nombre:"Las Charcas",
                   distrito:[
                      "Hatillo",
                      "Palmar de Ocoa"
                   ]
                },
                {
                   nombre:"Las Yayas de Viajama",
                   distrito:[
                      "Villarpando",
                      "Hato Nuevo-Cortés"
                   ]
                },
                {
                   nombre:"Padre Las Casas",
                   distrito:[
                      "La Siembra",
                      "Las Lagunas",
                      "Los Fríos"
                   ]
                },
                {
                   nombre:"Peralta"
                },
                {
                   nombre:"Pueblo Viejo",
                   distrito:[
                      "El Rosario"
                   ]
                },
                {
                   nombre:"Sabana Yegua",
                   distrito:[
                      "Proyecto 4",
                      "Ganadero",
                      "Proyecto 2-C"
                   ]
                },
                {
                   nombre:"Tábara Arriba",
                   distrito:[
                      "Amiama Gómez",
                      "Los Toros",
                      "Tábara Abajo"
                   ]
                }
            ]
          },
          {
            nombre:"Baoruco",
            capital:"Neiba",
            municipio:[
                {
                   nombre:"Neiba",
                   distrito:[
                      "El Palmar"
                   ]
                },
                {
                   nombre:"Galván",
                   distrito:[
                      "El Salado"
                   ]
                },
                {
                   nombre:"Los Ríos",
                   distrito:[
                      "Las Clavellinas"
                   ]
                },
                {
                   nombre:"Tamayo",
                   distrito:[
                      "Mena",
                      "Monserrat",
                      "Santa Bárbara-El 6",
                      "Santana ",
                      "Uvilla"
                   ]
                },
                {
                   nombre:"Villa Jaragua"
                }
            ]
          },
          {
             nombre:"Barahona",
             capital:"Barahona",
             municipio:[
                {
                   nombre:"Barahona",
                   distrito:[
                      "El Cachón",
                      "La Guázara",
                      "Villa Central"
                   ]
                },
                {
                   nombre:"Cabral"
                },
                {
                   nombre:"El Peñón"
                },
                {
                   nombre:"Enriquillo",
                   distrito:[
                      "Arroyo Dulce"
                   ]
                },
                {
                   nombre:"Fundación",
                   distrito:[
                      "Pescadería"
                   ]
                },
                {
                   nombre:"Jaquimeyes",
                   distrito:[
                      "Palo Alto"
                   ]
                },
                {
                   nombre:"La Ciénaga",
                   distrito:[
                      "Bahoruco"
                   ]
                },
                {
                   nombre:"Las Salinas"
                },
                {
                   nombre:"Paraíso",
                   distrito:[
                      "Los Patos"
                   ]
                },
                {
                   nombre:"Polo"
                },
                {
                   nombre:"Vicente Noble",
                   distrito:[
                      "Canoa",
                      "Fondo Negro",
                      "Quita Coraza"
                   ]
                }
            ]
          },
          {
             nombre:"Dajabón",
             capital:"Dajabón",
             municipio:[
                {
                   nombre:"Dajabón",
                   distrito:[
                      "Cañongo"
                   ]
                },
                {
                   nombre:"El Pino",
                   distrito:[
                      "Manuel Bueno"
                   ]
                },
                {
                   nombre:"Loma de Cabrera",
                   distrito:[
                      "Capotillo",
                      "Santiago de la Cruz"
                   ]
                },
                {
                   nombre:"Partido"
                },
                {
                   nombre:"Restauración"
                }
             ]
          },
          {
             nombre:"Duarte",
             capital:"San Francisco de Macorís",
             municipio:[
                {
                   nombre:"San Francisco de Macorís",
                   distrito:[
                      "Cenoví ",
                      "Jaya ",
                      "La Peña ",
                      "Presidente Don Antonio Guzmán Fernández"
                   ]
                },
                {
                   nombre:"Arenoso",
                   distrito:[
                      "Aguacate",
                      "Las Coles"
                   ]
                },
                {
                   nombre:"Castillo"
                },
                {
                   nombre:"Eugenio María de Hostos",
                   distrito:[
                      "Sabana Grande"
                   ]
                },
                {
                   nombre:"Las Guáranas"
                },
                {
                   nombre:"Pimentel"
                },
                {
                   nombre:"Villa Riva",
                   distrito:[
                      "Agua Santa del Yuna",
                      "Barraquito",
                      "Cristo Rey de Guaraguao",
                      "Las Táranas"
                   ]
                }
            ]
          },
          {
             nombre:"El Seibo",
             capital:"El Seibo",
             municipio:[
                {
                   nombre:"El Seibo",
                   distrito:[
                      "Pedro Sánchez ",
                      "San Francisco-Vicentillo ",
                      "Santa Lucía"
                   ]
                },
                {
                   nombre:"Miches",
                   distrito:[
                      "El Cedro ",
                      "La Gina"
                   ]
                }
            ]
          },
          {
             nombre:"Elías Piña",
             capital:"Comendador",
             municipio:[
                {
                   nombre:"Comendador",
                   distrito:[
                      "Guayabo",
                      "Sabana Larga"
                   ]
                },
                {
                   nombre:"Bánica",
                   distrito:[
                      "Sabana Cruz ",
                      "Sabana Higüero"
                   ]
                },
                {
                   nombre:"El Llano",
                   distrito:[
                      "Guanito"
                   ]
                },
                {
                   nombre:"Hondo Valle",
                   distrito:[
                      "Rancho de la Guardia"
                   ]
                },
                {
                   nombre:"Juan Santiago"
                },
                {
                   nombre:"Pedro Santana",
                   distrito:[
                      "Río Limpio"
                   ]
                }
            ]
          },
          {
             nombre:"Espaillat",
             capital:"Moca",
             municipio:[
                {
                   nombre:"Moca",
                   distrito:[
                      "Canca La Reina ",
                      "El Higüerito ",
                      "José Contreras ",
                      "Juan López ",
                      "La Ortega ",
                      "Las Lagunas ",
                      "Monte de la Jagua ",
                      "San Víctor"
                   ]
                },
                {
                   nombre:"Cayetano Germosén"
                },
                {
                   nombre:"Gaspar Hernández",
                   distrito:[
                      "Joba Arriba ",
                      "Veragua ",
                      "Villa Magante"
                   ]
                },
                {
                   nombre:"Jamao al Norte"
                }
            ]
          },
          {
             nombre:"Hato Mayor",
             capital:"Hato Mayor del Rey",
             municipio:[
                {
                   nombre:"Hato Mayor del Rey",
                   distrito:[
                      "Guayabo Dulce ",
                      "Mata Palacio ",
                      "Yerba Buena"
                   ]
                },
                {
                   nombre:"El Valle"
                },
                {
                   nombre:"Sabana de la Mar",
                   distrito:[
                      "Elupina Cordero de Las Cañitas"
                   ]
                }
            ]
          },
          {
             nombre:"Hermanas Mirabal",
             capital:"Salcedo",
             municipio:[
                {
                   nombre:"Salcedo",
                   distrito:[
                      "Jamao Afuera"
                   ]
                },
                {
                   nombre:"Tenares",
                   distrito:[
                      "Blanco"
                   ]
                },
                {
                   nombre:"Villa Tapia"
                }
            ]
          },
          {
             nombre:"Independencia",
             capital:"Jimaní",
             municipio:[
                {
                   nombre:"Jimaní",
                   distrito:[
                      "Boca de Cachón ",
                      "El Limón"
                    ]
                },
                {
                   nombre:"Cristóbal",
                   distrito:[
                      "Batey 8"
                   ]
                },
                {
                   nombre:"Duvergé",
                   distrito:[
                      "Vengan a Ver"
                   ]
                },
                {
                   nombre:"La Descubierta"
                },
                {
                   nombre:"Mella",
                   distrito:[
                      "La Colonia"
                   ]
                },
                {
                   nombre:"Postrer Río",
                   distrito:[
                      "Guayabal"
                   ]
                }
            ]
          },
          {
             nombre:"La Altagracia",
             capital:"Higüey",
             municipio:[
                {
                   nombre:"Higüey",
                   distrito:[
                      "La Otra Banda ",
                      "Lagunas de Nisibón ",
                      "Verón-Punta Cana"
                   ]
                },
                {
                   nombre:"San Rafael del Yuma",
                   distrito:[
                      "Bayahibe ",
                      "Boca de Yuma"
                   ]
                }
            ]
          },
          {
             nombre:"La Romana",
             capital:"La Romana",
             municipio:[
                {
                   nombre:"La Romana",
                   distrito:[
                      "Caleta"
                   ]
                },
                {
                   nombre:"Guaymate"
                },
                {
                   nombre:"Villa Hermosa",
                   distrito:[
                      "Cumayasa"
                   ]
                }
            ]
          },
          {
             nombre:"La Vega",
             capital:"Concepción de La Vega",
             municipio:[
                {
                   nombre:"La Concepción de La Vega",
                   distrito:[
                      "El Ranchito ",
                      "Río Verde Arriba"
                   ]
                },
                {
                   nombre:"Constanza",
                   distrito:[
                      "La Sabina ",
                      "Tireo"
                   ]
                },
                {
                   nombre:"Jarabacoa",
                   distrito:[
                      "Buena Vista ",
                      "Manabao"
                   ]
                },
                {
                   nombre:"Jima Abajo",
                   distrito:[
                      "Rincón"
                   ]
                }
            ]
          },
          {
             nombre:"María Trinidad Sánchez",
             capital:"Nagua",
             municipio:[
                {
                   nombre:"Nagua",
                   distrito:[
                      "Arroyo al Medio ",
                      "Las Gordas ",
                      "San José de Matanzas"
                   ]
                },
                {
                   nombre:"Cabrera",
                   distrito:[
                      "Arroyo Salado ",
                      "La Entrada"
                   ]
                },
                {
                   nombre:"El Factor",
                   distrito:[
                      "El Pozo"
                   ]
                },
                {
                   nombre:"Río San Juan"
                }
            ]
          },
          {
             nombre:"Monseñor Nouel",
             capital:"Bonao",
             municipio:[
                {
                   nombre:"Bonao",
                   distrito:[
                      "Arroyo Toro-Masipedro ",
                      "La Salvia-Los Quemados ",
                      "Jayaco ",
                      "Juma Bejucal ",
                      "Sabana del Puerto"
                    ]
                },
                {
                   nombre:"Maimón"
                },
                {
                   nombre:"Piedra Blanca",
                   distrito:[
                      "Juan Adrián ",
                      "Villa Sonador"
                   ]
                }
            ]
          },
          {
             nombre:"Monte Plata",
             capital:"San Fernando de Montecristi",
             municipio:[
                {
                   nombre:"Montecristi"
                },
                {
                   nombre:"Castañuela",
                   distrito:[
                      "Palo Verde"
                   ]
                },
                {
                   nombre:"Guayubín",
                   distrito:[
                      "Cana Chapetón ",
                      "Hatillo Palma ",
                      "Villa Elisa"
                   ]
                },
                {
                   nombre:"Las Matas de Santa Cruz"
                },
                {
                   nombre:"Pepillo Salcedo"
                },
                {
                   nombre:"Villa Vásquez"
                }
            ]
          },
          {
             nombre:"Montecristi",
             capital:"Monte Plata",
             municipio:[
                {
                   nombre:"Monte Plata",
                   distrito:[
                      "Boyá ",
                      "Chirino ",
                      "Don Juan"
                   ]
                },
                {
                   nombre:"Bayaguana"
                },
                {
                   nombre:"Peralvillo"
                },
                {
                   nombre:"Sabana Grande de Boyá",
                   distrito:[
                      "Gonzalo ",
                      "Majagual"
                   ]
                },
                {
                   nombre:"Yamasá",
                   distrito:[
                      "Los Botados"
                   ]
                }
            ]
          },
          {
             nombre:"Pedernales",
             capital:"Pedernales",
             municipio:[
                {
                   nombre:"Pedernales",
                   distrito:[
                      "José Francisco Peña Gómez ",
                      "Juancho"
                   ]
                },
                {
                   nombre:"Oviedo"
                }
            ]
          },
          {
             nombre:"Peravia",
             capital:"Baní",
             municipio:[
                {
                   nombre:"Baní",
                   distrito:[
                      "Catalina ",
                      "El Carretón ",
                      "El Limonal ",
                      "Las Barías ",
                      "Matanzas ",
                      "Paya ",
                      "Sabana Buey ",
                      "Villa Fundación ",
                      "Villa Sombrero"
                   ]
                },
                {
                   nombre:"Nizao",
                   distrito:[
                      "Pizarrete ",
                      "Santana"
                   ]
                }
            ]
          },
          {
             nombre:"Puerto Plata",
             capital:"San Felipe de Puerto Plata",
             municipio:[
                {
                   nombre:"Puerto Plata",
                   distrito:[
                      "Maimón ",
                      "Yásica Arriba"
                   ]
                },
                {
                   nombre:"Altamira",
                   distrito:[
                      "Río Grande"
                   ]
                },
                {
                   nombre:"Guananico"
                },
                {
                   nombre:"Imbert"
                },
                {
                   nombre:"Los Hidalgos",
                   distrito:[
                      "Navas"
                   ]
                },
                {
                   nombre:"Luperón",
                   distrito:[
                      "Belloso ",
                      "Estrecho ",
                      "La Isabela"
                   ]
                },
                {
                   nombre:"Sosúa",
                   distrito:[
                      "Cabarete ",
                      "Sabaneta de Yásica"
                   ]
                },
                {
                   nombre:"Villa Isabela",
                   distrito:[
                      "Estero Hondo ",
                      "Gualete ",
                      "La Jaiba"
                   ]
                },
                {
                   nombre:"Villa Montellano"
                }
            ]
          },
          {
             nombre:"Samaná",
             capital:"Santa Bárbara de Samaná",
             municipio:[
                {
                   nombre:"Samaná",
                   distrito:[
                      "Arroyo Barril ",
                      "El Limón ",
                      "Las Galeras"
                   ]
                },
                {
                   nombre:"Las Terrenas"
                },
                {
                   nombre:"Sánchez"
                }
            ]
          },
          {
             nombre:"San Cristóbal",
             capital:"San Cristóbal",
             municipio:[
                {
                   nombre:"San Cristóbal",
                   distrito:[
                      "Hato Damas"
                   ]
                },
                {
                   nombre:"Bajos de Haina",
                   distrito:[
                      "El Carril"
                   ]
                },
                {
                   nombre:"Cambita Garabito",
                   distrito:[
                      "Cambita El Pueblecito"
                   ]
                },
                {
                   nombre:"Los Cacaos"
                },
                {
                   nombre:"Sabana Grande de Palenque"
                },
                {
                   nombre:"San Gregorio de Nigua"
                },
                {
                   nombre:"Villa Altagracia",
                   distrito:[
                      "La Cuchilla ",
                      "Medina ",
                      "San José del Puerto"
                   ]
                },
                {
                   nombre:"Yaguate"
                }
            ]
          },
          {
             nombre:"San José de Ocoa",
             capital:"San José de Ocoa",
             municipio:[
                {
                   nombre:"San José de Ocoa",
                   distrito:[
                      "El Naranjal",
                      "El Pinar ",
                      "La Ciénaga ",
                      "Nizao-Las Auyamas"
                   ]
                },
                {
                   nombre:"Rancho Arriba"
                },
                {
                   nombre:"Sabana Larga"
                }
             ]
          },
          {
             nombre:"San Juan",
             capital:"San Juan de la Maguana",
             municipio:[
                {
                   nombre:"San Juan de la Maguana",
                   distrito:[
                      "El Rosario ",
                      "Guanito ",
                      "Hato del Padre ",
                      "Hato Nuevo ",
                      "La Jagua ",
                      "Las Charcas de María Nova ",
                      "Pedro Corto ",
                      "Sabana Alta ",
                      "Sabaneta"
                   ]
                },
                {
                   nombre:"Bohechío",
                   distrito:[
                      "Arroyo Cano ",
                      "Yaque"
                   ]
                },
                {
                   nombre:"El Cercado",
                   distrito:[
                      "Batista ",
                      "Derrumbadero"
                   ]
                },
                {
                   nombre:"Juan de Herrera",
                   distrito:[
                      "Jínova"
                   ]
                },
                {
                   nombre:"Las Matas de Farfán",
                   distrito:[
                      "Carrera de Yegua ",
                      "Matayaya"
                   ]
                },
                {
                   nombre:"Vallejuelo",
                   distrito:[
                      "Jorjillo"
                   ]
                }
             ]
          },
          {
             nombre:"San Pedro de Macorís",
             capital:"San Pedro de Macorís",
             municipio:[
                {
                   nombre:"San Pedro de Macorís"
                },
                {
                   nombre:"Consuelo"
                },
                {
                   nombre:"Guayacanes"
                },
                {
                   nombre:"Quisqueya"
                },
                {
                   nombre:"Ramón Santana"
                },
                {
                   nombre:"San José de Los Llanos",
                   distrito:[
                      "El Puerto ",
                      "Gautier"
                   ]
                }
            ]
          },
          {
             nombre:"Sánchez Ramírez",
             capital:"Cotuí",
             municipio:[
                {
                   nombre:"Cotuí",
                   distrito:[
                      "Caballero ",
                      "Comedero Arriba ",
                      "Quita Sueño"
                   ]
                },
                {
                   nombre:"Cevicos",
                   distrito:[
                      "La Cueva ",
                      "Platanal"
                   ]
                },
                {
                   nombre:"Fantino"
                },
                {
                   nombre:"La Mata",
                   distrito:[
                      "Angelina ",
                      "La Bija ",
                      "Hernando Alonzo"
                   ]
                }
             ]
          },
          {
             nombre:"Santiago",
             capital:"Santiago de los Caballeros",
             municipio:[
                {
                   nombre:"Santiago",
                   distrito:[
                      "Baitoa ",
                      "Hato del Yaque ",
                      "La Canela ",
                      "Pedro García ",
                      "San Francisco de Jacagua"
                   ]
                },
                {
                   nombre:"Bisonó"
                },
                {
                   nombre:"Jánico",
                   distrito:[
                      "El Caimito ",
                      "Juncalito"
                   ]
                },
                {
                   nombre:"Licey al Medio",
                   distrito:[
                      "Las Palomas"
                   ]
                },
                {
                   nombre:"Puñal",
                   distrito:[
                      "Canabacoa ",
                      "Guayabal"
                   ]
                },
                {
                   nombre:"Sabana Iglesia"
                },
                {
                   nombre:"San José de las Matas",
                   distrito:[
                      "El Rubio ",
                      "La Cuesta ",
                      "Las Placetas"
                   ]
                },
                {
                   nombre:"Tamboril",
                   distrito:[
                      "Canca La Piedra"
                   ]
                },
                {
                   nombre:"Villa González",
                   distrito:[
                      "El Limón ",
                      "Palmar Arriba"
                   ]
                }
             ]
          },
          {
             nombre:"Santiago Rodríguez",
             capital:"San Ignacio de Sabaneta",
             municipio:[
                {
                   nombre:"San Ignacio de Sabaneta"
                },
                {
                   nombre:"Los Almácigos"
                },
                {
                   nombre:"Monción"
                }
            ]
          },
          {
             nombre:"Santo Domingo",
             capital:"Santo Domingo Este",
             municipio:[
                {
                   nombre:"Santo Domingo Este",
                   distrito:[
                      "San Luis"
                   ]
                },
                {
                   nombre:"Boca Chica",
                   distrito:[
                      "La Caleta"
                   ]
                },
                {
                   nombre:"Los Alcarrizos",
                   distrito:[
                      "Palmarejo-Villa Linda ",
                      "Pantoja"
                   ]
                },
                {
                   nombre:"Pedro Brand",
                   distrito:[
                      "La Cuaba ",
                      "La Guáyiga"
                   ]
                },
                {
                   nombre:"San Antonio de Guerra",
                   distrito:[
                      "Hato Viejo"
                   ]
                },
                {
                   nombre:"Santo Domingo Norte",
                   distrito:[
                      "La Victoria"
                   ]
                },
                {
                   nombre:"Santo Domingo Oeste"
                }
             ]
          },
          {
             nombre:"Valverde",
             capital:"Mao",
             municipio:[
                {
                   nombre:"Mao",
                   distrito:[
                      "Ámina ",
                      "Guatapanal ",
                      "Jaibón (Pueblo Nuevo)"
                   ]
                },
                {
                   nombre:"Esperanza",
                   distrito:[
                      "Boca de Mao ",
                      "Jicomé ",
                      "Maizal ",
                      "Paradero"
                   ]
                },
                {
                   nombre:"Laguna Salada",
                   distrito:[
                      "Cruce de Guayacanes ",
                      "Jaibón ",
                      "La Caya"
                   ]
                }
             ]
          }
        ]
    }
