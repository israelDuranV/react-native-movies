import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Request from "../../servicios/request"

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        topMovies: [],
        recommendedmovies:[],
        filterMovies:[],
        detailMovie:{},
        similarMovies:[]
    },
    reducers:{
        clearTopMovie:(state) =>{
            state.topMovies = []
        },
        clearRecomendedMovies:(state)=>{
            state.recommendedmovies = []
        },
        clearFilterResults:(state)=>{
            state.filterMovies = []
        },
        clearSimilarMovies:(state)=>{
            state.similarMovie = {}
        },
        clearDetailMovie:(state)=>{
            state.detailMovie = {}
        }
    },
    extraReducers:(builder) =>{
        builder
        .addCase(getTopMovies.fulfilled, (state,action) =>{
            state.topMovies = action.payload
        })
        .addCase(getRecomendedMovies.fulfilled,(state,action)=>{
            state.recommendedMovies = action.payload
        })
        .addCase(getFilterMovies.fulfilled,(state,action)=>{
            state.filterMovies = action.payload
        })
        .addCase(getDetailMovie.fulfilled,(state,action)=>{
            state.detailMovie = action.payload
        })
        .addCase(getSimilarMovies.fulfilled,(state,action)=>{
            state.similarMovies = action.payload
        })
    }
})

export const getTopMovies = createAsyncThunk(
    'getTopMovies', 
    async () => {
        const response = await Request.getEncode('movie/top_rated')
        if(response){
            return response ?? []
        }else{
            throw 'Error fetch'
        }
    }
)

export const getRecomendedMovies = createAsyncThunk(
    'getRecomendedMovies', 
    async () => {
        const response = await Request.getEncode('movie/popular')
        if(response){
            return response ?? []
        }else{
            throw 'Error fetch'
        }
    }
)
export const getFilterMovies = createAsyncThunk(
    'getFilterMovies', 
    async (obj={}) => {
        const response = await Request.getEncode('search/movie',obj)
        if(response){
            return response ?? []
        }else{
            throw 'Error fetch'
        }
    }
)
export const getDetailMovie = createAsyncThunk(
    'getDetailMovie', 
    async (movie_id) => {
        const response = await Request.getEncode('movie/'+movie_id)
        if(response){
            return response ?? {}
        }else{
            throw 'Error fetch'
        }
    }
)
export const getSimilarMovies = createAsyncThunk(
    'getSimilarMovies', 
    async (movie_id) => {
        const response = await Request.getEncode('movie/'+movie_id+'/similar')
        if(response){
            return response ?? []
        }else{
            throw 'Error fetch'
        }
    }
)

export const { clearTopMovies, clearRecomendedMovies, clearFilterResults, clearDetailMovie, clearSimilarMovies } = moviesSlice.actions
export default moviesSlice.reducer 