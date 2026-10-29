import db from '#lib/db.js'

export async function load({params}) {
    
let movie = await db.getMovie(params.movie_id)

    return {
        movie: movie
    }
    
}