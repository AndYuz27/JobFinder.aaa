const db = require('./el_sql');

class UserController {
    async createUser(req, res){
        const {fio, nick, pwd, exp, prtf, city, phone, email, ps_id} = req.body
        const newUser = await db.query(`insert into finders(full_name_fndr, nik_name, pwd, experience, portfolio, city, phone, email, position_id) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`, [fio, nick, pwd, exp, prtf, city, phone, email, ps_id])
        console.log("data is added (user)")
        res.json(newUser)

    }
    async getUsers(req, res){
        const users = await db.query(`select * from finders`)
        res.json(users)
    }
    async getAdmins(req, res){
        const users = await db.query(`select * from admin_conf`)
        res.json(users)
    }
    async getUser(req, res){
        const id = req.params.id
        const users = await db.query(`select * from finders where id =$1`, [id])
              res.json(users)

    }
    async getAdmin(req, res){
        const id = req.params.id
          const users = await db.query(`select * from admin where name_admin =$1`, [id])
          res.json(users)

    }
  
    async updUser(req, res){
        const {id ,fio, nick, exp, prtf, city, phone, email, ps_id} = req.body
        const user = await db.query(`update finders set full_name_fndr = $1, nik_name = $2, experience = $3, portfolio = $4, city = $5, phone = $6, email = $7, position_id = $8 where id = $9 RETURNING *`, [fio, nick, exp, prtf, city, phone, email, ps_id, id])
        res.json(user.rows[0])
    }

    async delUser(req, res){
        const id = req.params.id
        const user = await db.query('DELETE FROM finders where id = $1', [id])
        res.json(user.rows[0])
    }
    // async createVacancy(req, res){}
    // async getVacancies(req, res){}
    // async getVacancy(req, res){}
    // async updVacancy(req, res){}
    // async createCompany(req, res){}
    // async getCompanies(req, res){}
    // async getCompany(req, res){}
    // async updCompany(req, res){}
    // async createPosition(req, res){}
    // async getPositions(req, res){}
    // async getPosition(req, res){}
    // async updPosition(req, res){}
}

module.exports = new UserController