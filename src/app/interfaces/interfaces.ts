export interface ResponseMovies{
    results:Movie[]
  }
  

export interface ResponseVideo{
  results:Video[]
}

  export interface MovieDetail{
    backdrop_path:string | null
    budget:number
    genres:Genre[]
    overview:string | null
    popularity: number
    release_date:string
    poster_path:string | null
    title:string
    tagline:string | null
  }

interface Genre{
  id:number
  name:string
}

export interface Movie{
    id: number
    original_title: string
    poster_path: string
  
  }



export interface Video{
  key:string

}