const db = require('./el_sql');

class VacancyController {
  // async createUser(req, res){
  //     const {fio, nick, pwd, exp, prtf, city, phone, email, ps_id} = req.body
  //     const newUser = await db.query(`insert into finders(full_name_fndr, nik_name, pwd, experience, portfolio, city, phone, email, position_id) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`, [fio, nick, pwd, exp, prtf, city, phone, email, ps_id])
  //     console.log("data is added (user)")
  //     res.json(newUser)

  // }
  async getVacancyByCompany(req, res) {
    const id = req.params.id
    const users = await db.query(`SELECT * from vacancy where comp_id = $1`, [id])
    res.json(users)
  }

  async getVacancy(req, res) {
    const id = req.params.id
    const users = await db.query(`SELECT * from vacancy where id = $1`, [id])
    res.json(users)
  }
  async getVacancies(req, res) {
    const users = await db.query(`SELECT * from vacancy `)
    res.json(users)

  }
  async getPositions(req, res) {
    const users = await db.query(`SELECT * from j_position `)
    res.json(users)

  }
  async getFeedback(req, res) {
    const users = await db.query(`SELECT * from feedback `)
    res.json(users)

  }
  async getFeedbackByIdVac(req, res) {
    const id = req.params.id
    const users = await db.query(`SELECT * from feedback where id_vac  = $1`, [id])
    res.json(users)
  }
  async getFeedbackById(req, res) {
    const id = req.params.id
    const users = await db.query(`SELECT * from feedback where id  = $1`, [id])
    res.json(users)
  }
  async getFeedbackByIdCmp(req, res) {
    const id = req.params.id
    const users = await db.query(`SELECT * from feedback where comp_id  = $1`, [id])
    res.json(users)
  }
  async getVacancyByCity(req, res) {
    const id = req.params.id
    const users = await db.query(`select * from vacancy where addr_comp like $1;`, ['%' + id + '%'])
    console.log('GET company info')
    //db.client.query("SELECT * FROM tags WHERE name LIKE $1", ['%' + tag + '%']
    // console.log(users.rows[0].id)
    // console.log(users.rows[0].company_name)
    res.json(users)
  }
  async getVacancyByName(req, res) {
    const id = req.params.id
    const users = await db.query(`select * from vacancy where name_vacancy like $1;`, ['%' + id + '%'])
    console.log('GET company info')
    //db.client.query("SELECT * FROM tags WHERE name LIKE $1", ['%' + tag + '%']
    // console.log(users.rows[0].id)
    // console.log(users.rows[0].company_name)
    res.json(users)
  }
  async createPosition(req, res) {
    const { nm, imgp, desc } = req.body
    const newUser = await db.query(`insert into j_position(a_position, img_pos, desc_j) values ($1, $2, $3) RETURNING *`, [nm, imgp, desc])
    console.log("data is added (position)")
    res.json(newUser)

  }
  async createFeedback(req, res) {
    const { nm, ct, milo, phn, cmt, cv, idvac, comp_id } = req.body
    const newUser = await db.query(`insert into feedback(fio, city, email, phone, comment, cv_link, id_vac, comp_id) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`, [nm, ct, milo, phn, cmt, cv, idvac, comp_id])
    console.log("data is added (position)")
    res.json(newUser)

  }
  async createVacancy(req, res) {
    const { nm, salary, shdl, twrk, stovc, pos_id, comp_id, addr } = req.body
    const newUser = await db.query(`insert into vacancy(name_vacancy, salary, shedule_vacancy, type_work, state_of_vacancy, position_id, comp_id, addr_comp) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`, [nm, salary, shdl, twrk, stovc, pos_id, comp_id, addr])
    console.log("data is added (vacancy)")
    res.json(newUser)

  }
  async delVacancy(req, res) {
    const id = req.params.id
    const user = await db.query('DELETE FROM vacancy where id = $1', [id])
    res.json(user)
    console.log('deleted')
  }
  async delPosition(req, res) {
    const id = req.params.id
    const user = await db.query('DELETE FROM j_position where id = $1', [id])
    res.json(user)
    console.log('deleted')
  }
  async delFeedback(req, res) {
    const id = req.params.id
    const user = await db.query('DELETE FROM feedback where id = $1', [id])
    res.json(user)
    console.log('deleted')
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

module.exports = new VacancyController