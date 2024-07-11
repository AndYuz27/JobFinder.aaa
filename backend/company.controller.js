const db = require('./el_sql');

class CompanyController {
  async getCompanies(req, res) {
    const users = await db.query(`select * from company`)
    console.log('GET companies info')
    res.json(users)
  }
  async getCompany(req, res) {
    const id = req.params.id
    const users = await db.query(`select * from company where id =$1`, [id])
    console.log('GET company info')
    console.log(users.rows[0].id)
    console.log(users.rows[0].company_name)
    res.json(users)
  }
    async getCompanyByNick(req, res) {
    const id = req.params.id
    const users = await db.query(`select * from company where nik_name = $1`, [id])
    console.log('GET company info')
    // console.log(users.rows[0].id)
    // console.log(users.rows[0].company_name)
    res.json(users)
  }
      async getCompanyByName(req, res) {
    const id = req.params.id
    const users = await db.query(`select * from company where name_company = $1`, ['%' + id + '%'])
    console.log('GET company info')
    // console.log(users.rows[0].id)
    // console.log(users.rows[0].company_name)
    res.json(users)
  }
    async getCompanyByCity(req, res) {
    const id = req.params.id
    const users = await db.query(`select * from company where adress_comp like $1;`, ['%' + id + '%'])
    console.log('GET company info')
      //db.client.query("SELECT * FROM tags WHERE name LIKE $1", ['%' + tag + '%']
    // console.log(users.rows[0].id)
    // console.log(users.rows[0].company_name)
    res.json(users)
  }
  async createCompany(req, res) {
    const { nm, nick, pwd, ogrn, adrs, tcomp, sdey, vacs, cnts, info, rtg, img } = req.body
    const newUser = await db.query(`insert into company(company_name, nik_name, pwd, ogrn, adress_comp, type_comp, sfera_deyatel, vakansii, contacts__comp, company_info, rathing, image_company) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`, [nm, nick, pwd, ogrn, adrs, tcomp, sdey, vacs, cnts, info, rtg, img])
    console.log("data is added (user)")
    res.json(newUser)

  }
  async createInvite(req, res) {
    const { nm, fio, docs, email } = req.body
    const newUser = await db.query(`insert into company_into(comapny_name, fio, docs, email) values ($1, $2, $3, $4) RETURNING *`, [nm, fio, docs, email])
    console.log("data is added (invite)")
    res.json(newUser)

  }
  async getInvites(req, res) {
    const users = await db.query(`select * from company_into`)
    console.log('GET company info')
    res.json(users)
  }
  async getInviteById(req, res) {
    const id = req.params.id
    const users = await db.query(`select * from company_into where id = $1`, [id ])
    console.log('GET company info')
    res.json(users)
  }

  async delInvite(req, res) {
    const id = req.params.id
    const user = await db.query('DELETE FROM company_into where id = $1', [id])
    res.json(user)
  }


  
      async updComp(req, res){
        const { nm, ogrn, type, sfera, contacts, company_info, image_company, id} = req.body
        const user = await db.query(`update company set company_name = $1, ogrn = $2, type_comp = $3, sfera_deyatel = $4, contacts__comp = $5, company_info = $6, image_company = $7 where id = $8 RETURNING *`, [nm, ogrn, type, sfera, contacts, company_info, image_company, id])
        res.json(user)
        console.log('pass upd')
        
    }

  async delComp(req, res) {
    const id = req.params.id
    const user = await db.query('DELETE FROM company where id = $1', [id])
    res.json(user)
  }
}

module.exports = new CompanyController