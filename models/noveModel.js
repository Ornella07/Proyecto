
var pool = require('./bd');


/* Sirve para listar novedades */
async function getNovedades(){
    var query = 'select * from portafolio';
    var rows = await pool.query(query);
    return rows;
}

/*Borrar novedad*/
async function deleteNovedadesById(id){
    var query = 'delete from portafolio where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

/*Insertar nueva novedad */
async function insertNovedad(obj){
    try{
        var query = 'insert into portafolio set ?';
        var rows = await pool.query(query,[obj])
        return rows;
    } catch(error){
        console.log(error);
        throw error;
    }//cierra catch
}//cierra insert


/*Modificar novedades*/
async function getNovedadesById(id){
    var query = 'select * from portafolio where id=?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarNovedadById(obj, id){
    try {
        var query = 'update portafolio set ? where id=?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error){
        throw error;
    }
}


//Opcion de buscador
async function buscarNovedades(busqueda){
    var query = 'select * from portafolio where titulo like ? OR descripcion like ?';
    var rows = await pool.query(query, ['%' + busqueda + '%' , '%' + busqueda + '%' , '%' + busqueda + '%']);
    return rows;
}

module.exports = { getNovedades, deleteNovedadesById, insertNovedad, getNovedadesById , modificarNovedadById , buscarNovedades }