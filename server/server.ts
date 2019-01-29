import * as ORM from 'Sequelize'
import {Sequelize} from 'Sequelize'
const dbUrl = 'postgres://postgres:postgres@localhost:5432/complete-typescript-course'
const sequelize:sequelize = new ORM(dbUrl)

console.log('server is running...' )
